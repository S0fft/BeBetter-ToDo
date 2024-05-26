from django.urls import include, path
from rest_framework import routers
from todos.views import TodoViewSet

app_name = 'todos'

router = routers.DefaultRouter()
router.register(r'', TodoViewSet, basename='todos')

urlpatterns = [
    path('', include(router.urls)),
]
