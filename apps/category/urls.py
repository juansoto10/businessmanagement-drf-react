from django.urls import path
from .views import *


urlpatterns = [
    path('items/', ListItemCategoriesView.as_view(), name='list-item-categories'),
    path('items/<int:category_id>/', ItemCategoryDetailView.as_view(), name='item-category-detail'),
    
    path('products/', ListProductCategoriesView.as_view(), name='list-product-categories'),
    path('products/<int:category_id>/', ProductCategoryDetailView.as_view(), name='product-category-detail'),
]
