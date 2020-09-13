from django.db import models

# Create your models here.
class Todo(models.Model):
    class Priority(models.IntegerChoices):
        HIGH = 3
        MEDIUM = 2
        LOW = 1
    
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=150)
    priority = models.IntegerField(choices=Priority.choices)
    