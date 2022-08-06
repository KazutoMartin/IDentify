from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField

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




class Github(models.Model):
    account_id = models.BigIntegerField(_("Account ID"), primary_key=True)
    node_id = models.CharField(_("Node ID"), max_length=50)
    name = models.CharField(_("Name"), max_length=40)
    twitter_username = models.CharField(_("Twitter Username"), max_length=50, blank=True, null=True)
    location = models.CharField(_("Location"), max_length=200)
    hireable = models.BooleanField(_("Hireable"))
    email = models.EmailField(_("Email"), max_length=254)
    avatar_url = models.URLField(_("Avatar"), max_length=200)
    bio = models.TextField(_("Bio"))
    account_created = models.DateTimeField(_("Github Joined Date"))
    followers_url = models.URLField(_("Followers Url"), max_length=200)
    following_url = models.URLField(_("Following Url"), max_length=200)
    created_at = models.DateTimeField(_('Created at'), default=timezone.now)
    last_modified = models.DateTimeField(_('last modified'),auto_now=True)

    def __str__(self):
        return self.profile.user.username

class LinkedIn(models.Model):
    first_name = models.CharField(_("First name"), max_length=20, null=True)
    last_name = models.CharField(_("Last name"), max_length=20, null=True)
    summary = models.TextField(_("Summary"), max_length=2001, null=True)
    Country = models.CharField(_("Country"), max_length=30, null=True)
    city = models.CharField(_("City"), max_length=30, null=True)
    picture_url = models.URLField(_("Picture Url"), max_length=200, null=True)
    industry_name = models.CharField(_("Industry"), max_length=20, null=True)
    is_student = models.BooleanField(_("Is Student"), default=False)
    headline = models.CharField(_("Headline"), max_length=200, null=True)
    school = models.CharField(_("School"), max_length=20, null=True)
    degree = models.CharField(_("Degree"), max_length=20, null=True)
    study_field = models.CharField(_("Study field"), max_length=20, null=True)
    created_at = models.DateTimeField(_('Created at'), default=timezone.now)
    last_modified = models.DateTimeField(_('last modified'),auto_now=True)   

    def __str__(self):
        return self.profile.user.username

class Company(models.Model):
    linkedIn_account = models.ForeignKey(LinkedIn, on_delete=models.CASCADE, verbose_name=_("Linkedin account"))
    name = models.CharField(_("Company name"), max_length=20)

    def __str__(self):
        return self.name

class Skill(models.Model):
    linkedIn_account = models.ForeignKey(LinkedIn, on_delete=models.CASCADE, verbose_name=_("Linkedin account"))
    name = models.CharField(_("Skill"), max_length=20)

    def __str__(self):
        return self.name



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