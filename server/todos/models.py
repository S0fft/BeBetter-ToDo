from django.db import models
from django.utils import timezone
from users.models import User


class Todo(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    title = models.CharField(max_length=128)
    label = models.CharField(max_length=128)
    content = models.TextField()
    is_done = models.BooleanField(default=False)
    is_trashed = models.BooleanField(default=False)
    is_archived = models.BooleanField(default=False)
    time_created = models.DateTimeField(auto_now_add=True)
    time_updated = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title
