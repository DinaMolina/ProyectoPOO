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
                {codigoProducto:66,departamento:"Computers",imagen:"img/1.jpg",producto:"Display Dongle Support Wireless and Wired 2 in 1 Display Receiver for TV/Projector 1080P HDMI Miracast Dongle",precio:28.99,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:67,departamento:"Computers",imagen:"img/2.jpg",producto:"Pantone: The Twentieth Century in Color",precio:16.98,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:68,departamento:"Computers",imagen:"img/3.jpg",producto:"The Ultimate Question 2.0 (Revised and Expanded Edition): How Net Promoter Companies Thrive in a Customer-Driven World",precio:26.05,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:69,departamento:"Computers",imagen:"img/4.jpg",producto:"iPad (9.7-Inch, 2018/2017 Model) Tempered Glass Screen Protector [2 Pack] Eyes Care Anti UV,Anti Blue Light Cut Premium",precio:18.88,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:70,departamento:"Computers",imagen:"img/5.jpg",producto:"Nub's Adventures: The Great Jailbreak - An Unofficial Roblox Book (Volume 1)",precio:9.10,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:70,departamento:"Computers",imagen:"img/6.jpg",producto:"Azzsy Galaxy Tab S4 Case,[360 Degree Swivel Stand/Hand Strap] Heavy Duty Shockproof Rugged Case High Impact Full Body ",precio:14.99,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:70,departamento:"Computers",imagen:"img/7.jpg",producto:"A Director Prepares",precio:30.46,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:70,departamento:"Computers",imagen:"img/8.jpg",producto:"USB Power Strip with Phone Holder , Surge Protector 4 Outlet and 4 USB Port Charger with Charging Station5ft",precio:19.99,descripcion:"Lorem ipsum dolor sit amet."},
                {codigoProducto:70,departamento:"Computers",imagen:"img/9.jpg",producto:"Empire: The Rise and Demise of the British World Order and the Lessons for Global Power",precio:11.07,descripcion:"Lorem ipsum dolor sit amet."}
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
            
            if(producto[i].departamento=="Computers"){
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
                `);

                }
            }
            
        
}