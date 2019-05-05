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
        switch (res[i].tipo){
        case 'WishList':  
				$("#WishList").append(`<div class="card mb-3 producto-lista" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${res[i].imagen}" class="card-img" style="width: inherit;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">${res[i].nombreProducto}</p>
            </div>
          </div>
        </div>
      </div>
        `);
        break;
       case 'ShoppingList':
        $("#ShoppingList").append(`<div class="card mb-3 producto-lista" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${res[i].imagen}" class="card-img"  style="width: inherit;" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">${res[i].nombreProducto}.</p>
            </div>
          </div>
        </div>
      </div>`);
      break; 
    }
   }
  },
		error:function(error){
			console.error(error);
		}
	});
}




function guardarWishList(){
	$('#agregar-wish-list').click(function(){
    console.log('Ejecutar peticion asincrona');
		var parametros = 'nombreProducto='+document.getElementById("nombreProducto").innerText +"&"+'imagen='+document.getElementById("imagen").getAttribute("src")+"&"+'tipo='+'WishList';
		console.log("Esto se enviará al servidor: "+parametros);
	
		$.ajax({
				url:"../ajax/lista.php?accion=agregar",
				method:"POST",
				data:parametros, 
				dataType: 'json', 
				success:function(respuesta){
            console.log(respuesta);
              if(respuesta=='ok'){
              $("#nuevoProducto").append(`<div class="card mb-3 producto-lista" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${document.getElementById("imagen").getAttribute("src")}" class="card-img" alt="..." style="width: inherit;">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text">${document.getElementById("nombreProducto").innerText}.</p>
                  </div>
                </div>
              </div>
            </div>`);
      }},
				error:function(error){
						console.error(error);
				}
		});	
	});
}
function guardarShoppingList(){
	$('#agregar-shopping-list').click(function(){
    console.log('Ejecutar peticion asincrona');
		var parametros = 'nombreProducto='+document.getElementById("nombreProducto").innerText + "&"+'imagen='+document.getElementById("imagen").getAttribute("src")+"&"+'tipo='+'ShoppingList';
		console.log("Esto se enviará al servidor: "+parametros);
	
		$.ajax({
				url:"../ajax/lista.php?accion=agregar",
				method:"POST",
				data:parametros, 
				dataType: 'json', 
				success:function(respuesta){
            console.log(respuesta);
          if(respuesta=='ok'){  
          $("#nuevoProducto2").append(`<div class="card mb-3 producto-lista" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${document.getElementById("imagen").getAttribute("src")}" class="card-img" alt="..." style="width: inherit;">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text">${document.getElementById("nombreProducto").innerText}.</p>
                  </div>
                </div>
              </div>
            </div>`);
      }},
				error:function(error){
						console.error(error);
				}
		});	
	});
}
