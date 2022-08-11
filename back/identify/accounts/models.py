import imp
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from Google.models import Google
from LinkedIn.models import LinkedIn
from Github.models import Github


# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name=_("User"), null=True)
    google = models.OneToOneField(Google, on_delete=models.CASCADE, verbose_name=_("Google account"), null=True)
    github = models.OneToOneField(Github, on_delete=models.CASCADE, verbose_name=_("Github account"), null=True)
    linkedin = models.OneToOneField(LinkedIn, on_delete=models.CASCADE, verbose_name=_("LinkedIn account"), null=True)
    created_at = models.DateTimeField(_('created at'), default=timezone.now)
    last_modified = models.DateTimeField(_('last modified'),auto_now=True)
    def __str__(self):
        return self.user.username

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()