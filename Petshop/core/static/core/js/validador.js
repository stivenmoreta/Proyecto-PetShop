// objeto.metodo(json)

$("#formulario-contacto").validate({
    rules: {
        "txtNombre":{
        required:true,
        minlength: 10
    },
        "txtEmail": {
        required: true,
        email: true,
        minlength:10
    },
        "txtTema": {
        required: true,
        minlength:10
    },
        "txtMensaje":{
        required:true,
        minlength:50
        },
    }, // --> Fin de reglas
    messages: {
        "txtNombre":{
            required:'Introdusca su nombre',
            minlength: 'Ingrese 10 caracteres como minimo'
        },
        "txtEmail": {
            required: 'Ingrese su email',
            email: 'No cumple formato',
            minlength:'la wea'
        },
        "txtTema": {
            required: 'Ingrese un tema',
            minlength:'Ingrese 10 caracteres como minimo'
        },
        "txtMensaje":{
            required: 'Ingrese un mensaje',
            minlength:'Ingrese 50 caracteres como minimo'
        }
    } //-->Fin de mensajes
});

$("#reseña").validate({
    rules: {
        "txtNombre": {
            required:true,
            minlength: 10
        },
        "txtEmail": {
            required: true,
            email: true,
            minlength:10
        },
        "Reseña": {
            required: true,
            email: true,
            minlength:10
        },
    },
    messages: {
        "txtNombre":{
            required:'Introdusca su nombre',
            minlength: 'Ingrese 10 caracteres como minimo'
        },
        "txtEmail": {
            required: 'Ingrese su email',
            email: 'No cumple formato',
            minlength:'falta carácter'
        },
        "Reseña":{
            required: 'Ingrese un mensaje',
            minlength:'Ingrese 50 caracteres como minimo'
        }
    }
});

$("#login").validate({
    rules:{
        "nombre-usuario": {
            required:true,
            minlength: 10
        },
        "contraseña-usuario": {
            required:true,
            minlength: 6
        },

    },
    messages: {
        "nombre-usuario": {
            required:'Introduzca nombre de usuario',
            minlength: 'Debe tener al menos 10 carácteres'
        },
        "contraseña-usuario": {
            required: 'Introduza su contraseña',
            minlength: 'La contraseña debe tener 10 carácteres mínimo'
        }

    }
});

$("#registro").validate({
    rules:{
        "nombre-usuario": {
            required:true,
            minlength: 10
        },
        "contraseña-usuario": {
            required:true,
            minlength: 6
        },
        "email-usuario": {
            required: true,
            email: true,
            minlength:10
        },
    },
    messages: {
        "nombre-usuario": {
            required:'Introduzca nombre de usuario',
            minlength: 'Debe tener al menos 10 carácteres'
        },
        "contraseña-usuario": {
            required: 'Introduza su contraseña',
            minlength: 'La contraseña debe tener 10 carácteres mínimo'
        },
        "email-usuario": {
            required: 'Ingrese su email',
            email: 'No cumple formato',
            minlength:'falta carácter'
        }
    }
});

