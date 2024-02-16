from .import client


class RazorpayClient:
    def create_order(self, amount, currency):
        data = {
            "amount": amount,
            "currency": "INR"
        }
        try:
          order_data= client.order.create(data=data)
          return order_data
        except Exception as e:
            print(e)
