from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

# Create your models here.


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