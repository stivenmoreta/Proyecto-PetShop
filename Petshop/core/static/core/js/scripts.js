$(document).ready(function () {

/* Inicio carrito pagar con jquery*/
var total_carro = parseInt($("#subtotal_3").text())+
parseInt($("#subtotal_2").text())+
parseInt($("#subtotal_1").text());  
        
$('#total').text(total_carro);


var i = 1;
 $('#incrementa').click(function(){ 
       
    if (i < 20 ) { /*Cambiar el >= 0 por < 10 si quieres limitar el incremento*/
            i++;
    } else if (i = i++) {
            i = 1;
    }

    document.getElementById("cantidad").innerHTML = i;        
    var sub_total= parseInt($('#precio_gp').text())*i;
    $("#subtotal_1").text(sub_total);
    
    var total=  parseInt($("#subtotal_3").text())+
    parseInt($("#subtotal_2").text())+
    parseInt($("#subtotal_1").text());
    $('#total').text(total);
    
                
 })
 $('#disminuye').click(function(){ 
 
  if (i > 1) {--i;} 
        document.getElementById("cantidad").innerHTML = i;
        var sub_total= parseInt($('#precio_gp').text())*i;
        $("#subtotal_1").text(sub_total);

        var total=  parseInt($("#subtotal_3").text())+
        parseInt($("#subtotal_2").text())+
        parseInt($("#subtotal_1").text());
        $('#total').text(total);
 });



var o = 1;
 $('#incrementa_2').click(function(){       
    if (o < 20 ) { 
            o++;
    } else if (o = o++) {
            o = 1;
    }

    document.getElementById("cantidad_2").innerHTML = o;        
    var sub_total= parseInt($('#precio_gg').text())*o;
    $("#subtotal_2").text(sub_total);

    var total=  parseInt($("#subtotal_3").text())+
    parseInt($("#subtotal_2").text())+
    parseInt($("#subtotal_1").text());
    $('#total').text(total);
                
 });
 $('#disminuye_2').click(function(){ 
 
  if (o > 1) {--o;} 
    document.getElementById("cantidad_2").innerHTML = o;
    var sub_total= parseInt($('#precio_gg').text())*o;
    $("#subtotal_2").text(sub_total);
    
    var total=  parseInt($("#subtotal_3").text())+
    parseInt($("#subtotal_2").text())+
    parseInt($("#subtotal_1").text());
    $('#total').text(total);
 });



var u = 1;
 $('#incrementa_3').click(function(){       
    if (u < 20 ) { 
            u++;
    } else if (u = u++) {
            u = 1;
    }
    document.getElementById("cantidad_3").innerHTML = u;        
    var sub_total= parseInt($('#precio_rp').text())*u;
    $("#subtotal_3").text(sub_total);
    
    var total=  parseInt($("#subtotal_3").text())+
    parseInt($("#subtotal_2").text())+
    parseInt($("#subtotal_1").text());
    $('#total').text(total);
                
 });
 $('#disminuye_3').click(function(){ 
 
  if (u > 1) {--u;} 
        document.getElementById("cantidad_3").innerHTML = u;
        var sub_total= parseInt($('#precio_rp').text())*u;
        $("#subtotal_3").text(sub_total);

        var total=  parseInt($("#subtotal_3").text())+
                    parseInt($("#subtotal_2").text())+
                    parseInt($("#subtotal_1").text());
        $('#total').text(total);
        
 });


$('#Standard').click(function(){
        $('#gran_total').val(parseInt($('input:radio[name=precio_envio]:checked').val())+parseInt($('#total').text()));
});

$('#Express').click(function(){
        $('#gran_total').val(parseInt($('input:radio[name=precio_envio]:checked').val())+parseInt($('#total').text()));
});
/* Fin carrito pagar con jquery*/


});
