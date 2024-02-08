from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
from rest_framework import status
from .models import Products, Cart, DeliveryAddress
from django.db.models import Q
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from .serializers import ProductSerializer, UserSerializer, CartSerializer_get, CartSerializer_post, CartSerializer_patch, DeliveryAddressSerializer, DeliveryAddressSerializer_get, DeliveryAddressSerializer_put
from django.views.decorators.csrf import get_token
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from django.middleware.csrf import rotate_token
from rest_framework.generics import get_object_or_404


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
                "token": token.key,
                "id": user.id
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
                "error": 5,
                "message": "sorry error occured"
            })


class AddToCart(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            serializer = CartSerializer_post(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    "message": "Added to Cart",
                    "status": status.HTTP_201_CREATED
                })
            else:
                return Response({
                    "message": "Try again",
                    "error": serializer.errors,
                    "status": status.HTTP_400_BAD_REQUEST
                })
        except Exception as e:
            return Response({
                "message": "Sorry, an error occurred",
                "status": status.HTTP_400_BAD_REQUEST,
                "error": str(e)
            })

    def get(self, request, id):
        try:
            data = Cart.objects.filter(user=id)
            serializer = CartSerializer_get(data, many=True)
            return Response(
                serializer.data)
        except Exception as e:
            return Response({
                "message": "sorry error occured",
                "status": status.HTTP_404_NOT_FOUND,
                "exception": str(e)
            })

    def patch(self, request, id):
        try:
            instance = get_object_or_404(Cart, id=id)
            serializer = CartSerializer_patch(
                instance, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    "data": serializer.data,
                    "message": "Updated",
                    "status": status.HTTP_202_ACCEPTED
                })
            else:
                return Response({
                    "message": "Try again",
                    "error": serializer.errors
                })
        except:
            return Response({
                "message": "Sorry something went wrong"
            })

    def delete(self, request, id):
        try:
            data = Cart.objects.filter(id=id).delete()
            if data[0] > 0:
                return Response({
                    "message": "deletd",
                    "status": status.HTTP_202_ACCEPTED
                })
            else:
                return Response({
                    "message": "Try again",
                })
        except:
            return Response({
                "message": "Sorry some thing went wrong"
            })


class DeliveryAddresss(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            serializer = DeliveryAddressSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response({
                    "message": "Sorry error occured try again",
                    "error": serializer.errors

                }, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({
                "message": "sorry error occured",
                "error": str(e)

            }, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        try:
            data = DeliveryAddress.objects.filter(user=id)
            if not data:
                return Response({
                    "message": "Not Found",
                    "status": status.HTTP_404_NOT_FOUND
                }, status=status.HTTP_404_NOT_FOUND)
            else:
                serializer = DeliveryAddressSerializer_get(data, many=True)
                return Response(serializer.data)
        except Exception as e:
            return Response({
                "message": "sorry error occured",
                "error": str(e)
            }, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, id):
        try:
            instance = DeliveryAddress.objects.get(user=id)
            serializer = DeliveryAddressSerializer_put(
                instance, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,
                                status.HTTP_202_ACCEPTED
                                )
            else:
                return Response({
                    "message": "Try again",
                    "error": serializer.errors
                }, status=status.HTTP_403_FORBIDDEN)
        except Exception as e:
            return Response({
                "message": "sorry error occured",
                "error": str(e)
            }, status=status.HTTP_404_NOT_FOUND)
