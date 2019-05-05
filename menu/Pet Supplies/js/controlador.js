$(document).ready(function(){
    menu();
    desplegarLista1();

});


var departamentos=[    
  {area:'Arts and Crafts' },{area:'Automotive' },{area:'Baby' },{area:'Beauty and Personal Care' },{area:'Computers' },{area:'Electronics' },
  {area:'Kindle Store' },{area:'Music, CDs and Vinyl'},{area:'Pet Supplies' },{area:'Software' },{area:'Toys and Games' },{area:'Video Games'},{area:'Deals' }
];

var lista1=[
  {opcion:'Sing In',url:'.../formularios/login.html'},{opcion:'Your Lists', url:'#'},{opcion:'Create a List', url:'#'},{opcion:'Find a List or Registry', url:'#'},{opcion:'Find a Gift', url:'#'},{opcion:'Save Items from the Web', url:'#'},{opcion:'Wedding Registry', url:'#'},{opcion:'Baby Registry', url:'#'},
  {opcion:'Friends & Family Gifting', url:'#'},{opcion:'AmazonSmile Charity Lists', url:'#'},{opcion:'Pantry Lists', url:'#'},{opcion:'Your Hearts', url:'#'},
  {opcion:'Explore Idea Lists', url:'#'},{opcion:'Explore Showroom', url:'#'},{opcion:'Take the Home Style ', url:'#'},
];

function menu(){
    $('#menu').empty();
    for(var i=0; i<departamentos.length; i++){
       $('#menu').append(`
       <a class="dropdown-item" href="../${departamentos[i].area}/${departamentos[i].area}.html">
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

