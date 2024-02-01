from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *
# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def products(request):
    data = Products.objects.all()    
    serializer = ProductSerializer(data, many=True)
    return Response(
        serializer.data
    )
