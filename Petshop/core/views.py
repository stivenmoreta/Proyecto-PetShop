from django.shortcuts import redirect,render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authentication import RemoteUserAuthentication
from rest_framework.decorators import permission_classes
from .models import Producto
from .forms import ProductoForm, IniciarSesionForm
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.views.generic import CreateView
from django.contrib import auth
from rest_petshop.viewslogin import login
from django.contrib.auth.forms import AuthenticationForm
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView 
from .forms import RegistroForm
from django.contrib.auth import login, logout, authenticate



# Create your views here.
from django.shortcuts import render
""" from .models import UsuarioDonador
from .forms import UsuarioDonadorForm,DonacionForm """

def carrito(request):
    return render(request, "core/cart.html")

def contacto(request):
    return render(request, "core/contact.html")

def sobrenosotros(request):
    return render(request, "core/about.html")

def index(request):
    return render(request, "core/index.html")

def lista_producto(request):
    data = {"list": Producto.objects.all().order_by('sku')}
    return render(request, "core/shop-list-left-sidebar.html", data)

def producto_ficha(request, id):
    producto = Producto.objects.get(sku=id)
    data = {"producto":  producto}
    return render(request, "core/single-product.html", data)
   
def editor_producto(request, action, id):
    data = {"mesg": "", "form": ProductoForm, "action": action, "id": id}

    if action == 'ins':
        if request.method == "POST":
            form = ProductoForm(request.POST, request.FILES)
            if form.is_valid:
                try:
                    form.save()
                    data["mesg"] = "¡El producto fue creado correctamente!"
                except:
                    data["mesg"] = "¡El producto ya esta registrado!"

    elif action == 'upd':
        objeto = Producto.objects.get(sku=id)
        if request.method == "POST":
            form = ProductoForm(data=request.POST, files=request.FILES, instance=objeto)
            if form.is_valid:
                form.save()
                data["mesg"] = "¡El producto fue actualizado correctamente!"
        data["form"] = ProductoForm(instance=objeto)
 
    elif action == 'del':
        try:
            Producto.objects.get(sku=id).delete()
            data["mesg"] = "¡El producto fue eliminado correctamente!"
            return redirect(editor_producto, action='ins', id = '-1')
        except:
            data["mesg"] = "¡El producto ya estaba eliminado!"
 
    data["list"] = Producto.objects.all().order_by('sku')
    return render(request, "core/editorProducto.html", data)

def cerrar_sesion(request):
    logout(request)
    return redirect(index)

def iniciar_sesion(request):
    data = {"mesg": "", "form": IniciarSesionForm()}

    if request.method == "POST":
        form = IniciarSesionForm(request.POST)
        if form.is_valid:
            username = request.POST.get("username")
            password = request.POST.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect(index)
                else:
                    data["mesg"] = "La cuenta o la password son incorrectas"
            else:
                data["mesg"] = "La cuenta o la password son incorrectas"
    return render(request, "core/login.html", data)

class registroUsuario(CreateView):
    model = User
    template_name = "core/registroUsuario.html"
    form_class = RegistroForm
    success_url = reverse_lazy('iniciar_sesion')