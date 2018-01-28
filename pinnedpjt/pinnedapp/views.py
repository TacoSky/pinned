# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from pinnedapp.models import PinnedLocation


# Create your views here.


def toppage(request):
    """トップページ ※テンポラリ"""
    return render(request,'searchtop.html')


def search(request):
    """検索トップ"""
    if 0 == len(request.GET):
        return render(request,'searchtop.html')
    else:
        keyword = request.GET.get(key="key", default="")
        reslist = PinnedLocation.objects.all().filter(name__contains=keyword)

        return render(request,'searchresult.html', {
            'reslist': reslist,
        })


def test01(request):
    """トップページ ※テンポラリ"""
    return render(request,'test01.html')


def test02(request):
    """トップページ ※テンポラリ"""
    return render(request,'test02.html')

