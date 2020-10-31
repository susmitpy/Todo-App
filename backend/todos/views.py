from rest_framework import permissions
from rest_framework.exceptions import PermissionDenied

from rest_framework.viewsets import ModelViewSet
from .models import Todo
from .serializers import TodoSerializer

class IsOwner(permissions.BasePermission):
    def has_object_permission(self,request,view,obj):
        return obj.owner == request.user

class TodoViewSet(ModelViewSet):
    serializer = TodoSerializer
    permission_classes = (IsOwner,)
    serializer_class = TodoSerializer

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            return Todo.objects.filter(owner=user)
        raise PermissionDenied()


    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)

