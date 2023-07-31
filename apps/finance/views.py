from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import *
from .serializers import *
from .pagination import SmallSetPagination


class SaleListView(APIView):
    
    def get(self, request, format=None):
        if Sale.objects.all().exists():
            sales = Sale.objects.all()
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(sales, request)
            
            serializer = SaleSerializer(results, many=True)
            
            return Response({'sales': serializer.data}, status=status.HTTP_200_OK)
        
        return Response({'message': 'No sales registered yet'}, status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request, format=None):
        serializer = SaleSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SaleDetailView(APIView):
    
    def get(self, request, order_uuid, format=None):
        sale = get_object_or_404(Sale, order_uuid=order_uuid)
        serializer = SaleSerializer(sale)
        
        return Response({'sale': serializer.data}, status=status.HTTP_200_OK)
    
    def patch(self, request, order_uuid, format=None):
        sale = get_object_or_404(Sale, order_uuid=order_uuid)
        serializer = SaleSerializer(sale, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response({'sale updated': serializer.data}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
       


class QuotationListView(APIView):
    
    def get(self, request, format=None):
        if Quotation.objects.all().exists():
            quotations = Quotation.objects.all()
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(quotations, request)
            
            serializer = QuotationSerializer(results, many=True)
            
            return Response({'quotations': serializer.data}, status=status.HTTP_200_OK)
        
        return Response({'message': 'No quotations registered yet'}, status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request, format=None):
        serializer = QuotationSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class QuotationDetailView(APIView):
    
    def get(self, request, order_uuid, format=None):
        quotation = get_object_or_404(Quotation, order_uuid=order_uuid)
        serializer = QuotationSerializer(quotation)
        
        return Response({'quotation': serializer.data}, status=status.HTTP_200_OK)
    
    def patch(self, request, order_uuid, format=None):
        quotation = get_object_or_404(Quotation, order_uuid=order_uuid)
        serializer = QuotationSerializer(quotation, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response({'quotation updated': serializer.data}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ItemPurchaseListView(APIView):
    
    def get(self, request, format=None):
        if ItemPurchase.objects.all().exists():
            item_purchases = ItemPurchase.objects.all()
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(item_purchases, request)
            
            serializer = ItemPurchaseSerializer(results, many=True)
            
            return Response({'item purchases': serializer.data}, status=status.HTTP_200_OK)
        
        return Response({'message': 'No item purchases registered yet'}, status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request, format=None):
        serializer = ItemPurchaseListSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ItemPurchaseDetailView(APIView):
    
    def get(self, request, order_uuid, format=None):
        item_purchase = get_object_or_404(ItemPurchase, order_uuid=order_uuid)
        serializer = ItemPurchaseSerializer(item_purchase)
        
        return Response({'item purchase': serializer.data}, status=status.HTTP_200_OK)
    
    def patch(self, request, order_uuid, format=None):
        item_purchase = get_object_or_404(ItemPurchase, order_uuid=order_uuid)
        serializer = QuotationSerializer(item_purchase, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response({'Item Purchase updated': serializer.data}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductPurchaseListView(APIView):
    
    def get(self, request, format=None):
        if ProductPurchase.objects.all().exists():
            product_purchases = ProductPurchase.objects.all()
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(product_purchases, request)
            
            serializer = ProductPurchaseSerializer(results, many=True)
            
            return Response({'productpurchases': serializer.data}, status=status.HTTP_200_OK)
        
        return Response({'message': 'No product purchases registered yet'}, status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request, format=None):
        serializer = ProductPurchaseListSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductPurchaseDetailView(APIView):
    
    def get(self, request, order_uuid, format=None):
        product_purchase = get_object_or_404(ProductPurchase, order_uuid=order_uuid)
        serializer = ProductPurchaseSerializer(product_purchase)
        
        return Response({'product_purchase': serializer.data}, status=status.HTTP_200_OK)
    
    def patch(self, request, order_uuid, format=None):
        product_purchase = get_object_or_404(ProductPurchase, order_uuid=order_uuid)
        serializer = ProductPurchaseSerializer(product_purchase, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response({'Product Purchase updated': serializer.data}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreditListView(APIView):
    
    def get(self, request, format=None):
        if Credit.objects.all().exists():
            credit_set = Credit.objects.all()
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(credit_set, request)
            
            serializer = CreditSerializer(results, many=True)
            
            return Response({'credit_set': serializer.data}, status=status.HTTP_200_OK)
        
        return Response({'message': 'No credit registered yet'}, status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request, format=None):
        serializer = CreditSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreditDetailView(APIView):
    
    def get(self, request, credit_uuid, format=None):
        credit = get_object_or_404(Credit, credit_uuid=credit_uuid)
        serializer = CreditSerializer(credit)
        
        return Response({'credit': serializer.data}, status=status.HTTP_200_OK)
    
    def patch(self, request, credit_uuid, format=None):
        credit = get_object_or_404(Credit, credit_uuid=credit_uuid)
        serializer = ProductPurchaseSerializer(credit, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response({'credit updated': serializer.data}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
