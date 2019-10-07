from specialists.models import Specialists
from rest_framework import viewsets, permissions
from .serializers import SpecialistsSerializer

# Specialist Viewset: allows us to create a CRUD API with specifying explicit methods for the functionality, like ruby on rails

class SpecialistsViewSet(viewsets.ModelViewSet):
    queryset = Specialists.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SpecialistsSerializer