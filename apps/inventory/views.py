from django.shortcuts import get_object_or_404
from django.db.models.query_utils import Q

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions


from .serializers import *
from .models import Item, Product, ItemProduct
from apps.category.models import ItemCategory, ProductCategory
from .pagination import SmallSetPagination, MediumSetPagination


class ItemListView(APIView):

    def get(self, request, format=None):
        if Item.objects.all().exists():
            items = Item.objects.order_by('name')
            # items = Item.objects.all()
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(items, request)
            
            serializer = ItemSerializer(results, many=True)
            
            return paginator.get_paginated_response({'items': serializer.data})
            # return Response({'items': serializer.data}, status=status.HTTP_200_OK)
        
        return Response({'message': 'No items registered yet'}, status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request, format=None):
        serializer = ItemSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ItemDetailView(APIView):

    def get(self, request, item_slug, format=None):
        item = get_object_or_404(Item, slug=item_slug)
        serializer = ItemSerializer(item)
        
        return Response({'item': serializer.data}, status=status.HTTP_200_OK)
    
    def patch(self, request, item_slug, format=None):
        item = get_object_or_404(Item, slug=item_slug)
        serializer = ItemSerializer(item, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response({'item updated': serializer.data}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ItemListCategoryView(APIView):
    
    def get(self, request, category_id, format=None):
        if Item.objects.all().exists():
            item_category = ItemCategory.objects.get(id=category_id)
            items = Item.objects.order_by('name').filter(category=item_category)
            
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(items, request)
            
            serializer = ItemSerializer(results, many=True)
            
            return paginator.get_paginated_response({'items': serializer.data})
        
        return Response({'error': 'No items found'}, status=status.HTTP_404_NOT_FOUND)
        
        
class ProductListCategoryView(APIView):
    
    def get(self, request, category_id, format=None):
        if Product.objects.all().exists():
            product_category = ProductCategory.objects.get(id=category_id)
            products = Product.objects.order_by('name').filter(category=product_category)
            
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(products, request)
            
            serializer = ProductSerializer(results, many=True)
            
            return paginator.get_paginated_response({'products': serializer.data})
        
        return Response({'error': 'No products found'}, status=status.HTTP_404_NOT_FOUND)


class ProductListView(APIView):
    
    def get(self, request, format=None):
        if Product.objects.all().exists():
            products = Product.objects.order_by('name')
            
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(products, request)
            
            serializer = ProductSerializer(results, many=True)
            
            return paginator.get_paginated_response({'products': serializer.data})
        
        return Response({'message': 'No products registered yet'}, status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request, format=None):
        serializer = ProductSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ProductDetailView(APIView):

    def get(self, request, product_slug, format=None):
        product = get_object_or_404(Product, slug=product_slug)
        serializer = ProductSerializer(product)
        
        return Response({'product': serializer.data}, status=status.HTTP_200_OK)
    
    def patch(self, request, item_slug, format=None):
        product = get_object_or_404(Product, slug=item_slug)
        serializer = ProductSerializer(product, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response({'product updated': serializer.data}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ItemProductListView(APIView):

    def get(self, request, format=None):
        if ItemProduct.objects.all().exists():
            item_products = ItemProduct.objects.all()
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(item_products, request)
            
            serializer = ItemProductSerializer(results, many=True)
            
            return Response({'item product list': serializer.data}, status=status.HTTP_200_OK)
        
        return Response({'message': 'No products registered yet'}, status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request, format=None):
        serializer = ItemProductSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ItemProductDetailView(APIView):

    def get(self, request, item_product_uuid, format=None):
        item_product = get_object_or_404(ItemProduct, item_product_uuid=item_product_uuid)
        serializer = ItemProductSerializer(item_product)
        
        return Response({'item_product': serializer.data}, status=status.HTTP_200_OK)
    
    def patch(self, request, item_slug, format=None):
        item_product = get_object_or_404(ItemProduct, slug=item_slug)
        serializer = ItemSerializer(item_product, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response({'Item Product updated': serializer.data}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SearchItemView(APIView):
    def get(self, request, search_term):
        matches = Item.objects.filter(
            Q(item_name__icontains=search_term) |
            Q(category__name__icontains=search_term)
        )
        
        paginator = MediumSetPagination
        results = paginator.paginate_queryset(matches, request)
        
        serializer = ItemSerializer(results, many=True)
        
        return Response({'filtered items': serializer.data}, status=status.HTTP_200_OK)
    

class SearchProductView(APIView):
    def get(self, request, search_term):
        matches = Item.objects.filter(
            Q(product_name__icontains=search_term) |
            Q(category__name__icontains=search_term)
        )
        
        paginator = MediumSetPagination
        results = paginator.paginate_queryset(matches, request)
        
        serializer = ProductSerializer(results, many=True)
        
        return Response({'filtered products': serializer.data}, status=status.HTTP_200_OK) 
     