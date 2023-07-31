from django.urls import path
from .views import *

urlpatterns = [
    path('items', ItemListView.as_view(), name='item-list'),
    path('items/<item_slug>', ItemDetailView.as_view(), name='item-detail'),
    
    path('products', ProductListView.as_view(), name='product-list'),
    path('products/<product_slug>', ProductDetailView.as_view(), name='product-detail'),
    
    path('product-items', ItemProductListView.as_view(), name='item-product-list'),
    path('product-items/<item_product_uuid>', ItemProductDetailView.as_view(), name='item-product-detail'),
    
    path('items/category/<int:category_id>', ItemListCategoryView.as_view(), name='item-category-list'),
    path('products/category/<int:category_id>', ProductListCategoryView.as_view(), name='product-category-list'),
    
    path('items/search/<search_term>', SearchItemView.as_view(), name='search-item'),
    path('products/search/<search_term>', SearchProductView.as_view(), name='search-product'),
]
