# Generated by Django 4.1.13 on 2024-03-13 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_contactus'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactus',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='contactus'),
        ),
    ]
