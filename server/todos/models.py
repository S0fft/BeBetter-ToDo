# from datetime import timedelta

from django.db import models
from django.utils import timezone
from users.models import User


class Label(models.Model):
    title = models.CharField(max_length=128)
    color = models.CharField(max_length=6, default=False)

    def __str__(self):
        return self.title


class Todo(models.Model):
    title = models.CharField(max_length=128)
    content = models.TextField()
    label = models.ForeignKey(Label, on_delete=models.SET_NULL, null=True, related_name='todos')
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='todos')
    is_done = models.BooleanField(default=False)
    is_pinned = models.BooleanField(default=False)
    is_trashed = models.BooleanField(default=False)
    time_created = models.DateTimeField(auto_now_add=True)
    time_updated = models.DateTimeField(auto_now=True)
    time_trashed = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.is_trashed and not self.time_trashed:
            self.time_trashed = timezone.now()

        elif not self.is_trashed:
            self.time_trashed = None

        super().save(*args, **kwargs)

    # @property
    # def time_in_trash(self):
    #     if self.is_trashed and self.time_trashed:
    #         time_trash = timezone.now() - self.time_trashed
    #         return time_trash
    #     return None

    # def delete_if_old_trash(self):
    #     if self.is_trashed and self.time_in_trash and self.time_in_trash >= timedelta(seconds=7):
    #         self.delete()

    # def delete(self):
    #     super().delete()
