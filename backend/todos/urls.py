from django.urls import path
from .views import TodoViewSet

from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register("todos",TodoViewSet,basename="todo")

urlpatterns = router.urls
