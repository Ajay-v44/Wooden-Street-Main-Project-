from django.db import models
from django.contrib.auth.models import User
from django.contrib import admin
from django.core.validators import MaxValueValidator
from django import forms
# Create your models here.


class Products(models.Model):
    pname = models.CharField(max_length=150)
    pdesc = models.CharField(max_length=200)
    price = models.IntegerField()
    offer = models.FloatField()
    stock_count = models.IntegerField()
    createdat = models.DateField(auto_now=True)
    img1 = models.ImageField(upload_to='products')
    img2 = models.ImageField(upload_to='products')
    img3 = models.ImageField(upload_to='products')
    img4 = models.ImageField(upload_to='products')
    img5 = models.ImageField(upload_to='products', null=True, blank=True)
    material = models.CharField(max_length=50)
    warranty = models.CharField(max_length=50)
    brand = models.CharField(max_length=50)
    rating = models.IntegerField(validators=[MaxValueValidator(5)])
    color = models.CharField(max_length=50)

    def __str__(self):
        return self.pname

    def discountedPrice(self):
        print(int(self.price - (self.price * self.offer) / 100))
        return int(self.price - (self.price * self.offer) / 100)

    class Meta:
        db_table = 'Products'


@admin.register(Products)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('pname', 'pdesc', 'price', 'offer',
                    'stock_count', 'brand', 'warranty')
    search_fields = ['pname', 'price', 'brand', 'warranty']
    list_filter = ['price', 'brand']


class Cart(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product_name = models.CharField(max_length=150)
    price = models.IntegerField()
    qty = models.IntegerField(default=1)

    def __str__(self):
        return self.product_name

    class Meta:
        db_table = 'Cart'


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ('product_id', 'user_id', 'product_name', 'price', 'qty')
    search_fields = ['product', 'user', 'product_name', 'price', 'qty']
    list_filter = ['user', 'product_name', 'price', 'qty']


class DeliveryAddress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mob1 = models.BigIntegerField()
    mob2 = models.BigIntegerField(blank=True)
    postalcode = models.IntegerField()
    address = models.CharField(max_length=150)
    area = models.CharField(max_length=150)
    landmark = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)

    def __str__(self):
        return self.address

    class Meta:
        db_table = 'DeliveryAddress'


@admin.register(DeliveryAddress)
class DeliveryAddressAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'mob1', 'postalcode', 'address',
                    'area', 'landmark', 'city', 'state')
    search_fields = ['postalcode', 'area', 'landmark', 'city', 'state']
    list_filter = ['postalcode', 'area', 'landmark', 'city', 'state']


class Order(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    order_id=models.CharField(max_length=150)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.ForeignKey(DeliveryAddress, on_delete=models.CASCADE)
    total = models.IntegerField()
    date = models.DateField(auto_now=True)
    status = models.CharField(max_length=50, default='confirmed')

    def __str__(self):
        return self.status


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'product_id',  'address_id',
                    'total', 'date', 'status','order_id')
    search_fields = ['date', 'status','order_id']
    list_filter = ['date', 'status','order_id']
    list_editable = ['status']
    formfield_overrides = {
        models.CharField: {'widget': forms.Select(choices=[('dispatched', 'dispatched'), ('delivered', 'delivered'), ('cancel', 'cancled')])},
    }


class CancelItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    reason = models.CharField(max_length=150)


@admin.register(CancelItem)
class CancelItemAdmin(admin.ModelAdmin):
    list_display = ('order_id', 'reason')
    search_fields = ['order_id']
    list_filter = ['order_id']
