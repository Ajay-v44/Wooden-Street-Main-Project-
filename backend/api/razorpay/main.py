from .import client


class RazorpayClient:
    def create_order(self, amount, currency):
        data = {
            "amount": amount,
            "currency": "INR"
        }
        try:
            order_data = client.order.create(data=data)
            return order_data
        except Exception as e:
            print(e)

    def verify_payment(self, razorpay_order_id, razorpay_payment_id, razorpay_signature):
        try:
             return client.utility.verify_payment_signature({
                'razorpay_order_id': razorpay_order_id,
                'razorpay_payment_id': razorpay_payment_id,
                'razorpay_signature': razorpay_signature
            })
        except Exception as e:
            print(e)
