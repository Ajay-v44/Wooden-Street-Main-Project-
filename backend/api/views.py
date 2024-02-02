from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
from rest_framework import status
from .models import *
from django.db.models import Q
from .serializers import *
# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def products(request, type=None):
    if type:
        data = Products.objects.filter(Q(pname__icontains=type)| Q(pdesc__icontains=type))
        serializer = ProductSerializer(data, many=True)
        return Response(
            serializer.data
        )
    else:
        data = Products.objects.all()
        serializer = ProductSerializer(data, many=True)
        return Response(
            serializer.data
        )


@api_view(['GET'])
def getdtproduct(request, id):
    try:
        data = Products.objects.filter(id=id)
        serializer = ProductSerializer(data, many=True)
        return Response(
            serializer.data
        )
    except:
        return Response(
            {
                'message': status.HTTP_404_NOT_FOUND,

            }
        )


@api_view(['POST'])
def createUser(request):
    try:
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "User Created Succesfully",
                 "status": status.HTTP_201_CREATED
                 }
            )
    except:
        return Response({
            "message": "User Already Exists",
            "status": status.HTTP_400_BAD_REQUEST,

        })


class LoginView(APIView):
    def post(self, request):
        user = authenticate(request, username=request.data.get(
            'username'), password=request.data.get('password'))
        if user:
            return Response({
                "message": "Welcome To Wooden Store",
                "status": status.HTTP_200_OK
            })
        else:
            return Response({
                "message": "Credential dont match",
                "status": status.HTTP_400_BAD_REQUEST
            })


class LogoutView(APIView):
    def post(self, request):
        if request.user:
            logout(request)
            return Response({
                "message": "logged out successfully",
                "status": status.HTTP_200_OK
            })
        else:
            return Response({
                "message": "Sorry Error Occured",
                "status": status.HTTP_406_NOT_ACCEPTABLE
            })
