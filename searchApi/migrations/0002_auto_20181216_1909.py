# Generated by Django 2.1.4 on 2018-12-16 22:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('searchApi', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='uf',
            name='date',
            field=models.DateField(null=True),
        ),
    ]
