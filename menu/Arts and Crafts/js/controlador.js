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
  


var productos=[{titulo:'Iggy Peck, Architec', imagen:'img7/4.jpg', precio:'15.50'  },{titulo:'School Zone - Preschool Basics Workbook, 64 Pages, Ages 3 to 5, Colors, Numbers, Counting, Matching, Classifying, Beginning Sounds, and More (School Zone Basics Workbook Series', imagen:'img7/5.jpg', precio:'15.50'  },
{titulo:'Origami Paper 500 sheets Kaleidoscope Patterns 6" (15 cm): Tuttle Origami Paper: High-Quality Origami Sheets Printed with 12 Different Designs: Instructions for 8 Projects Included', imagen:'img7/6.jpg', precio:'15.50'  },{titulo:'Rock Art Handbook: Techniques and Projects for Painting, Coloring, and Transforming Stones (Fox Chapel Publishing) Over 30 Step-by-Step Tutorials using Paints, Chalk, Art Pens, Glitter Glue & More', imagen:'img7/7.jpg', precio:'15.50'  },
{titulo:'Vogue® Knitting The Ultimate Knitting Book: Completely Revised & Updated', imagen:'img7/8.jpg', precio:'15.50'  },{titulo:"Carol Doak's Foundation Paper", imagen:'img7/9.jpg', precio:'15.50'  },
{titulo:'My First Origami Kit: [Origami Kit with Book, 60 Papers, 150 Stickers, 20 Projects]', imagen:'img7/10.jpg', precio:'15.50'  },{titulo:'Sewing School ®: 21 Sewing Projects Kids Will Love to Make', imagen:'img7/11.jpg', precio:'15.50'  },
{titulo:'Moda All-Stars - On a Roll: 14 Quilts That Start with 2 1/2" Strips', imagen:'img7/12.jpg', precio:'15.50'  },{titulo:'', imagen:'img7/13.jpg', precio:'15.50'  },
{titulo:'Friendship Bracelets 101: Fun to Make, Fun to Wear, Fun to Share (Can Do Crafts) (Design Originals) Step-by-Step Instructions; Colorful Knotted Bracelets Made with Embroidery Floss for Kids & Teens', imagen:'img7/14.jpg', precio:'15.50'  },{titulo:'Bob Ross Bobblehead: With Sound! (Miniature Editions)', imagen:'img7/15.jpg', precio:'15.50'  },
{titulo:'Mandalas II Adult Coloring Book - Features 50 Original Hand Drawn Designs Printed on Artist Quality Paper with Hardback Covers, Top Spiral Binding, Perforated Pages, and Bonus Blotter by ColorIt', imagen:'img7/16.jpg', precio:'15.50'  }
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






       