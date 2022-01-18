from django.db import models

# Create your models here.
class Categoria (models.Model):
    idCategoria = models.AutoField(primary_key=True, verbose_name="Id de la categoria")
    nombreCategoria = models.CharField(max_length=80, blank=False, null=False, verbose_name="Nombre de la categoria")

    def __str__(self):
        return self.nombreCategoria

class Marca (models.Model):
    idMarca = models.AutoField(primary_key=True, verbose_name="id marca")
    nombreMarca = models.CharField(max_length=200,verbose_name="nombre de Marca")

    def __str__(self):
        return self.nombreMarca

class Producto (models.Model):
    sku = models.AutoField(primary_key=True, verbose_name="SKU")
    nombre = models.CharField(max_length=60, unique=True,blank=False, null=False, verbose_name="Nombre")
    descripcion = models.CharField(max_length=200, blank=True,verbose_name="Descripcion")
    precio = models.IntegerField(blank=False,null=False,verbose_name="Precio")
    stock = models.IntegerField(blank=False,null=False,verbose_name="Stock")
    imagenProducto = models.ImageField(upload_to="img/", default="sinfoto.jpg", null=False, blank=False, verbose_name="Imagen del producto")#aca
    marca = models.ForeignKey(Marca, on_delete=models.DO_NOTHING)
    categoria = models.ForeignKey(Categoria, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.nombre