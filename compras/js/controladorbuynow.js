var valorFechaEntrega;
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

function desplegarInputTarjeta(){
  $("#agregartarjeta").empty();
  $("#agregartarjeta").append(`
      <a onclick="javascript:ocultarInputTarjeta();"class="anchor-label"><i class="fas fa-sort-down"></i>&nbsp;&nbsp;Add a Card</a>
      <div style="padding:3px 3px 3px 15px;">
          <div class="spacing-small">Enter your card information:</div>
          <div class="row spacing-base">
              <div class="field spacing-left">
                      <label for="nameCard"><b>Name on Card</b></label><br>
                      <input id="nombreTarjeta" type="text" name="nameCard">
              </div>
              <div class="field spacing-left">
                      <label for="Cardnumber"><b>Card number</b></label><br>
                      <input id="numeroTarjeta" type="text" name="Cardnumber">
              </div>
              <div class="field spacing-left">
                      <label class="text-exp-date"><b>Expiration date</b></label><br>
                      <select class="expiration-date" name="month" id="mes">
                                  <option value="1">1</option><option value="2">2</option><option value="3">3</option>
                                  <option value="4">4</option><option value="5">5</option><option value="6">6</option>
                                  <option value="7">7</option><option value="8">8</option><option value="9">9</option>
                                  <option value="10">10</option><option value="11">11</option><option value="12">12</option>
                      </select>
                      <select class="expiration-date" name="year" id="anio">
                      <option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option>
                      <option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option>
                      <option value="2025">2025</option><option value="2026">2026</option><option value="2027">2027</option>
                      <option value="2028">2028</option><option value="2029">2029</option><option value="2030">2030</option>
                      </select>
              </div>
              <div class="field-button">
                      <button onclick="javascript:agregarTarjeta();" type="button">Add your card</button>
              </div>
          </div>
      </div> 
  `);
}
function ocultarInputTarjeta(){
    $("#agregartarjeta").empty();
    $("#agregartarjeta").append(`
      <a onclick="javascript:desplegarInputTarjeta();"class="anchor-label"><i class="fas fa-caret-right"></i>&nbsp;&nbsp;Add a Card</a>
    `);
}

/*function comprobaropcionEntrega(){
  if(document.getElementById("fecha1").checked){
    valorFechaEntrega=document.getElementById("fecha1");
  }
}*/
function agregarTarjeta(){
  var boton = document.getElementById("btn-guardar");
  if($("#nombreTarjeta").val()!="" && $("#numeroTarjeta").val()!="" /*&& $("mes").val()!="" && $("#anio").val()!=""*/){
    boton.disabled = true;
  }
  boton.disabled = false;
}

$("#btn-guardar").click(function(){
  if(document.getElementById("fecha1").checked){
    valorFechaEntrega=document.getElementById("fecha1").value;
  }
  if(document.getElementById("fecha2").checked){
    valorFechaEntrega=document.getElementById("fecha2").value;
  }
  if(document.getElementById("fecha3").checked){
    valorFechaEntrega=document.getElementById("fecha3").value;
  }

  if($("#nombre").val()!="" && $("#direccion").val()!="" && $("#ciudad").val()!="" && $("#region").val()!=""
  && $("#codigoPostal").val()!="" && $("#pais").val()!="" && $("#telefono").val()!="" && $("#nombreTarjeta").val()!="" 
  && $("#numeroTarjeta").val()!="" && $("mes").val()!="" && $("#anio").val()!=""){
    var parametros = "nombreCompleto="+$("#nombre").val()+"&direccionEnvio="+$("#direccion").val()
    +"&ciudad="+$("#ciudad").val()+"&region="+$("#region").val()+"&codigoPostal="+$("#codigoPostal").val()
    +"&pais="+$("#pais").val()+"&telefono="+$("#telefono").val()+"&fechaEntrega="+valorFechaEntrega
    +"&nombreTarjeta="+$("#nombreTarjeta").val()+"&numeroTarjeta="+$("#numeroTarjeta").val()
    +"&fechaVencimiento="+$("#mes").val()+"-"+$("#anio").val();
    console.log(parametros);
    $.ajax({
      url:"../ajax/envio.php?accion=guardar",
      data:parametros,
      method:"POST",
      dataType:"json",
      success:function(respuesta){
        console.log(respuesta);
      },
      error:function(error){
        console.error(error);
      }
    });
  }else{
    alert("Please complete information in all fields");
  }
});

