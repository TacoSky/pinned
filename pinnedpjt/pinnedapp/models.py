# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class PinnedLocation(models.Model):
    """場所"""
    name = models.CharField('場所名', max_length=255)
    lat = models.FloatField('緯度')
    lng = models.FloatField('経度')

    def __str__(self):
        return self.name
