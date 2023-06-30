from .models import *
from rest_framework import serializers

from apps.finance.serializers import *


class CustomUserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CustomUser
        fields = '__all__'


class ExternalPersonBaseSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ExternalPersonBase
        fields = '__all__'


class ClientSerializer(serializers.ModelSerializer):
    
    history = SaleSerializer(many=True, read_only=True)
    
    class Meta:
        model = Client
        fields = '__all__'


class SupplierSerializer(serializers.ModelSerializer):
    
    items_history = ItemPurchaseSerializer(many=True, read_only=True)
    products_history = ProductPurchaseSerializer(many=True, read_only=True)
    
    class Meta:
        model = Supplier
        fields = '__all__'


class ClientSaleSerializer(serializers.ModelSerializer):
    
    client = ClientSerializer()
    sale = SaleSerializer()
    
    class Meta:
        model = ClientSale
        fields = '__all__'


class SupplierItemPurchaseSerializer(serializers.ModelSerializer):
    
    supplier = SupplierSerializer()
    item_purchase = ItemPurchaseSerializer()
    
    class Meta:
        model = SupplierItemPurchase
        fields = '__all__'
        
        
class SupplierProductPurchaseSerializer(serializers.ModelSerializer):
    
    supplier = SupplierSerializer()
    product_purchase = ProductPurchaseSerializer()
    
    class Meta:
        model = SupplierProductPurchase
        fields = '__all__'
        