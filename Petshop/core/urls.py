from django.urls import path
from .views import contacto, index, editor_producto,lista_producto,producto_ficha,sobrenosotros,iniciar_sesion, carrito, registroUsuario, cerrar_sesion 


urlpatterns = [
    path('', index, name="index"),
    path('editorProducto/<action>/<id>', editor_producto, name="editorProducto"),
    path('producto_tienda/', lista_producto, name="tiendaProducto"),
    path('producto_ficha/<id>', producto_ficha, name="producto_ficha"),
    path('sobrenosotros/', sobrenosotros, name="sobrenosotros"),
    path('contacto/', contacto, name="contacto"),
    path('iniciar_sesion/', iniciar_sesion, name="iniciar_sesion" ),
    path('carrito/', carrito, name="carrito"),
    path('registroUsuario/', registroUsuario.as_view(), name="registroUsuario"),
    path('cerrar_sesion/', cerrar_sesion, name="cerrar_sesion" ),

]