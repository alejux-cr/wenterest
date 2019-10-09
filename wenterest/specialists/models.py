from django.db import models
from django.contrib.auth.models import User

class Specialists(models.Model):
    domain = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    profile_link = models.TextField()
    owner = models.ForeignKey(User, related_name="specialists", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
