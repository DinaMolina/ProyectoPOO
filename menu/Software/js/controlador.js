$(document).ready(function(){
    menu();
    desplegarLista1();

});


var departamentos=[    
    {area:'Music, CDs and Vinyl'},{area:'Kindle Store' },{area:'Arts and Crafts' },{area:'Automotive' },{area:'Baby' },
    {area:'Beauty and Personal Care' },{area:'Book' },{area:'Computers' },{area:'Electronics' },{area:"Women's Fashion" },{area:"Men's Fashion" },{area:'Health and Household' },
    {area:'Home and kitchen' },{area:'Industrys and Scientific' },{area:'Luggage' },{area:'Movies and Televisor' },{area:'Pet Supplies' },{area:'Software' },{area:'Sports and Outdoors' },
    {area:'Tools and Home Improvement' },{area:'Toys and Games' },{area:'Video Games' },{area:'Deals' },
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

