from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password']
        extra_kwargs = {
            'username': {'required': True},
            'first_name': {'required': True},
            'last_name': {'required': True},
            'email': {'required': True},
            'password': {'required': True},
        }

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(UserSerializer, self).create(validated_data)


class CartSerializer_post(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['product', 'product_name', 'price', 'qty', 'user']


class CartSerializer_get(serializers.ModelSerializer):
    product = ProductSerializer()
    user = UserSerializer()

    class Meta:
        model = Cart
        fields = ['id', 'product', 'product_name', 'price', 'qty', 'user']


class CartSerializer_patch(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['qty']


class DeliveryAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryAddress
        fields = ['id', 'user', 'mob1', 'mob2', 'postalcode', 'address',
                  'area', 'landmark', 'city', 'state']


class DeliveryAddressSerializer_get(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = DeliveryAddress
        fields = ['id', 'user', 'mob1', 'mob2', 'postalcode', 'address',
                  'area', 'landmark', 'city', 'state']


class DeliveryAddressSerializer_put(serializers.ModelSerializer):
    class Meta:
        model = DeliveryAddress
        fields = ['id', 'user', 'mob1', 'mob2', 'postalcode', 'address',
                  'area', 'landmark', 'city', 'state']


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"


class OrderSerializer_patch(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['status']


class OrderSerializer_get(serializers.ModelSerializer):
    user = UserSerializer()
    product = ProductSerializer()
    address = DeliveryAddressSerializer_get()

    class Meta:
        model = Order
        fields = ['id', 'user', 'product',  'address',
                  'total', 'date', 'status', 'order_id']


class CancelItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CancelItem
        fields = "__all__"
