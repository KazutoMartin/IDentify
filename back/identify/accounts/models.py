from django.db import models

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name="User")
    google = models.OneToOneField(Google, on_delete=models.CASCADE, verbose_name="Google account")
    github = models.OneToOneField(Github, on_delete=models.CASCADE, verbose_name="Github account")
    linkedin = models.OneToOneField(LinkedIn, on_delete=models.CASCADE, verbose_name="LinkedIn account")
    def __str__(self):
        return self.user.username

class Google(models.Model):pass


class Github(models.Model):
    pass


class LinkedIn(models.Model):
    pass
