# from rest_framework.pagination import PageNumberPagination
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions

from .models import *
from .serializers import *


class ListItemCategoriesView(APIView):
    
    def get(self, request, format=None):
        if ItemCategory.objects.all().exists():
            categories = ItemCategory.objects.all()
            
            result = []
            
            for category in categories:
                if not category.parent:
                    item = {}
                    item['id'] = category.id
                    item['name'] = category.name
                    item['thumbnail'] = category.thumbnail.url
                    
                    item['sub_categories'] = []
                    
                    for cat in categories:
                        sub_item = {}
                        if cat.parent and cat.parent.id == category.id:
                            sub_item['id'] = cat.id
                            sub_item['name'] = cat.name
                            sub_item['thumbnail'] = cat.thumbnail.url
                            
                            item['sub_categories'].append(sub_item)
                            
                    result.append(item)
                    
            return Response({'item_categories': result}, status=status.HTTP_200_OK)
        
        return Response({'error': 'No item categories found'}, status=status.HTTP_404_NOT_FOUND)
        
    def post(self, request, format=None):
        serializer = ItemCategorySerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ItemCategoryDetailView(APIView):

    def get(self, request, category_id, format=None):
        item_category = get_object_or_404(ItemCategory, id=category_id)
        serializer = ItemCategorySerializer(item_category)
        
        return Response({'item category': serializer.data}, status=status.HTTP_200_OK)
    
    def patch(self, request, item_slug, format=None):
        item_category = get_object_or_404(ItemCategory, slug=item_slug)
        serializer = ItemCategorySerializer(item_category, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response({'item category updated': serializer.data}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ListProductCategoriesView(APIView):
    
    def get(self, request, format=None):
        if ProductCategory.objects.all().exists():
            categories = ProductCategory.objects.all()
            
            result = []
            
            for category in categories:
                if not category.parent:
                    item = {}
                    item['id'] = category.id
                    item['name'] = category.name
                    item['thumbnail'] = category.thumbnail.url
                    
                    item['sub_categories'] = []
                    
                    for cat in categories:
                        sub_item = {}
                        if cat.parent and cat.parent.id == category.id:
                            sub_item['id'] = cat.id
                            sub_item['name'] = cat.name
                            sub_item['thumbnail'] = cat.thumbnail.url
                            
                            item['sub_categories'].append(sub_item)
                            
                    result.append(item)
                    
            return Response({'product_categories': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No product categories found'}, status=status.HTTP_404_NOT_FOUND)
        
    def post(self, request, format=None):
        serializer = ProductCategorySerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class ProductCategoryDetailView(APIView):

    def get(self, request, category_id, format=None):
        product_category = get_object_or_404(ProductCategory, id=category_id)
        serializer = ProductCategorySerializer(product_category)
        
        return Response({'product category': serializer.data}, status=status.HTTP_200_OK)
    
    def patch(self, request, category_id, format=None):
        product_category = get_object_or_404(ProductCategory, id=category_id)
        serializer = ProductCategorySerializer(product_category, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response({'product category updated': serializer.data}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    