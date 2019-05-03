$('#btn-guardar').click(function(){
  console.log('Ejecutar peticion asincrona');
  var parametros = 
        'nombre='+$("#nombre").val()+"&"+
        'correo='+$("#correo").val()+"&"+
        'contraseña='+$("#contraseña").val()+"&"+
        'Recontraseña='+$("#Recontraseña").val();

    console.log("Esto se enviará al servidor: "+parametros);

    $.ajax({
      url:"../ajax/usuario.php?accion=guardar",
      method:"POST",
      data:parametros,
      dataType:"json",
      success:function(datos){
        console.log(datos);
      }
    });
});