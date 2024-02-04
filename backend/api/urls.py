from django.urls import path
from .views import *
urlpatterns = [
    path('products/', products, name='products'),
    path('products/<str:type>/', products, name='products_type'),
    path('dtproducts/<int:id>/', getdtproduct),
    path('register/', createUser, name='create_user'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView, name='logout'),
     path('get-csrf-token/', CSRFTokenView.as_view(), name='get-csrf-token'),
]
