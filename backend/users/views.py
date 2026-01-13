from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
class LoginView(APIView):
    def post(self, request):
        email=request.data.get("email")
        password=request.data.get("password")
        try:
            user = User.objects.get(email=email, password=password)
            return Response({
                "message": "Login successful",
                "user_id": user.id,
                "username": user.username
            })
        except User.DoesNotExist:
            return Response({"message": "Invalid credentials"}, status=401)
        
class UserListView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
class UserUpdateView(APIView):
    def put(self, request, pk):
        user = User.objects.get(id=pk)
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
class UserDeleteView(APIView):
    def delete(self, request, pk):
        user=User.objects.get(id=pk)
        user.delete()
        return Response({
            "message":"User deleted!"
        })
