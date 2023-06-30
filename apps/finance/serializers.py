from rest_framework import serializers
from .models import *

from apps.inventory.serializers import ProductSerializer, ItemSerializer
from .serializers import *
from apps.users.serializers import CustomUserSerializer


class SaleSerializer(serializers.ModelSerializer):
    
    cashier = CustomUserSerializer()
    products = ProductSerializer(many=True)

    class Meta:
        model = Sale
        fields = '__all__'

    def create(self, validated_data):
        products_data = validated_data.pop('products')
        sale = Sale.objects.create(**validated_data)
        for product_data in products_data:
            SaleList.objects.create(sale=sale, **product_data)
        return sale


class QuotationSerializer(serializers.ModelSerializer):
    
    quoting_person = CustomUserSerializer()
    products = ProductSerializer(many=True)

    class Meta:
        model = Quotation
        fields = '__all__'

    def create(self, validated_data):
        products_data = validated_data.pop('products')
        quotation = Quotation.objects.create(**validated_data)
        for product_data in products_data:
            QuotationList.objects.create(quotation=quotation, **product_data)
        return quotation


class ItemPurchaseSerializer(serializers.ModelSerializer):
    
    buyer = CustomUserSerializer()
    items = ItemSerializer(many=True)

    class Meta:
        model = ItemPurchase
        fields = '__all__'

    def create(self, validated_data):
        products_data = validated_data.pop('products')
        purchase = ItemPurchase.objects.create(**validated_data)
        for product_data in products_data:
            ItemPurchaseList.objects.create(purchase=purchase, **product_data)
        return purchase
    

class ProductPurchaseSerializer(serializers.ModelSerializer):
    
    buyer = CustomUserSerializer()
    products = ProductSerializer(many=True)

    class Meta:
        model = ProductPurchase
        fields = '__all__'

    def create(self, validated_data):
        products_data = validated_data.pop('products')
        purchase = ProductPurchase.objects.create(**validated_data)
        for product_data in products_data:
            ProductPurchaseList.objects.create(purchase=purchase, **product_data)
        return purchase


class CreditSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Credit
        fields = '__all__'


class SaleListSerializer(serializers.ModelSerializer):
    
    sale = SaleSerializer()
    product = ProductSerializer()
    
    class Meta:
        model = SaleList
        fields = '__all__'


class ItemPurchaseListSerializer(serializers.ModelSerializer):
    
    item_purchase = ItemPurchaseSerializer
    item = ItemSerializer()
    
    class Meta:
        model = ItemPurchaseList
        fields = '__all__'
        

class ProductPurchaseListSerializer(serializers.ModelSerializer):
    
    product_purchase = ProductPurchaseSerializer()
    product = ProductSerializer()
    
    class Meta:
        model = ProductPurchaseList
        fields = '__all__'


class QuotationListSerializer(serializers.ModelSerializer):
    
    quotation = QuotationSerializer()
    product = ProductSerializer()
    
    class Meta:
        model = QuotationList
        fields = '__all__'
        