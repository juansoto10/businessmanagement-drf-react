from django.contrib import admin
from .models import Sale, Quotation, ItemPurchase, ProductPurchase, Credit

class SaleAdmin(admin.ModelAdmin):
    
    list_display = ('order_uuid', 'date', 'cashier', 'customer', 'total_value', 'additional_info', 'was_added_recently')
    list_filter = ('cashier', 'customer')
    search_fields = ('order_uuid', 'customer', 'cashier')
    date_hierarchy = 'date'


class QuotationAdmin(admin.ModelAdmin):
    
    list_display = ('order_uuid', 'date', 'quoting_person', 'requester', 'total_value', 'additional_info', 'was_added_recently')
    list_filter = ('quoting_person', 'requester')
    search_fields = ('order_uuid', 'quoting_person', 'requester')
    date_hierarchy = 'date'


class ItemPurchaseAdmin(admin.ModelAdmin):
    
    list_display = ('order_uuid', 'date', 'buyer', 'seller', 'total_value', 'additional_info', 'was_added_recently')
    list_filter = ('buyer', 'seller')
    search_fields = ('order_uuid', 'buyer', 'seller')
    date_hierarchy = 'date'


class ProductPurchaseAdmin(admin.ModelAdmin):
    
    list_display = ('order_uuid', 'date', 'buyer', 'seller', 'total_value', 'additional_info', 'was_added_recently')
    list_filter = ('buyer',)
    search_fields = ('order_uuid', 'seller')
    date_hierarchy = 'date'


class CreditAdmin(admin.ModelAdmin):
    
    list_display = ('credit_uuid', 'number', 'lender', 'total_value', 'interest_rate', 'payment', 'payment_frequency', 'payment_end_date', 'was_added_recently')
    search_fields = ('credit_uuid', 'number', 'lender')
    date_hierarchy = 'added'


admin.site.register(Sale, SaleAdmin)
admin.site.register(Quotation, QuotationAdmin)
admin.site.register(ItemPurchase, ItemPurchaseAdmin)
admin.site.register(ProductPurchase, ProductPurchaseAdmin)
admin.site.register(Credit, CreditAdmin)
