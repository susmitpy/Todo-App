
from django.contrib import admin
from django.urls import path,include

from rest_framework import permissions
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
      title="Todos API",
      default_version='v1',
      description="Multi User Priority Based Todos API "
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('rest_framework.urls')),
    path("token/",TokenObtainPairView.as_view(),name="token_obtain"),
    path("token/refresh",TokenRefreshView.as_view(),name="token_refresh"),
    path("",include("todos.urls")),
    path("",include("authentication.urls"),name="authentication"),
    path("docs/",schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui')
    
]
