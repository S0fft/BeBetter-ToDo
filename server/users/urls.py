from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from . import views

app_name = 'users'

urlpatterns = [
    path('token/', views.CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('profile/', views.get_profile, name='profile'),
    path('profile/update/', views.update_profile, name='update-profile'),
    path('logout/', views.Logout.as_view(), name='auth_logout'),
    path('google/', views.GoogleAuthView.as_view(), name='google_auth'),
]

# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzMzEwNDMwLCJpYXQiOjE3MjA3MTg0MzAsImp0aSI6IjFiNmJkOWMzYzRlMDQxY2Q4NDZlNjYwZjExZDZmOTk2IiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiIn0.i--oNckLC-SvKJD6v9fIbHLAxUZ8QOncrj59iYJKhHM
