from django.db import models


class Specialists(models.Model):
    domain = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    profile_link = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)