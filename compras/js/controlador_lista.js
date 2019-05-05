$(document).ready(function(){
    mostrarProductos();
    guardarWishList();
    guardarShoppingList();
});



function mostrarProductos(){
  $.ajax({
		url:"../ajax/lista.php?accion=listar",
		dataType:"json",
		success:function(res){
      console.log(res);
			for(var i=0;i<res.length;i++){
        if(res.tipo[i]=='WishList'){
				$("#WishList").append(`<div class="card mb-3 producto-lista" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${res[i].imagen}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">${res[i].nombreProducto}</p>
            </div>
          </div>
        </div>
      </div>
        `);
      } else{
        $("#ShopingList").append(`<div class="card mb-3 producto-lista" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${res[i].imagen}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">${res[i].nombreProducto}.</p>
            </div>
          </div>
        </div>
      </div>`);
      }
    }
		},
		error:function(error){
			console.error(error);
		}
	});
}




function guardarWishList(){
	$('#agregar-wish-lista').click(function(){
    console.log('Ejecutar peticion asincrona');
		var parametros = 'nombreProducto='+document.getElementById("nombreProducto").innerText + "&"+'precio='+document.getElementById("precio").innerText+"&"+'imagen='+document.getElementById("imagen").getAttribute("src")+"&"+'tipo='+'WishList';
		console.log("Esto se enviará al servidor: "+parametros);
	
		$.ajax({
				url:"../ajax/lista.php?accion=agregar",
				method:"POST",
				data:parametros, 
				dataType: 'json', 
				success:function(respuesta){
            console.log(respuesta);
              $("#nuevoProducto").append(`<div class="card mb-3 producto-lista" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${document.getElementById("imagen").getAttribute("src")}" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text">${document.getElementById("nombreProducto").innerText}.</p>
                  </div>
                </div>
              </div>
            </div>`);
      },
				error:function(error){
						console.error(error);
				}
		});	
	});
}
function guardarShoppingList(){
	$('#agregar-wish-lista').click(function(){
    console.log('Ejecutar peticion asincrona');
		var parametros = 'nombreProducto='+document.getElementById("nombreProducto").innerText + "&"+'precio='+document.getElementById("precio").innerText+"&"+'imagen='+document.getElementById("imagen").getAttribute("src")+"&"+'tipo='+'WishList';
		console.log("Esto se enviará al servidor: "+parametros);
	
		$.ajax({
				url:"../ajax/lista.php?accion=agregar",
				method:"POST",
				data:parametros, 
				dataType: 'json', 
				success:function(respuesta){
            console.log(respuesta);
          $("#nuevoProducto2").append(`<div class="card mb-3 producto-lista" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${document.getElementById("imagen").getAttribute("src")}" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text">${document.getElementById("nombreProducto").innerText}.</p>
                  </div>
                </div>
              </div>
            </div>`);
      },
				error:function(error){
						console.error(error);
				}
		});	
	});
}
