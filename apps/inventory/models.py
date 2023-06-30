import datetime
import uuid

from django.db import models
from django.utils import timezone
from django.contrib import admin

from apps.category.models import ItemCategory, ProductCategory


def item_directory_path(instance, filename):
    return 'item/{0}/{1}'.format(instance.slug, filename)


def product_directory_path(instance, filename):
    return 'product/{0}/{1}'.format(instance.slug, filename)


class Item(models.Model):
        
    item_uuid = models.UUIDField(default=uuid.uuid4, primary_key=True)
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    thumbnail = models.ImageField(upload_to=item_directory_path)
    category = models.ForeignKey(ItemCategory, on_delete=models.PROTECT)
    units = models.PositiveIntegerField()
    current_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    exp_date = models.DateTimeField(blank=True, null=True)
    purchase_date = models.DateTimeField(default=timezone.now)
    is_new = models.BooleanField(default=True)
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
    
    def get_thumbnail(self):
        if self.thumbnail:
            return self.thumbnail.url
        return ''
    
    
class Product(models.Model):
    
    product_uuid = models.UUIDField(default=uuid.uuid4, primary_key=True)
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    thumbnail = models.ImageField(upload_to=product_directory_path)
    category = models.ForeignKey(ProductCategory, on_delete=models.PROTECT)
    units = models.PositiveIntegerField()
    current_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    sub_items = models.ManyToManyField(Item, through='ItemProduct', blank=True)
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
    
    def get_thumbnail(self):
        if self.thumbnail:
            return self.thumbnail.url
        return ''
    

class ItemProduct(models.Model):
    
    item_product_uuid = models.UUIDField(default=uuid.uuid4, primary_key=True)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    