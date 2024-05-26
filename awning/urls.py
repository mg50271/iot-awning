from django.urls import path
from .views import AwningList, AwningDetails, UserList, UserDetails

urlpatterns = [
    path('awnings/', AwningList.as_view()),
    path('awnings/<int:pk>/', AwningDetails.as_view()),
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetails.as_view()),
]
