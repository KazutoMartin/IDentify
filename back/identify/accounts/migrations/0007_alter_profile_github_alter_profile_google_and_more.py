# Generated by Django 4.0 on 2022-08-20 15:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Github', '0002_alter_github_bio_alter_github_email_and_more'),
        ('Google', '0001_initial'),
        ('LinkedIn', '0002_remove_linkedin_country_linkedin_country_and_more'),
        ('accounts', '0006_remove_skill_linkedin_account_alter_profile_github_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='github',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='Github.github', verbose_name='Github account'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='google',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='Google.google', verbose_name='Google account'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='linkedin',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='LinkedIn.linkedin', verbose_name='LinkedIn account'),
        ),
    ]
