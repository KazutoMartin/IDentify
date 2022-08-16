from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

# Create your models here.

class Github(models.Model):
    account_id = models.BigIntegerField(_("Account ID"), primary_key=True)
    node_id = models.CharField(_("Node ID"), max_length=50)
    name = models.CharField(_("Name"), max_length=40)
    twitter_username = models.CharField(_("Twitter Username"), max_length=50, blank=True, null=True)
    location = models.CharField(_("Location"), max_length=200, blank=True, null=True)
    hireable = models.BooleanField(_("Hireable"))
    email = models.EmailField(_("Email"), max_length=254, unique=True)
    avatar_url = models.URLField(_("Avatar"), max_length=200)
    bio = models.TextField(_("Bio"), blank=True, null=True)
    account_created = models.DateTimeField(_("Github Joined Date"))
    followers_url = models.URLField(_("Followers Url"), max_length=200)
    following_url = models.URLField(_("Following Url"), max_length=200)
    created_at = models.DateTimeField(_('Created at'), default=timezone.now)
    last_modified = models.DateTimeField(_('last modified'),auto_now=True)

    def __str__(self):
        return self.profile.user.username