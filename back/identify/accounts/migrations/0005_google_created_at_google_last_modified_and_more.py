# Generated by Django 4.0.5 on 2022-08-06 14:37

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_linkedin_country_linkedin_city_linkedin_degree_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='google',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Created at'),
        ),
        migrations.AddField(
            model_name='google',
            name='last_modified',
            field=models.DateTimeField(auto_now=True, verbose_name='last modified'),
        ),
        migrations.AddField(
            model_name='linkedin',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Created at'),
        ),
        migrations.AddField(
            model_name='linkedin',
            name='last_modified',
            field=models.DateTimeField(auto_now=True, verbose_name='last modified'),
        ),
    ]