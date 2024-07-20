from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    image = models.ImageField(upload_to='users_images', null=True, blank=True, default='default_avatar.png')
    is_verified_email = models.BooleanField(default=False)
    registration_date = models.DateTimeField(auto_now_add=True)
