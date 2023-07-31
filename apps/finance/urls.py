from django.urls import path
from .views import *

urlpatterns = [
    path('sales', SaleListView.as_view(), name='sale-list'),
    path('sale/<order_uuid>', SaleDetailView.as_view(), name='sale-detail'),
    path('quotations', QuotationListView.as_view(), name='quotation-list'),
    path('quotation/<order_uuid>', QuotationDetailView.as_view(), name='quotation-detail'),
    path('item-purchases', ItemPurchaseListView.as_view(), name='item-purchase-list'),
    path('item-purchase/<order_uuid>', ItemPurchaseDetailView.as_view(), name='item-purchase-detail'),
    path('product-purchases', ProductPurchaseListView.as_view(), name='product-purchase-list'),
    path('product-purchase/<order_uuid>', ProductPurchaseDetailView.as_view(), name='product-purchase-detail'),
    path('credits', CreditListView.as_view(), name='credit-list'),
    path('credit/<credit_uuid>', CreditDetailView.as_view(), name='credit-detail'),
]
