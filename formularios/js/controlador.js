$('#btn-guardar').click(function(){
  console.log('Ejecutar peticion asincrona');  

      if($("#contrasena").val()==$("#recontrasena").val() && $("#correo").val()!="" && $("#nombre").val()!="" && $("#contrasena").val()!=""){
          
          var parametros = {
            'nombre':$("#nombre").val(),
            'correo':$("#correo").val(),
            "contrasena":$("#contrasena").val()
          };
          
          console.log("Esto se enviará al servidor:", parametros);

          $.ajax({
            url:"../ajax/usuario.php?accion=guardar",
            data:parametros,
            method:"POST",
            dataType:"json",
            success:function(datos){
              console.log(datos);
              window.location.href = "../index.html";
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
  var parametros = "correo="+$("#correo").val()+"&contrasena="+$("#contrasena").val();
  $.ajax({
      url:"../ajax/login.php",
      data:parametros,
      method:"POST",
      dataType:"json",
      success:function(respuesta){
          console.log(respuesta);
          if (respuesta.estatus == 1){
              window.location.href = "../index.html";   
          }else{
            alert("Datos Erroneos");
          }
      },
      error:function(error){
          console.error(error);
      }
  });
});