$(document).ready(function(){
    llenarPostales();
    menu();
    desplegarLista1();
    desplegaridiomas();

});

var postales= [
    {descripcion:'Shop your favorite brands', imagen:'img/zapatos.jpg', titulo:"Men's Dress Shoes"},
    {descripcion:'Find the perfect dress for any occasion', imagen:'img/vestidos.jpg', titulo:"Women's Dresses"},
    {descripcion:'Shop top products in Baby', imagen:'img/bebé.jpg', titulo:'Baby'}
];

var departamentos=[    
    {area:'Arts and Crafts' },{area:'Automotive' },{area:'Baby' },{area:'Beauty and Personal Care' },{area:'Computers' },{area:'Electronics' },
    {area:'Kindle Store' },{area:'Music, CDs and Vinyl'},{area:'Pet Supplies' },{area:'Software' },{area:'Toys and Games' },{area:'Video Games'},{area:'Deals' }
];

var lista1=[
    {opcion:'Sing In',url:'formularios/login.html'},{opcion:'Your Lists', url:'#'},{opcion:'Create a List', url:'#'},{opcion:'Find a List or Registry', url:'#'},{opcion:'Find a Gift', url:'#'},{opcion:'Save Items from the Web', url:'#'},{opcion:'Wedding Registry', url:'#'},{opcion:'Baby Registry', url:'#'},
    {opcion:'Friends & Family Gifting', url:'#'},{opcion:'AmazonSmile Charity Lists', url:'#'},{opcion:'Pantry Lists', url:'#'},{opcion:'Your Hearts', url:'#'},
    {opcion:'Explore Idea Lists', url:'#'},{opcion:'Explore Showroom', url:'#'},{opcion:'Take the Home Style ', url:'#'},
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
       <a class="dropdown-item" href="menu/${departamentos[i].area}/${departamentos[i].area}.html">
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