from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('wenterest_ui.urls')),
    path('', include('specialists.urls')),
    path('', include('accounts.urls'))
]
