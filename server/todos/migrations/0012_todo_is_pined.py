# Generated by Django 5.0.3 on 2024-04-11 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0011_label_alter_todo_label'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='is_pined',
            field=models.BooleanField(default=False),
        ),
    ]
