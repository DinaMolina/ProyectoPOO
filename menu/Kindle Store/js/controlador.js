$(document).ready(function(){
    menu();
    desplegarLista1();
    mostraritemCarrusel();
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
  

var bestSellers=[    
    {image:'img1/1.jpg',title:'Map Of The Soul: PERSONA'
     , autor:'BTS', material:'Audio CD', price:'$20.99' }, 
    {image:'img1/2.jpg',title:'The Crow Soundtrack Solid White and Black',   
     autor:'The Crow', material:'Vinyl', price:'$34.98' }, 
    {image:'img1/3.jpg',title:'A Star Is Born Soundtrack', autor:'Lady Gaga, Lady Gaga,bradley Cooper', material:' Audio CD', price:'$11.59' }, 
    {image:'img1/4.jpg',title:'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO? Pale...', autor:'Billie Eilish', material:'Vinyl', price:'$19.99' },  
    {image:'img1/5.jpg',title:'Amidst the Chaos', autor:'Sara Bareilles', material:'Audio CD', price:'$9.99' }
];    
var bestSellers2=[
    {image:'img1/6.jpg',title:'The Platinum Collection: Greatest Hits I, II & III', autor:'Queen', material:'Audio CD', price:'$17.09' }, 
    {image:'img1/7.jpg',title:'Look Up Child', autor:'Lauren Daigle', material:'Audio CD', price:'$11.22' }, 
    {image:'img1/8.jpg',title:'The Greatest Showman', autor:'Hugh Jackman', material:'Audio CD', price:'$11.96' }, 
    {image:'img1/9.jpg',title:'Honky Tonk Time Machine', autor:'George Strait', material:'Audio CD', price:'$13.98' }, 
    {image:'img1/10.jpg',title:'Bohemian Rhapsody', autor:'Queen', material:'Vinyl', price:'$27.97' }  
];

var bestSellers2=[
    {image:'img1/6.jpg',title:'The Platinum Collection: Greatest Hits I, II & III', autor:'Queen', material:'Audio CD', price:'$17.09' }, 
    {image:'img1/7.jpg',title:'Look Up Child', autor:'Lauren Daigle', material:'Audio CD', price:'$11.22' }, 
    {image:'img1/8.jpg',title:'The Greatest Showman', autor:'Hugh Jackman', material:'Audio CD', price:'$11.96' }, 
    {image:'img1/9.jpg',title:'Honky Tonk Time Machine', autor:'George Strait', material:'Audio CD', price:'$13.98' }, 
    {image:'img1/10.jpg',title:'Bohemian Rhapsody', autor:'Queen', material:'Vinyl', price:'$27.97' }  
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


function mostraritemCarrusel(){
    $('#carousel1').empty();
        for(var i=0; i<bestSellers.length; i++){
           $('#carousel1').append(`<div  class="col-xl-2" style="margin-right:30px;" >
                   <div class="card">
                      <img src="${bestSellers[i].image}" class="card-img-top" alt="${bestSellers[i].title}">
                   <div class="card-body" style="width: 200px; padding:0px;">
                      <a href="#">${bestSellers2[i].title}</a><br>
                      <p class="card-text">${bestSellers[i].autor}</p>
                      <p class="card-text">${bestSellers[i].material}</p> 
                      <p class="card-text">${bestSellers[i].price}</p>  
                   </div>
                </div>
            </div>`);
        }
}



       