$(document).ready(function(){
    menu();
    desplegarLista1();
    listarProductos();
    guardar();
});


var departamentos=[    
    {area:'Music, CDs and Vinyl'},{area:'Kindle Store' },{area:'Arts and Crafts' },{area:'Automotive' },{area:'Baby' },
    {area:'Beauty and Personal Care' },{area:'Book' },{area:'Computers' },{area:'Electronics' },{area:"Women's Fashion" },{area:"Men's Fashion" },{area:'Health and Household' },
    {area:'Home and kitchen' },{area:'Industrys and Scientific' },{area:'Luggage' },{area:'Movies and Televisor' },{area:'Pet Supplies' },{area:'Software' },{area:'Sports and Outdoors' },
    {area:'Tools and Home Improvement' },{area:'Toys and Games' },{area:'Video Games' },{area:'Deals' },
];

var lista1=[
  {opcion:'Sing In',url:'../formularios/login.html'},{opcion:'Your Lists', url:'listas.html'},{opcion:'Create a List', url:'#'},{opcion:'Find a List or Registry', url:'#'},{opcion:'Find a Gift', url:'#'},{opcion:'Save Items from the Web', url:'#'},{opcion:'Wedding Registry', url:'#'},{opcion:'Baby Registry', url:'#'},
  {opcion:'Friends & Family Gifting', url:'#'},{opcion:'AmazonSmile Charity Lists', url:'#'},{opcion:'Pantry Lists', url:'#'},{opcion:'Your Hearts', url:'#'},
  {opcion:'Explore Idea Lists', url:'#'},{opcion:'Explore Showroom', url:'#'},{opcion:'Take the Home Style ', url:'#'},
];



function menu(){
    $('#menu').empty();
    for(var i=0; i<departamentos.length; i++){
       $('#menu').append(`
       <a class="dropdown-item" href="../menu/${departamentos[i].area}/${departamentos[i].area}.html">
         ${departamentos[i].area}
       </a><br>
        `);
    }
}

function desplegarLista1(){
  $('#lista').empty();
  for(var i=0; i<lista1.length; i++){
     $('#lista').append(`<a class="dropdown-item" href="${lista1[i].url}">
     ${lista1[i].opcion}
   </a><br>`);
  }
  $('#lista').append(`<a class="dropdown-item" href="ajax/cerrar-sesion.php">Sign Out</a><br>`);
}

function desplegaridiomas(){
    $('#idioma').empty();
    for(var i=0; i<idiomas.length; i++){
       $('#idioma').append(`<option value=${i}>
       <label>${idiomas[i].idioma}<input type="radio" value=${idiomas[i].idioma}>
       </label>
       </option>` );
    }
}


function listarProductos(){
  $.ajax({
		url:"../ajax/carrito.php?accion=listar",
		dataType:"json",
		success:function(res){
      console.log(res);
			for(var i=0;i<res.length;i++){
				$("#productoCarrito").append(`<div class="card mb-3 producto-carrito">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${res[i].imagen}" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body" style="width: 190px;">
                    <a href="#" class="card-title">${res[i].nombreProducto}</a>
                  </div>
              </div>
              <p class="precio2">${res[i].precio}</p> 
                     <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle cantidad" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">1</button>
                          <button class="dropdown-item" type="button">2</button>
                          <button class="dropdown-item" type="button">3</button>
                          <button class="dropdown-item" type="button">4</button>
                          <button class="dropdown-item" type="button">5</button>
                          <button class="dropdown-item" type="button">6</button>
                          <button class="dropdown-item" type="button">7</button>
                          <button class="dropdown-item" type="button">8</button>
                        </div>
                      </div>

                  </div>   
              </div> 
        `);
      }
      $("#cantidad-productos").append(`${res.length}`);
		},
		error:function(error){
			console.error(error);
		}
	});
}




function guardar(){
	$('#btn-agregar-carrito').click(function(){
    console.log('Ejecutar peticion asincrona');
		var parametros = 'nombreProducto='+document.getElementById("nombreProducto").innerText + "&"+'precio='+document.getElementById("precio").innerText+"&"+'imagen='+document.getElementById("imagen").getAttribute("src");
		console.log("Esto se enviará al servidor: "+parametros);
	
		$.ajax({
				url:"../ajax/carrito.php?accion=agregar",
				method:"POST",
				data:parametros, 
				dataType: 'json', 
				success:function(respuesta){
            console.log(respuesta);
            if(respuesta=='ok'){
						$("#agregado").append(`<div class="card mb-3 producto-carrito">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${document.getElementById("imagen").getAttribute}" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body" style="width: 190px;">
                  <a href="#" class="card-title">${document.getElementById("nombreProducto").innerText}</a>
                </div>
            </div>
            <p class="precio">${document.getElementById("precio").innerText}</p> 
                   <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle cantidad" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <button class="dropdown-item" type="button">1</button>
                        <button class="dropdown-item" type="button">2</button>
                        <button class="dropdown-item" type="button">3</button>
                        <button class="dropdown-item" type="button">4</button>
                        <button class="dropdown-item" type="button">5</button>
                        <button class="dropdown-item" type="button">6</button>
                        <button class="dropdown-item" type="button">7</button>
                        <button class="dropdown-item" type="button">8</button>
                      </div>
                    </div>

                </div>   
            </div> 
						`);
						 
				}},
				error:function(error){
						console.error(error);
				}
		});	
	});
}
