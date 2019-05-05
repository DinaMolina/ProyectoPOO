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

$("#btn-guardar").click(function(){
  
});

$(document).ready(function(){
  desplegarPaises();
  desplegarMeses();
  desplegarAnios();
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
var meses = [{mes:1},{mes:2},{mes:3},{mes:4},{mes:5},{mes:6},{mes:7},{mes:8},{mes:9},{mes:10},{mes:11},{mes:12}];
var anios = [{anio:2019},{anio:2020},{anio:2021},{anio:2022},{anio:2023},{anio:2024},{anio:2025},{anio:2026},
  {anio:2027},{anio:2028},{anio:2029},{anio:2030},{anio:2031},{anio:2032},{anio:2033},{anio:2034},{anio:2035},
  {anio:2036},{anio:2037},{anio:2038},{anio:2039}];


function desplegarPaises(){
  $('#pais').empty();
  for(var i=0;i<paises.length;i++){
    $('#pais').append(`<option value="${i+1}">${paises[i].pais}</option>`);
  }
}
function desplegarMeses(){
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
}