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