from django.contrib import admin
from .models import ItemCategory, ProductCategory


class ItemCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'parent')
    search_fields = ('name',)


class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'parent')
    search_fields = ('name',)


admin.site.register(ItemCategory, ItemCategoryAdmin)
admin.site.register(ProductCategory, ProductCategoryAdmin)
