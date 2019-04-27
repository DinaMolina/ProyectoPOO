$(document).ready(function(){
    generarListaPrincipalBuyItems();
});

var buyitems=[
    {categoria:"VideoGames",subcategoria:"Principal",caratula:"img/AvengersAgeOfUltron.jpg",texto:"MARVEL'S AVENGERS: AGE OF ULTRON [Blu-ray]",eligible:true,numero:19,centavo:89,precio:"$19.89",producto:"MARVEL'S AVENGERS: AGE OF ULTRON [Blu-ray]"},
    {categoria:"VideoGames",subcategoria:"Principal",caratula:"img/Antman.jpg",texto:"ANT-MAN [Blu-ray]",eligible:true,numero:19,centavo:99,precio:"$19.99",producto:"ANT-MAN [Blu-ray]"},
    {categoria:"VideoGames",subcategoria:"Principal",caratula:"img/CAWintersoldier.jpg",texto:"CAPTAIN AMERICA: THE WINTER SOLDIER [Blu-ray]",eligible:true,numero:19,centavo:99,precio:"$19.99",producto:"CAPTAIN AMERICA: THE WINTER SOLDIER [Blu-ray]"},
    {categoria:"VideoGames",subcategoria:"Principal",caratula:"img/CAFirstavenger.jpg",texto:"CAPTAIN AMERICA: THE FIRST AVENGER [Blu-ray]",eligible:true,numero:19,centavo:99,precio:"$19.99",producto:"CAPTAIN AMERICA: THE FIRST AVENGER [Blu-ray]"},
    {categoria:"VideoGames",subcategoria:"Principal",caratula:"img/Ironman.jpg",texto:"IRON MAN [Blu-ray]",eligible:true,numero:19,centavo:99,precio:"$19.99",producto:"IRON MAN [Blu-ray]"},
    {categoria:"VideoGames",subcategoria:"Principal",caratula:"img/Ironman2.jpg",texto:"IRON MAN 2 [Blu-ray]",eligible:true,numero:19,centavo:99,precio:"$19.99",producto:"IRON MAN 2 [Blu-ray]"},
    {categoria:"VideoGames",subcategoria:"Principal",caratula:"img/Ironman3.jpg",texto:"IRON MAN 3 [Blu-ray]",eligible:true,numero:19,centavo:99,precio:"$19.99",producto:"IRON MAN 3 [Blu-ray]"},
    {categoria:"VideoGames",subcategoria:"Principal",caratula:"img/Babydriver.jpg",texto:"Baby Driver [Blu-ray]",eligible:true,numero:12,centavo:99,producto:"Baby Driver [Blu-ray]"},
    {categoria:"VideoGames",subcategoria:"Principal",caratula:"img/Legendofzeldasoundtrack.jpg",texto:"Legend Of Zelda Breath Of The Wild (Original Soundtrack)",eligible:true,numero:56,centavo:00,producto:"Legend Of Zelda Breath Of The Wild (Original Soundtrack)"}
]

function generarListaPrincipalBuyItems(){
    $('#videogamesItems').empty();
    for(var i=0; i<buyitems.length; i++){
        if(buyitems[i].subcategoria=="Principal"){
            if(buyitems[i].eligible){
                buyitems[i].eligible="Eligible for Shipping to Honduras";
                $("#videogamesItems").append(
                `
                <div class="td-videogamesitem col-xl-12 col-md-12 col-12">
                    <div class="box-videogamesitems">
                        <div class="boxleft-videogamesItems">
                            <a href="#">
                                <div class="videogames-imageitem" style="background-image: url(${buyitems[i].caratula});"></div>
                            </a>
                        </div>
                        <div class="videogamesContenido">
                                <div class="videogamesItemstext">
                                    <a class="anchor-label" href="#">${buyitems[i].texto}</a>
                                </div>
                                <div class="eligible margin-item">${buyitems[i].eligible}</div>
                                <div class="videogamesItemsprice margin-item">
                                    <p><span class="dolar">$</span><span class="number">${buyitems[i].numero}</span><span class="centavos">${buyitems[i].centavo}</span></p>
                                </div> 
                        </div>
                    </div>     
                </div>   
                
                `);
            }else{
                $("#videogamesItems").append(
                    `
                    <div class="td-videogamesitem col-xl-12 col-md-12 col-12">
                        <div class="box-videogamesitems">
                            <div class="boxleft-videogamesItems">
                                <a href="#">
                                    <div class="videogames-imageitem" style="background-image: url(${buyitems[i].caratula});"></div>
                                </a>
                            </div>
                            <div class="videogamesContenido">
                                    <div class="videogamesItemstext">
                                        <a class="anchor-label" href="#">${buyitems[i].texto}</a>
                                    </div>
                                    <div class="videogamesItemsprice margin-item">
                                        <p><span class="dolar">$</span><span class="number">${buyitems[i].numero}</span><span class="centavos">${buyitems[i].centavo}</span></p>
                                    </div> 
                            </div>
                        </div>     
                    </div>       
                `);
            }
        }
    }
}