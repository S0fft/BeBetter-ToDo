# Generated by Django 5.0.3 on 2024-03-29 09:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0008_remove_todo_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Archive',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.AddField(
            model_name='todo',
            name='is_archived',
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='todo',
            name='label',
            field=models.CharField(default='', max_length=128),
        ),
    ]
