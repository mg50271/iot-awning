from django.db import models
from django.contrib.auth.models import AbstractUser, User
# Create your models here.


class User2(User):
    email_address = models.EmailField(unique=True)



class Awning(models.Model):
    name = models.CharField(max_length=100, unique=True)
    owner = models.CharField(max_length=100, default='')
    location = models.CharField(max_length=100, blank=True, default='')
    is_folded = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name
    



class WindSensor(models.Model):
    awning = models.ForeignKey(Awning, on_delete=models.CASCADE)
    wind_speed = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.awning.name} - {self.wind_speed} m/s at {self.timestamp}"

    class Meta:
        ordering = ['-timestamp']
