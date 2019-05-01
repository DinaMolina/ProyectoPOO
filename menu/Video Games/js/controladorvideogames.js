$(document).ready(function(){
    generarListaPrincipalBuyItems();
});

var buyitems=[
    {departamento:"VideoGames",categoria:"Principal",imagen:"img/AvengersAgeOfUltron.jpg",producto:"MARVEL'S AVENGERS: AGE OF ULTRON [Blu-ray]",eligible:true,numero:19,centavo:89,precio:"$19.89"},
    {departamento:"VideoGames",categoria:"Principal",imagen:"img/Antman.jpg",producto:"ANT-MAN [Blu-ray]",eligible:true,numero:19,centavo:99,precio:"$19.99"},
    {departamento:"VideoGames",categoria:"Principal",imagen:"img/CAWintersoldier.jpg",producto:"CAPTAIN AMERICA: THE WINTER SOLDIER [Blu-ray]",eligible:true,numero:19,centavo:99,precio:"$19.99"},
    {departamento:"VideoGames",categoria:"Principal",imagen:"img/CAFirstavenger.jpg",producto:"CAPTAIN AMERICA: THE FIRST AVENGER [Blu-ray]",eligible:true,numero:19,centavo:99,precio:"$19.99"},
    {departamento:"VideoGames",categoria:"Principal",imagen:"img/Ironman.jpg",producto:"IRON MAN [Blu-ray]",eligible:true,numero:19,centavo:99,precio:"$19.99"},
    {departamento:"VideoGames",categoria:"Principal",imagen:"img/Legendofzeldasoundtrack.jpg",producto:"Legend Of Zelda Breath Of The Wild (Original Soundtrack)",eligible:true,numero:56,centavo:00,precio:"$56.00"},
    {departamento:"VideoGames",categoria:"Principal",imagen:"img/Ironman2.jpg",producto:"IRON MAN 2 [Blu-ray]",eligible:true,numero:19,centavo:99,precio:"$19.99"},
    {departamento:"VideoGames",categoria:"Principal",imagen:"img/Ironman3.jpg",producto:"IRON MAN 3 [Blu-ray]",eligible:true,numero:19,centavo:99,precio:"$19.99"},
    {departamento:"VideoGames",categoria:"Principal",imagen:"img/Babydriver.jpg",producto:"Baby Driver [Blu-ray]",eligible:true,numero:12,centavo:99,precio:"$12.99"}
]

function generarListaPrincipalBuyItems(){
    $('#videogamesItems').empty();
    for(var i=0; i<buyitems.length; i++){
        if(buyitems[i].categoria=="Principal"){
            if(buyitems[i].eligible){
                buyitems[i].eligible="Eligible for Shipping to Honduras";
                $("#videogamesItems").append(
                `
                <div class="td-videogamesitem col-xl-12 col-md-12 col-12">
                    <div class="box-videogamesitems">
                        <div class="boxleft-videogamesItems">
                            <a href="#">
                                <div class="videogames-imageitem" style="background-image: url(${buyitems[i].imagen});"></div>
                            </a>
                        </div>
                        <div class="videogamesContenido">
                                <div class="videogamesItemstext">
                                    <a class="anchor-label" href="#">${buyitems[i].producto}</a>
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
                                    <div class="videogames-imageitem" style="background-image: url(${buyitems[i].imagen});"></div>
                                </a>
                            </div>
                            <div class="videogamesContenido">
                                    <div class="videogamesItemstext">
                                        <a class="anchor-label" href="#">${buyitems[i].producto}</a>
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