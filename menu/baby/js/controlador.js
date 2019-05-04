$(document).ready(function(){
    menu();
    desplegarLista1();
    desplegaridiomas();
});

var departamentos=[    
    {area:'Music, CDs and Vinyl'},{area:'Kindle Store'},{area:'Arts and Crafts'},{area:'Automotive'},{area:'Baby'},
    {area:'Beauty and Personal Care'},{area:'Book'},{area:'Computers'},{area:'Electronics'},{area:"Women's Fashion"},{area:"Men's Fashion"},{area:'Health and Household'},
    {area:'Home and kitchen'},{area:'Industrys and Scientific'},{area:'Luggage'},{area:'Movies and Televisor'},{area:'Pet Supplies'},{area:'Software'},{area:'Sports and Outdoors'},
    {area:'Tools and Home Improvement'},{area:'Toys and Games'},{area:'Video Games'},{area:'Deals'},
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
       $('#lista').append(`<a class="dropdown-item" href="#">
       ${lista1[i].opcion}
     </a><br>`);
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




       