from django.contrib.auth import get_user_model
from rest_framework import permissions
from rest_framework import decorators, permissions, status, generics
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework.response import Response

from .serializers import (CreateUserSerializer,UserSerializer, LoginUserSerializer)
from rest_framework import permissions

class RegistrationAPI(generics.GenericAPIView):
    permission_classes=[permissions.AllowAny]
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            return response.Response(serializer.errors, status.HTTP_400_BAD_REQUEST)  
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })

class LoginAPI(generics.GenericAPIView):
    permission_classes=[permissions.AllowAny]
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
        user = serializer.validated_data
        refresh = RefreshToken.for_user(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "refresh": str(refresh),
            'access': str(refresh.access_token),
        })