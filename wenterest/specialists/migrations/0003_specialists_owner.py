# Generated by Django 2.2.5 on 2019-10-07 21:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('specialists', '0002_auto_20191003_1436'),
    ]

    operations = [
        migrations.AddField(
            model_name='specialists',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='specialists', to=settings.AUTH_USER_MODEL),
        ),
    ]
