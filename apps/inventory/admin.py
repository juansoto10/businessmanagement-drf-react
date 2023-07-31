from django.contrib import admin
from .models import Item, Product, ItemProduct

class ItemAdmin(admin.ModelAdmin):
    
    list_display = ('name', 'category', 'units', 'current_price', 'exp_date', 'purchase_date', 'is_new', 'added', 'was_added_recently')
    list_filter = ('category', 'is_new')
    search_fields = ('name', 'category__name')
    date_hierarchy = 'added'


class ProductAdmin(admin.ModelAdmin):
    
    list_display = ('name', 'category', 'units', 'current_price', 'was_added_recently')
    list_filter = ('category',)
    search_fields = ('name', 'category__name')
    date_hierarchy = 'added'


admin.site.register(Item, ItemAdmin)
admin.site.register(Product, ProductAdmin)


# class ItemProductAdmin(admin.ModelAdmin):
#     list_display = ('item', 'product', 'quantity')
#     list_filter = ('item', 'product')


# admin.site.register(ItemProduct, ItemProductAdmin)
