# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.


def toppage(request):
    """トップページ"""
    #return HttpResponse('トップページ')
    return render(request,'toppage.html')
