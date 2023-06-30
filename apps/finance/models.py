import datetime
import uuid

from django.conf import settings
from django.db import models
from django.utils import timezone
from django.contrib import admin

from apps.inventory.models import Product, Item


class OrderBase(models.Model):
    
    class Meta:
        abstract = True  
        
    order_uuid = models.UUIDField(default=uuid.uuid4, primary_key=True)
    date = models.DateTimeField(default=timezone.now)
    total_value = models.DecimalField(max_digits=10, decimal_places=2)
    additional_info = models.TextField(blank=True, null=True)
    
    @admin.display(
        boolean=True,
        ordering='date',
        description='Added recently?',
    )
    def was_added_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.date <= now
    

class Sale(OrderBase):
    
    cashier = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    customer = models.CharField(max_length=50, blank=True, null=True)
    products = models.ManyToManyField(Product, through='SaleList', blank=True)
    
    def __str__(self):
        return f's-{self.order_uuid}'
    

class Quotation(OrderBase):
    
    quoting_person = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    requester = models.CharField(max_length=50, blank=True, null=True)
    products = models.ManyToManyField(Product, through='QuotationList', blank=True)
    
    def __str__(self):
        return f'q-{self.order_uuid}'


class PurchaseBase(OrderBase):
    
    class Meta:
        abstract = True 
    
    buyer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    seller = models.CharField(max_length=50, blank=True, null=True)
    
    def __str__(self):
        return f'p-{self.order_uuid}'
    
    
class ItemPurchase(PurchaseBase):
    
    items = models.ManyToManyField(Item, through='ItemPurchaseList', blank=True)
    
    
class ProductPurchase(PurchaseBase):
    
    products = models.ManyToManyField(Product, through='ProductPurchaseList', blank=True)


class SaleList(models.Model):
    
    sale_list_uuid = models.UUIDField(default=uuid.uuid4, primary_key=True)
    sale = models.ForeignKey(Sale, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    

class QuotationList(models.Model):
    
    quotation_list_uuid = models.UUIDField(default=uuid.uuid4, primary_key=True)
    quotation = models.ForeignKey(Quotation, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    

class ItemPurchaseList(models.Model):
    
    item_purchase_list_uuid = models.UUIDField(default=uuid.uuid4, primary_key=True)
    item_purchase = models.ForeignKey(ItemPurchase, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    
    
class ProductPurchaseList(models.Model):
    
    product_purchase_list_uuid = models.UUIDField(default=uuid.uuid4, primary_key=True)
    product_purchase = models.ForeignKey(ProductPurchase, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()


class Credit(models.Model):
    
    PAYMENT_FREQUENCY_CHOICES = [
        ("W", "Weekly"),
        ("B", "biweekly "),
        ("M", "Monthly"),
        ("S", "Semesterly"),
        ("Y", "Yearly"),
    ]
    
    credit_uuid = models.UUIDField(default=uuid.uuid4, primary_key=True)
    number = models.CharField(max_length=100, unique=True)
    lender = models.CharField(max_length=100)
    total_value = models.DecimalField(max_digits=10, decimal_places=2)
    interest_rate = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    payment = models.DecimalField(max_digits=10, decimal_places=2)
    payment_frequency = models.CharField(max_length=50, choices=PAYMENT_FREQUENCY_CHOICES)
    payment_end_date = models.DateField(blank=True, null=True)
    added = models.DateTimeField(default=timezone.now)
    # due_date = models.DateField(blank=True, null=True)
    
    def __str__(self):
        return f'c-{self.credit_uuid}'
    
    @admin.display(
        boolean=True,
        ordering='date',
        description='Added recently?',
    )
    def was_added_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.added <= now
