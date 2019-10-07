from rest_framework import routers
from .api import SpecialistsViewSet

router = routers.DefaultRouter()
router.register('api/specialists', SpecialistsViewSet, 'specialists')

urlpatterns = router.urls