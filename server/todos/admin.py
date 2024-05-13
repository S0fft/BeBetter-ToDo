from django.contrib import admin
from todos.models import Label, Todo

admin.site.register(Label)


@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ['title', 'time_created', 'time_updated']
