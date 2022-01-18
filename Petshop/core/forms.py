from django import forms
from django.forms import ModelForm, fields, Form
from .models import Producto
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class ProductoForm (ModelForm):
    class Meta:
        model = Producto
        fields = {'nombre','marca','descripcion','categoria','stock','precio','imagenProducto'}

class IniciarSesionForm(Form):
    username = forms.CharField(widget=forms.TextInput(), label="Nombre de Usuario")
    password = forms.CharField(widget=forms.PasswordInput(), label="Contraseña")
    class Meta:
        fields = ['username', 'password']

class RegistroForm(UserCreationForm):
    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'email',
           ]
        labels = {
            'username': 'Nombre de usuario',
            'first_name':  'Nombre',
            'last_name': 'Apellidos',
            'email': 'Correo',
        }