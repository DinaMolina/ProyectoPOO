$(document).ready(function(){
    mostrarInformacionUsuario();
    mostrarInformacionProducto();
});
/*Place Order*/
$("#btn-placeOrder").click(function(){
    document.getElementById("condiciones").style.display="none";
    document.getElementById("div-exito").style.display="block";
    alert("Successful Purchase");
  });
function mostrarInformacionUsuario(){
    $.ajax({
      url:"../ajax/envio.php?accion=listar",
      dataType:'json',
      success:function(respuesta){
        console.log(respuesta);
        document.getElementById("valorEntrega").innerText=respuesta[respuesta.length-1].fechaEntrega
            $("#informacionUsuario").append(`
              <div class="col-lg-4 col-4 spacing-base">
                  <strong>Shipping Address</strong>
                  <li>${respuesta[respuesta.length-1].nombreCompleto}</li>
                  <li>${respuesta[respuesta.length-1].direccionEnvio}</li>
                  <li>${respuesta[respuesta.length-1].ciudad}, ${respuesta[respuesta.length-1].region} ${respuesta[respuesta.length-1].codigoPostal}</li>
                  <li>${respuesta[respuesta.length-1].pais}</li>
                  <li>Phone: ${respuesta[respuesta.length-1].telefono}</li>
              </div>
              <div class="col-lg-4 col-4 spacing-base" style="margin-left:2.5rem;">
                      <strong>Payment Method</strong>
                      <li><img src="../img/visa.gif">&nbsp; ${respuesta[respuesta.length-1].numeroTarjeta}</li><br>
                      <strong>Billing address</strong>
                      <li>Same as Shipping Address</li>
              </div>
            `);
      },
      error:function(error){
        console.error(error);
      }
    });
}
function mostrarInformacionProducto(){
    $.ajax({
      url:"../ajax/carrito.php?accion=listar",
      dataType:'json',
      success:function(res){
        console.log(res);
        if(res.length>1){
          document.getElementById("div-exito").innerText="Successfully Purchased Products"
        }
        document.getElementById("div-exito").innerText="Successfully Purchased Product"
        for(var i=0;i<res.length;i++){
            $("#informacionProducto").append(`
                <div class="row">
                    <div class="col-lg-4 spacing-large">
                        <img src="${res[i].imagen}" class="card-img" alt="imagen">
                    </div>
                    <div class="col-lg-6">
                        <div style="line-height:10px;width: 190px;">
                            <h3>${res[i].nombreProducto}</h3>
                            <p style="color:#C22704;">${res[i].precio}</p>
                            <p style="color:#529900;">In Stock.</p>
                            <p><b>Quantity:</b><span>&nbsp;1</span></p>
                        </div>
                    </div>
                </div>
            `);
        }
        $("#informacionProducto").append(`<div><p><b>Total Quantity:</b><span>&nbsp;${res.length}</span></p></div>`);
      },
      error:function(error){
        console.error(error);
      }
    });
}
  
  