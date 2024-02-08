# Generated by Django 4.1.13 on 2024-02-08 05:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0003_cart'),
    ]

    operations = [
        migrations.CreateModel(
            name='DeliveryAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mob1', models.BigIntegerField()),
                ('mob2', models.BigIntegerField(blank=True)),
                ('postalcode', models.IntegerField()),
                ('address', models.CharField(max_length=150)),
                ('area', models.CharField(max_length=150)),
                ('landmark', models.CharField(max_length=50)),
                ('city', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=50)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'DeliveryAddress',
            },
        ),
    ]
