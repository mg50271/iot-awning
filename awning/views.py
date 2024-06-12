from rest_framework import generics
from .models import Awning
from awning.serializers import AwningSerializer, UserSerializer
from django.contrib.auth.models import User
from rest_framework import permissions
#from awning.permissions import IsOwnerOrReadOnly


class AwningList(generics.ListCreateAPIView):
    queryset = Awning.objects.all()
    serializer_class = AwningSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly] #, IsOwnerOrReadOnly]

    #def perform_create(self, serializer):
    #    serializer.save(owner=self.request.user)


class AwningDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Awning.objects.all()
    serializer_class = AwningSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly] #, IsOwnerOrReadOnly]


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
