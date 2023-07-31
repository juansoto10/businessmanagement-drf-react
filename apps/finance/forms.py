from django import forms
from .models import Sale, Quotation, ItemPurchase, ProductPurchase


class SaleForm(forms.ModelForm):
    
    class Meta:
        model = Sale
        fields = '__all__'
        widgets = {
            'products': forms.CheckboxSelectMultiple(),
        }
        

class QuotationForm(forms.ModelForm):
    
    class Meta:
        model = Quotation
        fields = '__all__'
        widgets = {
            'products': forms.CheckboxSelectMultiple(),
        }
        

class ItemPurchaseForm(forms.ModelForm):
    
    class Meta:
        model = ItemPurchase
        fields = '__all__'
        widgets = {
            'items': forms.CheckboxSelectMultiple(),
        }
    
        
class ProductPurchaseForm(forms.ModelForm):
    
    class Meta:
        model = ProductPurchase
        fields = '__all__'
        widgets = {
            'products': forms.CheckboxSelectMultiple(),
        }
        