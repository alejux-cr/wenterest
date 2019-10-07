from rest_framework import serializers
from specialists.models import Specialists

# Specialist Serializer

class SpecialistsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialists
        fields = '__all__'