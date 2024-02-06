from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly,IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
from rest_framework import status
from .models import Products
from django.db.models import Q
from rest_framework.authentication import TokenAuthentication
from .serializers import ProductSerializer, UserSerializer
from django.views.decorators.csrf import get_token
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from django.middleware.csrf import rotate_token


@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def products(request, type=None):
    if type:
        data = Products.objects.filter(
            Q(pname__icontains=type) | Q(pdesc__icontains=type))
        serializer = ProductSerializer(data, many=True)
        return Response(serializer.data)
    else:
        data = Products.objects.all()
        serializer = ProductSerializer(data, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def getdtproduct(request, id):
    try:
        data = Products.objects.get(id=id)
        serializer = ProductSerializer(data)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return Response({'message': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def createUser(request):
    try:
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = serializer.instance
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                "message": "User Created Successfully",
                "status": status.HTTP_201_CREATED,
                "token": token.key
            })
        else:
            return Response({
                "message": serializer.errors,
                "status": status.HTTP_400_BAD_REQUEST
            })
    except Exception as e:
        return Response({
            "message": f"User Already Exists. {e}",
            "status": status.HTTP_400_BAD_REQUEST,
        })
class CSRFTokenView(APIView):
    def get(self, request, *args, **kwargs):
        token = get_token(request)
        print("useris token", request.user)
        return JsonResponse({'csrf_token': token})

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = authenticate(request, username=username, password=password)
        
        if user:
            token, created = Token.objects.get_or_create(user=user)
            
            return Response({
                "message": "Welcome To Wooden Store",
                "status": status.HTTP_200_OK,
                "token": token.key
            })
        else:
            return Response({
                "message": "Credentials don't match",
                "status": status.HTTP_400_BAD_REQUEST
            })


class LogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        
        try:
            Token.objects.filter(user=request.user).delete()
           

            return Response({
                "message": "Logged out successfully",
                "status": status.HTTP_200_OK
            })
        except Exception as e:
            print(e)
            return Response({
                "error":5,
                "message":"sorry error occured"
            })
        
