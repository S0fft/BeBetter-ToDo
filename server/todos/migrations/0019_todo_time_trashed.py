# Generated by Django 5.0.3 on 2024-07-12 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0018_rename_is_pined_todo_is_pinned'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='time_trashed',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]