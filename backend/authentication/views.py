from django.contrib.auth import get_user_model
from rest_framework import permissions
from rest_framework import decorators, permissions, status, generics

from rest_framework.authtoken.models import Token

from rest_framework.response import Response

from .serializers import (CreateUserSerializer,UserSerializer, LoginUserSerializer)
from rest_framework import permissions

class RegistrationAPI(generics.GenericAPIView):
    permission_classes=[permissions.AllowAny]
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.create(user=user).key
        })

class LoginAPI(generics.GenericAPIView):
    permission_classes=[permissions.AllowAny]
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get_or_create(user=user)[0].key
        })
