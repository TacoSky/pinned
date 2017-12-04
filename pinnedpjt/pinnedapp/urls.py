# -*- coding: utf-8 -*-
from django.conf.urls import url
from pinnedapp import views


urlpatterns = [
    url(r'^', views.toppage, name='home'),
]