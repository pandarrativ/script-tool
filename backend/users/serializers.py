from rest_framework import serializers
from .models import User

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["_id", "email", "password"]

class UserSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["_id", "email"]