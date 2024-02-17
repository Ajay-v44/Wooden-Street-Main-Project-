from rest_framework import serializers
from api.models import Transaction

class CreateRazorpay(serializers.Serializer):
    amount = serializers.IntegerField()
    currency = serializers.CharField()
class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Transaction
        fields="__all__"
