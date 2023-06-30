import datetime
import uuid

from django.db import models
from django.utils import timezone
from django.contrib import admin
from django.contrib.auth.models import AbstractUser

from apps.finance.models import Sale, ItemPurchase, ProductPurchase


class CustomUser(AbstractUser):
    
    SCHEDULE_CHOICES = [
        ("M", "Morning"),
        ("A", "Afternoon"),
        ("N", "Night"),
    ]
    
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    national_id = models.CharField(max_length=20, blank=True, null=True)
    wage = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    schedule = models.CharField(max_length=50, choices=SCHEDULE_CHOICES, blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    about = models.TextField()
    

class ExternalPersonBase(models.Model):
    
    class Meta:
        abstract = True  
        
    TYPE_OF_PAYMENT_CHOICES = [
        ("CA", "Cash"),
        ("BT", "Bank Transfer"),
        ("CC", "Credit Card"),
        ("DC", "Debit Card"),
        ("PP", "PayPal"),
        ("CR", "Cryptocurrency"),
    ]
    
    person_uuid = models.UUIDField(default=uuid.uuid4, primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    address = models.CharField(max_length=200, blank=True, null=True)
    company = models.CharField(max_length=100, blank=True, null=True)
    type_of_payment = models.CharField(max_length=50, choices=TYPE_OF_PAYMENT_CHOICES)
    evaluation = models.TextField()
    added = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.name
    
    @admin.display(
        boolean=True,
        ordering='added',
        description='Added recently?',
    )
    def was_added_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.added <= now


class Client(ExternalPersonBase):
    
    history = models.ManyToManyField(Sale, through='ClientSale', blank=True)
    

class Supplier(ExternalPersonBase):
    
    items_history = models.ManyToManyField(ItemPurchase, through='SupplierItemPurchase', blank=True)
    products_history = models.ManyToManyField(ProductPurchase, through='SupplierProductPurchase', blank=True)
    
    
# Intermediate tables

class ClientSale(models.Model):
    
    client_sale_uuid = models.UUIDField(default=uuid.uuid4, primary_key=True)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    sale = models.ForeignKey(Sale, on_delete=models.CASCADE)
    
class SupplierItemPurchase(models.Model):
    
    supplier_item_purchase_uuid = models.UUIDField(default=uuid.uuid4, primary_key=True)
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    item_purchase = models.ForeignKey(ItemPurchase, on_delete=models.CASCADE)


class SupplierProductPurchase(models.Model):
    
    supplier_product_purchase_uuid = models.UUIDField(default=uuid.uuid4, primary_key=True)
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    product_purchase = models.ForeignKey(ProductPurchase, on_delete=models.CASCADE)
    
    
    
    