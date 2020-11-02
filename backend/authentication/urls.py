from django.urls import path



from .views import RegistrationAPI, LoginAPI


urlpatterns = [
    path("register/", RegistrationAPI.as_view(), name="register"),
    path("login/", LoginAPI.as_view(), name="login"),

]
