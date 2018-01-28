# -*- coding: utf-8 -*-
from django.conf.urls import url
from pinnedapp import views


urlpatterns = [
    url(r'^$', views.toppage, name='home'),
    url(r'^search/$', views.search, name='search'),
    url(r'^test01/$', views.test01, name='test01'),
    url(r'^test02/$', views.test02, name='test02'),
]