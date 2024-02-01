from django.db import models
from django.contrib.auth.models import User
from django.contrib import admin
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
    rating = models.IntegerField()
    color = models.CharField(max_length=50)

    def dicountedPrice(self):
        return int(self.price((self.price*self.offer)/100))

    class Meta:
        db_table = 'Products'


@admin.register(Products)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('pname', 'pdesc', 'price', 'offer',
                    'stock_count', 'brand', 'warranty')
    search_fields = ['pname', 'price', 'brand', 'warranty']
    list_filter = ['price', 'brand']
