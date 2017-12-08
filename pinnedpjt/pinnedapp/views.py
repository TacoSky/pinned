# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.


def toppage(request):
    """トップページ ※テンポラリ"""
    return render(request,'searchtop.html')


def search(request):
    """検索トップ"""
    if 0 != len(request.GET):
        """print(request.GET.get(key="q", default="hogehoge"))"""
        return render(request,'searchtop.html')
    else:
        return render(request,'searchtop.html')

