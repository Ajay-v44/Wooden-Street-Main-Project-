# Generated by Django 4.1.13 on 2024-02-17 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_transaction'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='mode',
            field=models.CharField(default='cod', max_length=150),
        ),
    ]