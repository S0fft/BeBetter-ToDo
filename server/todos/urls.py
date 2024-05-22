from django.urls import path
from rest_framework import routers
from todos.views import TodoViewSet

app_name = 'todos'

router = routers.DefaultRouter()

router.register(r'todos', TodoViewSet, basename='todos')

urlpatterns = [
    path('main/', TodoViewSet.as_view({'get': 'list'})),
    path('main/<int:pk>/', TodoViewSet.as_view({'get': 'retrieve', 'put': 'update'})),
]
