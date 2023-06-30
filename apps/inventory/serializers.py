from rest_framework import serializers
from .models import Item, Product, ItemProduct

from apps.category.serializers import ItemCategorySerializer, ProductCategorySerializer


class ItemSerializer(serializers.ModelSerializer):
    
    thumbnail = serializers.CharField(source='get_thumbnail')
    category = ItemCategorySerializer()
    
    class Meta:
        model = Item
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    
    thumbnail = serializers.CharField(source='get_thumbnail')
    category = ProductCategorySerializer()
    sub_items = ItemSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = '__all__'


class ItemProductSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ItemProduct
        fields = '__all__'
