# Generated by Django 4.1.13 on 2024-03-13 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_contactus_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactus',
            name='mob',
            field=models.BigIntegerField(),
        ),
    ]
