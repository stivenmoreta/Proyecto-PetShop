from os import name
from django.urls import path
from rest_petshop.views import lista_productos, detalle_productos
from rest_petshop.viewslogin import login



urlpatterns = [
    path('lista_productos/', lista_productos, name="lista_productos"), # http://127.0.0.1:8000/api/lista_productos/
    path('detalle_productos/<id>',detalle_productos, name="detalle_productos" ), # http://127.0.0.1:8000/api/detalle_productos/<id>
    path('login', login, name="login"),
]