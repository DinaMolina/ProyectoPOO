$('#btn-guardar').click(function(){
        
      if($("#contrasena").val()==$("#recontrasena").val() && $("#correo").val()!="" && $("#nombre").val()!="" && $("#contrasena").val()!=""){
          
          var parametros = {
            'nombre':$("#nombre").val(),
            'correo':$("#correo").val(),
            "contrasena":$("#contrasena").val()
          };
          
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

$("#btn-login").click(function(){
    var parametros = {
      'correo':$("#correo").val(),
      'contrasena':$("#contrasena").val()
    };
    console.log(parametros);
    $.ajax({
        url:"../ajax/usuario.php?accion=verificar",
        data:parametros,
        method:"POST",
        dataType:"json",
        success:function(res){
          window.location.href = "../index.html";
        }
    });
});