from django.contrib import admin
from . import models
# Register your models here.
# use admin.site.register(models.modelname) to register

admin.site.register(models.Profile)

admin.site.register(models.Google)

admin.site.register(models.Github)

admin.site.register(models.LinkedIn)
