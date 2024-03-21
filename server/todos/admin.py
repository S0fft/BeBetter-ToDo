from django.contrib import admin
from todos.models import Todo, TrashBin

admin.site.register(Todo)
admin.site.register(TrashBin)