$(document).ready(function(){
  desplegarPaises();
  ocultarInputTarjeta();
});

var paises = [{pais:"Afghanistan"},{pais:"Albania"},{pais:"Argentina"},{pais:"Australia"},
{pais:"Austria"},{pais:"Barbados"},{pais:"Belgium"},{pais:"Belice"},{pais:"Bolivia"},{pais:"Brazil"},
{pais:"Bulgaria"},{pais:"Cameroon"},{pais:"Canada"},{pais:"Chile"},{pais:"China"},{pais:"Colombia"},
{pais:"Costa Rica"},{pais:"Croatia"},{pais:"Denmark"},{pais:"Dominican Republic"},{pais:"Ecuador"},
{pais:"Egypt"},{pais:"El Salvador"},{pais:"Finland"},{pais:"France"},{pais:"Germany"},{pais:"Greece"},
{pais:"Guatemala"},{pais:"Honduras"},{pais:"Hong Kong"},{pais:"Hungary"},{pais:"Iceland"},{pais:"Israel"},
{pais:"Italy"},{pais:"Jamaica"},{pais:"Japan"},{pais:"Korea, Republic of"},{pais:"Lesotho"},{pais:"Liberia"},
{pais:"Mexico"},{pais:"Morocco"},{pais:"Netherlands"},{pais:"Nicaragua"},{pais:"Nigeria"},{pais:"Norway"},
{pais:"Oman"},{pais:"Paraguay"},{pais:"Panama"},{pais:"Peru"},{pais:"Poland"},{pais:"Portugal"},{pais:"Qatar"},
{pais:"Romania"},{pais:"Russian Federation"},{pais:"Saudi Arabia"},{pais:"Senegal"},{pais:"Serbia"},{pais:"Spain"},
{pais:"Sweden"},{pais:"Switzerland"},{pais:"Taiwan"},{pais:"Turkey"},{pais:"Ukraine"},{pais:"United Kingdom"},
{pais:"United States"},{pais:"Uruguay"},{pais:"Venezuela"},{pais:"Vietnam"},{pais:"Yemen"},{pais:"Zambia"},
{pais:"Zimbabwe"}];
/*var meses = [{mes:1},{mes:2},{mes:3},{mes:4},{mes:5},{mes:6},{mes:7},{mes:8},{mes:9},{mes:10},{mes:11},{mes:12}];
var anios = [{anio:2019},{anio:2020},{anio:2021},{anio:2022},{anio:2023},{anio:2024},{anio:2025},{anio:2026},
  {anio:2027},{anio:2028},{anio:2029},{anio:2030},{anio:2031},{anio:2032},{anio:2033},{anio:2034},{anio:2035},
  {anio:2036},{anio:2037},{anio:2038},{anio:2039}];*/


function desplegarPaises(){
  $('#pais').empty();
  for(var i=0;i<paises.length;i++){
    $('#pais').append(`<option value="${paises[i].pais}">${paises[i].pais}</option>`);
  }
}
/*function desplegarMeses(){
  $('#mes').empty();
  for(var i=0;i<meses.length;i++){
    $('#mes').append(`<option value="${i+1}">${meses[i].mes}</option>`);
  }
}
function desplegarAnios(){
  $('#anio').empty();
  for(var i=0;i<anios.length;i++){
    $('#anio').append(`<option value="${i+1}">${anios[i].anio}</option>`);
  }
}*/