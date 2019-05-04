$("#btn-crearcuenta").click(function(){
        
  if($("#contrasena").val()==$("#recontrasena").val() && $("#correo").val()!="" && $("#nombre").val()!="" && $("#contrasena").val()!=""){
      
      var parametros = {
        "nombre":$("#nombre").val(),
        "correo":$("#correo").val(),
        "contrasena":$("#contrasena").val()
      };
      console.log(parametros);
      $.ajax({
        url:"../ajax/usuario.php?accion=guardar",
        data:parametros,
        method:"POST",
        dataType:"json",
        success:function(res){
          console.log(res);
          window.location.href="buynow.html";
        },
        error:function(error){
            console.error(error);
        }
      });
  }else{
    alert("Datos Erroneos");
  }  
});

$("#btn-login").click(function(){
  var parametros = "correo="+$("#correo").val() + "&contrasena="+$("#contrasena").val();
  console.log(parametros);
  $.ajax({
      url:"../ajax/login.php",
      data:parametros,
      method:"POST",
      dataType:"json",
      success:function(res){
        console.log(res);
        if(res.estatus == 1){
          window.location.href ="buynow.html";
        }else{
          alert("Datos Erroneos");
        }
      },
      error:function(error){
        console.error(error);
      }
  });
});

$(document).ready(function(){
  desplegarPaises();

});

var paises = [{pais:"Afghanistan"},{pais:"Albania"},{pais:"Argentina"},{pais:"Australia"},
{pais:"Austria"},{pais:"Barbados"},{pais:"Belgium"},{pais:"Belice"},{pais:"Bolivia"},{pais:"Brazil"},
{pais:"Bulgaria"},{pais:"Cameroon"},{pais:"Canada"},{pais:"Chile"},{pais:"China"},{pais:"Colombia"},
{pais:"Costa Rica"},{pais:"Croatia"},{pais:"Denmark"},{pais:"Dominican Republic"},{pais:"Ecuador"},
{pais:"Egypt"},{pais:"El Salvador"},{pais:"Finland"},{pais:"France"},{pais:"Germany"},{pais:"Greece"},
{pais:"Guatemala"},{pais:"Honduras"},{pais:"Hong Kong"},{pais:"Hungary"},{pais:"Iceland"},{pais:"Israel"},
{pais:"Italy"},{pais:"Jamaica"},{pais:"Japan"},{pais:"Korea, Republic of"},{pais:"United States"},];

function desplegarPaises(){
  $('#pais').empty();
  for(var i=0;i<paises.length;i++){
    $('#pais').append(`<option value="${i+1}">${paises[i].pais}</option>`);
  }
}