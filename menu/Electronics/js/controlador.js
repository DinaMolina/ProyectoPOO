$(document).ready(function(){
    llenarPostales();
    menu();
    desplegarLista1();
    desplegaridiomas();
    generarProductos();

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
    {opcion:'Sing In'},{opcion:'Your Lists'},{opcion:'Create a List'},{opcion:'Find a List or Registry'},{opcion:'Find a Gift'},{opcion:'Save Items from the Web'},{opcion:'Wedding Registry'},{opcion:'Baby Registry'},
    {opcion:'Friends & Family Gifting'},{opcion:'AmazonSmile Charity Lists'},{opcion:'Pantry Lists'},{opcion:'Your Hearts'},
    {opcion:'Explore Idea Lists'},{opcion:'Explore Showroom'},{opcion:'Take the Home Style '},
];

var idiomas=[
    {idioma:''},{idioma:'English'},{idioma:'Español'},{idioma:'Portugues'},{idioma:'简体中文'},{idioma:'Deutsch - DE'},{idioma:'繁體中文 - ZH'},
];
var producto=[
                {codigoProducto:66,departamento:"Electronics",imagen:"img/1.jpg",producto:"Merriam-Webster's Collegiate Dictionary",precio:13.89,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:67,departamento:"Electronics",imagen:"img/2.jpg",producto:"WIKIPro Lightning to Headphone Jack Adapter Dongle,Apple MFi Certified Earphone Converter for iPhone Xs/Max/XR/X/8/8Plus ",precio:16.98,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:68,departamento:"Electronics",imagen:"img/3.jpg",producto:"Earbuds, Microphone Earphones Stereo Headphones Noise Isolating Headset Compatible with iPhone Xs/XS Max/XR/X/8/8 Plus/7/7 ",precio:9.99,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:69,departamento:"Electronics",imagen:"img/4.jpg",producto:"Merriam-Webster's Pocket Dictionary",precio:5.49,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:70,departamento:"Electronics",imagen:"img/5.jpg",producto:"Empire of the Summer Moon: Quanah Parker and the Rise and Fall of the Comanches, the Most Powerful Indian Tribe in America",precio:12.24,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:70,departamento:"Electronics",imagen:"img/6.jpg",producto:"Strong's Concise Concordance And Vine's Concise Dictionary Of The Bible Two Bible Reference Classics In One Handy Volume",precio:15.00,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:70,departamento:"Electronics",imagen:"img/7.jpg",producto:"Open Veins of Latin America: Five Centuries of the Pillage of a Continent",precio:16.45,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:70,departamento:"Electronics",imagen:"img/8.jpg",producto:"Display Dongle Support Wireless and Wired 2 in 1 Display Receiver for TV/Projector 1080P HDMI ",precio:28.99,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:70,departamento:"Electronics",imagen:"img/9.jpg",producto:"The Standard Pilot Log (Navy Blue): ASA-SP-57 (Standard Pilot Logbooks)",precio:12.30,descripcion:"Lorem ipsum dolor sit amet."}
]
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
       <a class="dropdown-item" href="../${departamentos[i].area}/${departamentos[i].area}.html">
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
function generarProductos(){
    $('#productos').empty();
    console.log('GenerandoProductos');
   
        for(var i=0; i<producto.length; i++){
            
            if(producto[i].departamento=="Electronics"){
                console.log(producto[i].imagen)
                $("#productos").append(`
                <div class="td-productoitem col-xl-4 col-md-6 col-12">
                    <a href="#">
                        <div class="producto-imageitem" style="background-image: url(${producto[i].imagen});"></div>
                    </a>
                    <div class="productoContenido marginbottom">
                        <div class="producto-text">
                            <a class="anchor-label" href="#">${producto[i].producto}</a>
                            <p>${producto[i].descripcion}</p>
                            </div>
                        <div class="producto-price margin-item">
                            <p><span class="dolar">$</span><span class="number">${producto[i].precio}</span></p>
                        </div> 
                    </div>
                </div>
                `
                );

                }
            }
            
        
}