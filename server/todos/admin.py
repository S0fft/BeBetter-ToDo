from django.contrib import admin
from todos.models import Archive, Todo, TrashBin

# admin.site.register(Todo)
admin.site.register(TrashBin)
admin.site.register(Archive)


@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'time_created', 'time_updated']

    # fields = ['image', 'name', 'description', ('price', 'quantity'), 'stripe_product_price_id', 'category']
    # search_field = ['name', 'category__name']
    # ordering = ['name']
