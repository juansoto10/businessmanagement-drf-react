from .models import *
from rest_framework import serializers


class ItemCategorySerializer(serializers.ModelSerializer):
    
    thumbnail = serializers.CharField(source='get_thumbnail')
    
    class Meta:
        model = ItemCategory
        fields = [
            'id',
            'name',
            'thumbnail',
        ]
        
        
class ProductCategorySerializer(serializers.ModelSerializer):
    
    thumbnail = serializers.CharField(source='get_thumbnail')
    
    class Meta:
        model = ProductCategory
        fields = [
            'id',
            'name',
            'thumbnail',
        ]
        