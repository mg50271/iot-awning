from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Awning


class AwningSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Awning
        fields = ['name', 'location', 'is_folded', 'created_at', 'owner']


class UserSerializer(serializers.ModelSerializer):
    awnings = serializers.PrimaryKeyRelatedField(many=True, queryset=Awning.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'awnings']
