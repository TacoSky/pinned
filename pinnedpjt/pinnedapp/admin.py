from django.contrib import admin

# Register your models here.


from django.contrib import admin
from pinnedapp.models import PinnedLocation

admin.site.register(PinnedLocation)