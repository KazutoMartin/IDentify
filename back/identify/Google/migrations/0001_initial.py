# Generated by Django 4.0.5 on 2022-08-11 08:22

from django.db import migrations, models
import django.utils.timezone
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Google',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50, verbose_name='First name')),
                ('last_name', models.CharField(max_length=50, verbose_name='Last name')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='Email')),
                ('profile_pic', models.URLField(blank=True, null=True, verbose_name='Profile Picture')),
                ('google_id', models.CharField(max_length=50, unique=True, verbose_name='Client ID')),
                ('token_id', models.CharField(max_length=50, unique=True, verbose_name='Token ID')),
                ('access_token', models.CharField(max_length=50, unique=True, verbose_name='Access ID')),
                ('phone_number', phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=20, null=True, region=None, verbose_name='Phone Number')),
                ('birthday', models.DateField(blank=True, null=True, verbose_name='Birthday')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Created at')),
                ('last_modified', models.DateTimeField(auto_now=True, verbose_name='last modified')),
            ],
        ),
    ]