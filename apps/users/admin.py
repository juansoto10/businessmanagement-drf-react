from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Client, Supplier

class CustomUserAdmin(UserAdmin):
    
    fieldsets = [
        (None, {'fields': ['username', 'password']}),
        ('Personal Info', {'fields': ['first_name', 'last_name', 'email', 'phone_number', 'national_id', 'wage', 'schedule', 'birth_date', 'about']}),
        ('Permissions', {'fields': ['is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions']}),
        ('Important dates', {'fields': ['last_login', 'date_joined']}),
    ]
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('username', 'email', 'first_name', 'last_name')


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Client)
admin.site.register(Supplier)


# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin
# from .models import CustomUser

# admin.site.register(CustomUser, UserAdmin)
