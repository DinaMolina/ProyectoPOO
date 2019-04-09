$(document).ready(function(){
    menu();
    desplegarLista1();
    desplegaridiomas();

});

var departamentos=[    
    {area:'Departments'},{area:'Prime Video'},{area:'Music, CDs & Vinyl'},{area:'Digital Musical'},{area:'Kindle Store'},{area:'Arts & Crafts'},{area:'Automotive'},{area:'Baby'},
    {area:'Beauty & Personal Care'},{area:'Book'},{area:'Computers'},{area:'Electronics'},{area:"Women's Fashion"},{area:"Men's Fashion"},{area:'Health & Household'},
    {area:'Home and kitchen'},{area:'Industrys & Scientific'},{area:'Luggage'},{area:'Movies & Televisor'},{area:'Pet Supplies'},{area:'Software'},{area:'Sports & Outdoors'},
    {area:'Tools & Home Improvement'},{area:'Toys & Games'},{area:'Video Games'},{area:'Deals'},
];

var lista1=[
    {opcion:''},{opcion:'Your Lists'},{opcion:'Create a List'},{opcion:'Find a List or Registry'},{opcion:'Find a Gift'},{opcion:'Save Items from the Web'},{opcion:'Wedding Registry'},{opcion:'Baby Registry'},
    {opcion:'Friends & Family Gifting'},{opcion:'AmazonSmile Charity Lists'},{opcion:'Pantry Lists'},{opcion:'Your Hearts'},
    {opcion:'Explore Idea Lists'},{opcion:'Explore Showroom'},{opcion:'Take the Home Style '},
];

var idiomas=[
    {idioma:''},{idioma:'English'},{idioma:'Español'},{idioma:'Portugues'},{idioma:'简体中文'},{idioma:'Deutsch - DE'},{idioma:'繁體中文 - ZH'},
];

function menu(){
    $('#menu').empty();
    for(var i=0; i<departamentos.length; i++){
       $('#menu').append(`<option value=${i}>
       <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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