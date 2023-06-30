from django.db import models


class ItemCategory(models.Model):
    
    class Meta:
        verbose_name = 'ItemCategory'
        verbose_name_plural = 'ItemCategories'
        
    parent =    models.ForeignKey('self', 
                                related_name='children', 
                                on_delete=models.CASCADE, 
                                blank=True, 
                                null=True)

    name =      models.CharField(max_length=255,
                                unique=True)
    thumbnail = models.ImageField(upload_to='media/item_categories/')
    
    def __str__(self):
        return self.name
    
    def get_thumbnail(self):
        if self.thumbnail:
            return self.thumbnail.url
        return ''


class ProductCategory(models.Model):
    
    class Meta:
        verbose_name = 'ProductCategory'
        verbose_name_plural = 'ProductCategories'
        
    parent =    models.ForeignKey('self', 
                                related_name='children', 
                                on_delete=models.CASCADE, 
                                blank=True, 
                                null=True)
    name =      models.CharField(max_length=50,
                                unique=True)
    thumbnail = models.ImageField(upload_to='media/product_categories/')
    
    def __str__(self):
        return self.name
    
    def get_thumbnail(self):
        if self.thumbnail:
            return self.thumbnail.url
        return ''
    