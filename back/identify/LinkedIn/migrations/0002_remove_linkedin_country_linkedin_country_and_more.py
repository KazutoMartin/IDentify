# Generated by Django 4.0 on 2022-08-20 15:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LinkedIn', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='linkedin',
            name='Country',
        ),
        migrations.AddField(
            model_name='linkedin',
            name='country',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Country'),
        ),
        migrations.AlterField(
            model_name='linkedin',
            name='city',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='City'),
        ),
        migrations.AlterField(
            model_name='linkedin',
            name='degree',
            field=models.CharField(blank=True, max_length=20, null=True, verbose_name='Degree'),
        ),
        migrations.AlterField(
            model_name='linkedin',
            name='first_name',
            field=models.CharField(max_length=20, verbose_name='First name'),
        ),
        migrations.AlterField(
            model_name='linkedin',
            name='headline',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Headline'),
        ),
        migrations.AlterField(
            model_name='linkedin',
            name='industry_name',
            field=models.CharField(blank=True, max_length=20, null=True, verbose_name='Industry'),
        ),
        migrations.AlterField(
            model_name='linkedin',
            name='last_name',
            field=models.CharField(max_length=20, verbose_name='Last name'),
        ),
        migrations.AlterField(
            model_name='linkedin',
            name='school',
            field=models.CharField(blank=True, max_length=20, null=True, verbose_name='School'),
        ),
        migrations.AlterField(
            model_name='linkedin',
            name='study_field',
            field=models.CharField(blank=True, max_length=20, null=True, verbose_name='Study field'),
        ),
        migrations.AlterField(
            model_name='linkedin',
            name='summary',
            field=models.TextField(blank=True, max_length=2001, null=True, verbose_name='Summary'),
        ),
    ]
