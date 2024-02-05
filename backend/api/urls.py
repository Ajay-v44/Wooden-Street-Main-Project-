from django.urls import path
from rest_framework.authtoken import views
from .views import *
urlpatterns = [
    path('products/', products, name='products'),
    path('products/<str:type>/', products, name='products_type'),
    path('dtproducts/<int:id>/', getdtproduct,name='dtproducts'),
    path('register/', createUser, name='create_user'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
     path('get-csrf-token/', CSRFTokenView.as_view(), name='get-csrf-token'),
    path('api-token-auth/', views.obtain_auth_token)
]
