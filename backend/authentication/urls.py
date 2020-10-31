from django.urls import path


from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import RegistrationAPI, LoginAPI


urlpatterns = [
    path("register/", RegistrationAPI.as_view(), name="register"),
    path("login/", LoginAPI.as_view(), name="login"),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),   
]