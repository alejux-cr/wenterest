from specialists.models import Specialists
from rest_framework import viewsets, permissions
from .serializers import SpecialistsSerializer

# Specialist Viewset: allows us to create a CRUD API with specifying explicit methods for the functionality, like ruby on rails

class SpecialistsViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = SpecialistsSerializer

    def get_queryset(self):
        return self.request.user.specialists.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    