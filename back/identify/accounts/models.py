from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(_("User"),User, on_delete=models.CASCADE)
    google = models.OneToOneField(_("Google account"),Google, on_delete=models.CASCADE)
    github = models.OneToOneField(_("Github account"),Github, on_delete=models.CASCADE)
    linkedin = models.OneToOneField(_("LinkedIn account"),LinkedIn, on_delete=models.CASCADE)
    created_at = models.DataTimeField(_('created at'), default=timezone.now)
    lastmodified = models.DateTimeField(_('last modified'),auto_now=True)
    def __str__(self):
        return self.user.username

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

class Google(models.Model):
    pass

class Github(models.Model):
    pass

class LinkedIn(models.Model):
    pass