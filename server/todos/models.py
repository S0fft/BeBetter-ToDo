from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=128)
    category = models.CharField(max_length=128)
    content = models.TextField()
    is_done = models.BooleanField()
    is_trashed = models.BooleanField()
    time_created = models.DateTimeField(auto_now_add=True)
    time_updated = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title


class TrashBin(models.Model):
    title = models.ForeignKey(Todo, on_delete=models.CASCADE)
    category = models.CharField(max_length=128)
    time_trashed = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f'Removed: {self.title} at {self.time_trashed}'
