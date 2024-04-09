from django.contrib import admin
from todos.models import Todo


@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ['title', 'label', 'time_created', 'time_updated']
