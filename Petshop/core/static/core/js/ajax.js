
var btnCargar = document.getElementById('Nosotros');

function cargarContenidoAjax(){
        // creando el xmlhttprequest
        var xhr = new XMLHttpRequest();

        //conexion
        xhr.open("GET", "{% static 'core/img/nota_especial_del_equipo.txt' %}", true);
        xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200){
                        console.log("gracias por ver nuestra nota especial")
                        var contenido = document.getElementById('contenido');
                        contenido.innerHTML = xhr.responseText;
                }
        }

       xhr.send(); 
}

btnCargar.addEventListener('click', cargarContenidoAjax);