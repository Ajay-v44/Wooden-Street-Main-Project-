import razorpay
from django.conf import settings
client = razorpay.Client(
    auth=(settings.RAZORPPAY_KEY_ID, settings.RAZORPPAY_KEY_SECRET))
