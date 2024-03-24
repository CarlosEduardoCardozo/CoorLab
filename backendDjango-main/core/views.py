from rest_framework.viewsets import ModelViewSet

from core.models import ticket
from core.serializers import ticketSerializer

class ticketViewSet(ModelViewSet):
    queryset = ticket.objects.all()
    serializer_class = ticketSerializer