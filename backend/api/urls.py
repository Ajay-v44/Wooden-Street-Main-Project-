from django.urls import path
from rest_framework.authtoken import views
from .views import *
urlpatterns = [
    # products
    path('products/', products, name='products'),
    path('products/<str:type>/', products, name='products_type'),
    path('dtproducts/<int:id>/', getdtproduct, name='dtproducts'),
    path('register/', createUser, name='create_user'),
    # Authentication
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('get-csrf-token/', CSRFTokenView.as_view(), name='get-csrf-token'),
    path('api-token-auth/', views.obtain_auth_token),
    # cart
    path('cart/', AddToCart.as_view(), name='cart'),
    path('cart/<int:id>/', AddToCart.as_view(), name='cartid'),
    # address
    path('address/', DeliveryAddresss.as_view(), name='address'),
    path('address/<int:id>/', DeliveryAddresss.as_view(), name='address'),
    # order
    path('order/', OrderView.as_view(), name='order'),
    path('order/<int:id>/', OrderView.as_view(), name='order'),
    path('dtorder/<int:id>/', getDetailedOrder, name='dtorder'),

]
