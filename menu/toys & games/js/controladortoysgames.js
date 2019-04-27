$(document).ready(function(){
    generarListaPrincipalBuyItems();
});

var buyitems=[
    {categoria:"Toys&Games",subcategoria:"Principal",caratula:"img/Dogscardgame.jpg",texto:"We Rate Dogs! The Card Game",eligible:true,numero:23,centavo:41,precio:"$23.41",producto:"We Rate Dogs! The Card Game"},
    {categoria:"Toys&Games",subcategoria:"Principal",caratula:"img/Dragonballcompleteseasons.jpg",texto:"Dragon Ball Complete Seasons 1-5 DVD BoxSets (5 Box Sets)",eligible:true,numero:56,centavo:99,precio:"$56.99",producto:"Dragon Ball Complete Seasons 1-5 DVD BoxSets (5 Box Sets)"},
    {categoria:"Toys&Games",subcategoria:"Principal",caratula:"img/Raccoonplush.jpg",texto:"Squishmallow Kellytoy 8' Raccoon Super Soft Squishy Plush Toy Pillow Pet",eligible:true,numero:9,centavo:99,precio:"$9.99",producto:"Squishmallow Kellytoy 8' Raccoon Super Soft Squishy Plush Toy Pillow Pet"},
    {categoria:"Toys&Games",subcategoria:"Principal",caratula:"img/Musicflashcards.jpg",texto:"Flashcards: General Music by Jane Bastien",eligible:true,numero:10,centavo:14,precio:"$10.14",producto:"Flashcards: General Music by Jane Bastien"},
    {categoria:"Toys&Games",subcategoria:"Principal",caratula:"img/Guitargirl.jpg",texto:"RuiyiF Kids Guitar for Girls Boys Beginners, Toy Acoustic Guitar for Toddlers 6 Steel String with Pick 21 Inch -Pink",eligible:true,numero:29,centavo:59,precio:"$29.59",producto:"RuiyiF Kids Guitar for Girls Boys Beginners, Toy Acoustic Guitar for Toddlers 6 Steel String with Pick 21 Inch -Pink"},
    {categoria:"Toys&Games",subcategoria:"Principal",caratula:"img/Burstevolution.jpg",texto:"Burst Evolution Starter Battling Top Toys Creative Gift Set with 4D Launcher Stater(B128,B113)",eligible:true,numero:18,centavo:99,precio:"$18.99",producto:"Burst Evolution Starter Battling Top Toys Creative Gift Set with 4D Launcher Stater(B128,B113)"},
    {categoria:"Toys&Games",subcategoria:"Principal",caratula:"img/Galisonwendy.jpg",texto:"Galison Wendy Gold Butterfly Migration 1000 Piece Jigsaw Puzzle",eligible:true,numero:16,centavo:99,precio:"$16.99",producto:"Galison Wendy Gold Butterfly Migration 1000 Piece Jigsaw Puzzle"},
    {categoria:"Toys&Games",subcategoria:"Principal",caratula:"img/Mudpuppyrainforest.jpg",texto:"Mudpuppy Rainforest Glow in The Dark Puzzle (100 Piece)",eligible:true,numero:11,centavo:99,precio:"$11.99",producto:"Mudpuppy Rainforest Glow in The Dark Puzzle (100 Piece)"},
    {categoria:"Toys&Games",subcategoria:"Principal",caratula:"img/GOTToy.jpg",texto:"Game of Thrones Night King and White Walker 3-Inch Titan Vinyl Figure 2-Pack - Convention Exclusive",eligible:true,numero:10,centavo:96,precio:"$10.96",producto:"Game of Thrones Night King and White Walker 3-Inch Titan Vinyl Figure 2-Pack - Convention Exclusive"},

]

function generarListaPrincipalBuyItems(){
    $('#toysgamesItems').empty();
    for(var i=0; i<buyitems.length; i++){
        if(buyitems[i].subcategoria=="Principal"){
            if(buyitems[i].eligible){
                buyitems[i].eligible="Eligible for Shipping to Honduras";
                $("#toysgamesItems").append(
                    `
                    <div class="td-toysgamesitem col-xl-4 col-md-6 col-12">
                        <a href="#">
                            <div class="toysgames-imageitem" style="background-image: url(${buyitems[i].caratula});"></div>
                        </a>
                        <div class="toysgamesContenido marginbottom">
                            <div class="toysgamesItemstext">
                                <a class="anchor-label" href="#">${buyitems[i].texto}</a>
                            </div>
                            <div class="eligible">${buyitems[i].eligible}</div>
                            <div class="toysgamesItemsprice margin-item">
                                <p><span class="dolar">$</span><span class="number">${buyitems[i].numero}</span><span class="centavos">${buyitems[i].centavo}</span></p>
                            </div> 
                        </div>
                    </div>
                    `
                    );
            }else{
                $("#toysgamesItems").append(
                    `
                    <div class="td-petitem col-xl-4 col-md-6 col-12">
                        <a href="#">
                            <div class="pet-imageitem" style="background-image: url(${buyitems[i].caratula});"></div>
                        </a>
                        <div class="petContenido">
                            <div class="petItemstext">
                                <a class="anchor-label" href="#">${buyitems[i].texto}</a>
                            </div>
                            <div class="petItemsprice margin-item">
                                <p><span class="dolar">$</span><span class="number">${buyitems[i].numero}</span><span class="centavos">${buyitems[i].centavo}</span></p>
                            </div>
                        </div>
                    </div>
                    `
                );
            }
        }
    }
}