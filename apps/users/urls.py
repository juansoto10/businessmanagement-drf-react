from django.urls import path
from .views import *

urlpatterns = [
    path('signup', RegistrationView.as_view(), name='registration'),
    path('login', LoginView.as_view(), name='login'),
    path('logout', LogoutView.as_view(), name='logout'),
    path('userlist', CustomUserListView.as_view(), name='user-list'),
    path('user/<username>', CustomUserDetailView.as_view(), name='user-detail'),
    path('clients', ClientListView.as_view(), name='client-list'),
    path('client/<person_uuid>', ClientDetailView.as_view(), name='client-detail'),
    path('suppliers', SupplierListView.as_view(), name='supplier-list'),
    path('supplier/<person_uuid>', SupplierDetailView.as_view(), name='supplier-detail'),
]
