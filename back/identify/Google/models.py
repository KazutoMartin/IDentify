from django.db import models
from django.utils import timezone
from phonenumber_field.modelfields import PhoneNumberField
from django.utils.translation import gettext_lazy as _



# Create your models here.

class Google(models.Model):
    first_name = models.CharField(_("First name"), max_length=50)
    last_name = models.CharField(_("Last name"), max_length=50)
    email = models.EmailField(_("Email"), max_length=254, unique=True)
    profile_pic = models.URLField(_("Profile Picture"), max_length=200, blank=True, null=True)
    google_id = models.CharField(_("Client ID"), max_length=50, unique=True)
    token_id = models.CharField(_("Token ID"), max_length=50, unique=True)
    access_token = models.CharField(_("Access ID"), max_length=50, unique=True)
    phone_number = PhoneNumberField(_("Phone Number"), blank=True, null=True, max_length=20)
    birthday = models.DateField(_("Birthday"), blank=True, null=True)
    created_at = models.DateTimeField(_('Created at'), default=timezone.now)
    last_modified = models.DateTimeField(_('last modified'),auto_now=True)