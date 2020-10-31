from django.db import models
from django.contrib.auth import get_user_model

USER_MODEL = get_user_model()

# Create your models here.
class Todo(models.Model):
    class Priority(models.IntegerChoices):
        HIGH = 3
        MEDIUM = 2
        LOW = 1
    owner = models.ForeignKey(
        to = USER_MODEL,
         related_name='todos',
          on_delete=models.CASCADE
        )

    title = models.CharField(max_length=50)
    description = models.CharField(max_length=150)
    priority = models.IntegerField(choices=Priority.choices)

    def __str__(self):
        return self.title
    