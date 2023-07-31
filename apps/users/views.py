from django.shortcuts import get_object_or_404, render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login, logout
# from django.contrib.auth.models import User
from .serializers import CustomUserSerializer, ClientSerializer, SupplierSerializer
from .models import *


class RegistrationView(APIView):
    
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        
        if serializer.is_valid():
            user = serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    
    def post(self, request):
        
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        
        if user:
            login(request, user)
            return Response({'message': 'User logged in successfully'})
        
        return Response({'message': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(APIView):
    
    def post(self, request):
        logout(request)
        
        return Response({'message': 'User logged out successfully'})
    
    
class CustomUserListView(APIView):
    
    def get(self, request, format=None):
        if CustomUser.objects.all().exists():
            users = CustomUser.objects.all()
            serializer = CustomUserSerializer(users, many=True)
            
            return Response({'users': serializer.data}, status=status.HTTP_200_OK)
        
        return Response({'message': 'No users registered yet'}, status=status.HTTP_404_NOT_FOUND)
    
    
class CustomUserDetailView(APIView):
    
    def get(self, request, username, format=None):
        the_user = get_object_or_404(CustomUser, username=username)
        serializer = CustomUserSerializer(the_user)
            
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)
    
    
## External Person---

### Client
class ClientListView(APIView):
    
    def get(self, request, format=None):
        if Client.objects.all().exists():
            clients = Client.objects.all()
            serializer = ClientSerializer(clients, many=True)
            
            return Response({'clients': serializer.data}, status=status.HTTP_200_OK)
        
        return Response({'message': 'No clients registered yet'}, status=status.HTTP_404_NOT_FOUND)
    
    
class ClientDetailView(APIView):
    
    def get(self, request, person_uuid, format=None):
        client = get_object_or_404(Client, person_uuid=person_uuid)
        serializer = ClientSerializer(client)
            
        return Response({'client': serializer.data}, status=status.HTTP_200_OK)
        
    
    
### Supplier
class SupplierListView(APIView):
    
    def get(self, request, format=None):
        if Supplier.objects.all().exists():
            suppliers = Supplier.objects.all()
            serializer = SupplierSerializer(suppliers, many=True)
            
            return Response({'suppliers': serializer.data}, status=status.HTTP_200_OK)
        
        return Response({'message': 'No suppliers registered yet'}, status=status.HTTP_404_NOT_FOUND)
    
    
class SupplierDetailView(APIView):
    
    def get(self, request, person_uuid, format=None):
        supplier = get_object_or_404(Supplier, person_uuid=person_uuid)
        serializer = SupplierSerializer(supplier)
            
        return Response({'supplier': serializer.data}, status=status.HTTP_200_OK)
