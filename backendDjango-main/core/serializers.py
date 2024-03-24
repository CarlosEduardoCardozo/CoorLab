from rest_framework.serializers import ModelSerializer
from core.models import ticket

class ticketSerializer(ModelSerializer):
    class Meta:
        model = ticket
        fields = "__all__"