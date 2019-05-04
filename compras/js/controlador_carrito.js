$(document).ready(function(){
    llenarPostales();
    menu();
    desplegarLista1();
    desplegaridiomas();
    listarProductos();
    guardar();
});

var postales= [
    {descripcion:'Shop your favorite brands', imagen:'img/zapatos.jpg', titulo:"Men's Dress Shoes"},
    {descripcion:'Find the perfect dress for any occasion', imagen:'img/vestidos.jpg', titulo:"Women's Dresses"},
    {descripcion:'Shop top products in Baby', imagen:'img/bebé.jpg', titulo:'Baby'}
];

var departamentos=[    
    {area:'Music, CDs & Vinyl'},{area:'Kindle Store' },{area:'Arts & Crafts' },{area:'Automotive' },{area:'Baby' },
    {area:'Beauty & Personal Care' },{area:'Book' },{area:'Computers' },{area:'Electronics' },{area:"Women's Fashion" },{area:"Men's Fashion" },{area:'Health & Household' },
    {area:'Home and kitchen' },{area:'Industrys & Scientific' },{area:'Luggage' },{area:'Movies & Televisor' },{area:'Pet Supplies' },{area:'Software' },{area:'Sports & Outdoors' },
    {area:'Tools & Home Improvement' },{area:'Toys & Games' },{area:'Video Games' },{area:'Deals' },
];

var lista1=[
    {opcion:'Sing In'},{opcion:'Your Lists'},{opcion:'Create a List'},{opcion:'Find a List or Registry'},{opcion:'Find a Gift'},{opcion:'Save Items from the Web'},{opcion:'Wedding Registry'},{opcion:'Baby Registry'},
    {opcion:'Friends & Family Gifting'},{opcion:'AmazonSmile Charity Lists'},{opcion:'Pantry Lists'},{opcion:'Your Hearts'},
    {opcion:'Explore Idea Lists'},{opcion:'Explore Showroom'},{opcion:'Take the Home Style '},
];

var idiomas=[
    {idioma:''},{idioma:'English'},{idioma:'Español'},{idioma:'Portugues'},{idioma:'简体中文'},{idioma:'Deutsch - DE'},{idioma:'繁體中文 - ZH'},
];

function llenarPostales(){
    $('#cards').empty();
    for(var i=0; i<postales.length; i++){
       $('#cards').append(`<div class="card postal">
                <h4 class="titulos">${postales[i].titulo}</h4>
               <img src="${postales[i].imagen}" class="card-img-top" alt="Shoes">
                <span style="background-color:white;"><div class="card-body">
                  <p class="card-text shop">${postales[i].descripcion}</p>
                  <a href="anchors.html" class="shop">Shop now</a><span>
                </div>
           </div>`);
    }
    $('#cards').append(`<div class="card" style="width: 18rem; margin-top: -232px;">
    <div class="card-body">
      <h4 class="card-title titulos" >Sign in for the best experience</h4>
      <button type="button" class="sign">Sign in Securely</button>
    </div>
  </div>
    `);
}
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
       $('#lista').append(`<option value=${i}>
       <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         ${lista1[i].opcion}
         
       </a>
   </option>`);
    }
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
      cant=1;
			for(var i=0;i<res.length;i++){
				$("#productoCarrito").append(`<div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${res[i].imagen}" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body" style="width: 190px;">
                    <a href="#" class="card-title">${res[i].nombreProducto}</a>
                  </div>
              </div>
              <p class="precio">${res[i].precio}</p> 
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
		},
		error:function(error){
			console.error(error);
		}
	});
}




function guardar(){
	$('#btn-agregar-carrito').click(function(){
    console.log('Ejecutar peticion asincrona');
		var parametros = 'nombreProducto='+document.getElementById("nombreProducto").innerText + "&"+'precio='+document.getElementById("precio").innerText+"&"+'imagen='+document.getElementById("imagen").getAttribute("src")
		console.log("Esto se enviará al servidor: "+parametros);
	
		$.ajax({
				url:"../ajax/carrito.php?accion=guardar",
				method:"POST",
				data:parametros, 
				dataType: 'json', 
				success:function(respuesta){
						console.log(respuesta);
						$("#agregado").append(`<div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${respuesta[i].imagen}" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body" style="width: 190px;">
                  <a href="#" class="card-title">${respuesta[i].nombreProducto}</a>
                </div>
            </div>
            <p class="precio">${respuesta[i].precio}</p> 
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
						 
				},
				error:function(error){
						console.error(error);
				}
		});	
	});
}
