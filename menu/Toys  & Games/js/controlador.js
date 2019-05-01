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
    {area:'Departments',url:'#'},{area:'Prime Video',url:'#'},{area:'Music, CDs & Vinyl' ,url:'menu/music/index1.1.html'},{area:'Digital Musical' ,url:'#'},{area:'Kindle Store' ,url:'#'},{area:'Arts & Crafts' ,url:'#'},{area:'Automotive' ,url:'#'},{area:'Baby' ,url:'#'},
    {area:'Beauty & Personal Care' ,url:'#'},{area:'Book' ,url:'#'},{area:'Computers' ,url:'#'},{area:'Electronics' ,url:'#'},{area:"Women's Fashion" ,url:'#'},{area:"Men's Fashion" ,url:'#'},{area:'Health & Household' ,url:'#'},
    {area:'Home and kitchen' ,url:'#'},{area:'Industrys & Scientific' ,url:'#'},{area:'Luggage' ,url:'#'},{area:'Movies & Televisor' ,url:'#'},{area:'Pet Supplies' ,url:'#'},{area:'Software' ,url:'#'},{area:'Sports & Outdoors' ,url:'#'},
    {area:'Tools & Home Improvement' ,url:'#'},{area:'Toys & Games' ,url:'#'},{area:'Video Games' ,url:'#'},{area:'Deals' ,url:'#'},
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
       $('#menu').append(`<option value=${i}>
       <a class="btn btn-secondary dropdown-toggle" href="${departamentos[i].url}" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         ${departamentos[i].area}
       </a>
   </option>`);
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