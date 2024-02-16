from rest_framework import serializers


class CreateRazorpay(serializers.Serializer):
    amount = serializers.IntegerField()
    currency = serializers.CharField()
