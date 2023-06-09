# Generated by Django 4.2.1 on 2023-06-30 23:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('inventory', '0001_initial'),
        ('finance', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='sale',
            name='cashier',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='sale',
            name='products',
            field=models.ManyToManyField(blank=True, through='finance.SaleList', to='inventory.product'),
        ),
        migrations.AddField(
            model_name='quotationlist',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inventory.product'),
        ),
        migrations.AddField(
            model_name='quotationlist',
            name='quotation',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='finance.quotation'),
        ),
        migrations.AddField(
            model_name='quotation',
            name='products',
            field=models.ManyToManyField(blank=True, through='finance.QuotationList', to='inventory.product'),
        ),
        migrations.AddField(
            model_name='quotation',
            name='quoting_person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='productpurchaselist',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inventory.product'),
        ),
        migrations.AddField(
            model_name='productpurchaselist',
            name='product_purchase',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='finance.productpurchase'),
        ),
        migrations.AddField(
            model_name='productpurchase',
            name='buyer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='productpurchase',
            name='products',
            field=models.ManyToManyField(blank=True, through='finance.ProductPurchaseList', to='inventory.product'),
        ),
        migrations.AddField(
            model_name='itempurchaselist',
            name='item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inventory.item'),
        ),
        migrations.AddField(
            model_name='itempurchaselist',
            name='item_purchase',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='finance.itempurchase'),
        ),
        migrations.AddField(
            model_name='itempurchase',
            name='buyer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='itempurchase',
            name='items',
            field=models.ManyToManyField(blank=True, through='finance.ItemPurchaseList', to='inventory.item'),
        ),
    ]
