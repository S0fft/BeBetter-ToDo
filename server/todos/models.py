from django.db import models
from django.utils import timezone
from users.models import User


class Label(models.Model):
    title = models.CharField(max_length=128)
    color = models.CharField(max_length=6)

    def __str__(self) -> str:
        return self.title


class Todo(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    title = models.CharField(max_length=128)
    # label = models.ForeignKey(to=Label, max_length=128, default=None, on_delete=models.PROTECT)
    labels = models.ManyToManyField('Label', null=True, blank=True)
    content = models.TextField()
    is_done = models.BooleanField(default=False)
    is_pined = models.BooleanField(default=False)
    is_trashed = models.BooleanField(default=False)
    is_archived = models.BooleanField(default=False)
    time_created = models.DateTimeField(auto_now_add=True)
    time_updated = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title
