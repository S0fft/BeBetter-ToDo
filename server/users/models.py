from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    image = models.ImageField(upload_to='users_images', null=True, blank=True, default='default_avatar.png')
    is_verified_email = models.BooleanField(default=False)
    registration_date = models.DateTimeField(auto_now_add=True)
