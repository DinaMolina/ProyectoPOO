$(document).ready(function(){
    generarListaPrincipalBuyItems();
});

var buyitems=[
    {departamento:"PetSupplies",categoria:"Principal",imagen:"img/Dogzilla.jpg",producto:"Dogzilla (digest)",eligible:true,numero:5,centavo:95,precio:"$5.95"},
    {departamento:"PetSupplies",categoria:"Principal",imagen:"img/Heartdisease.jpg",producto:"Prevent and Reverse Heart Disease: The Revolutionary, Scientifically Proven, Nutrition-Based Cure",eligible:true,numero:11,centavo:55,precio:"$11.55"},
    {departamento:"PetSupplies",categoria:"Principal",imagen:"img/Biscuitpet.jpg",producto:"Biscuit's Pet & Play Easter: A Touch & Feel Book",eligible:true,numero:7,centavo:48,precio:"$7.48"},
    {departamento:"PetSupplies",categoria:"Principal",imagen:"img/Xaviersolutions.jpg",producto:"Xavier Training Solutions Stake and Tie Out Combo for Dogs",eligible:true,numero:15,centavo:50,precio:"$15.50"},
    {departamento:"PetSupplies",categoria:"Principal",imagen:"img/Puppytricks.jpg",producto:"51 Puppy Tricks: Step-by-Step Activities to Engage",eligible:true,numero:8,centavo:47,precio:"$8.47"},
    {departamento:"PetSupplies",categoria:"Principal",imagen:"img/Thinklikecat.jpg",producto:"Think Like a Cat: How to Raise a Well-Adjusted Cat",eligible:true,numero:14,centavo:65,precio:"$14.65"},
    {departamento:"PetSupplies",categoria:"Principal",imagen:"img/Hotelfordogs.jpg",producto:"Hotel For Dogs",eligible:true,numero:7,centavo:79,precio:"$7.79"},
    {departamento:"PetSupplies",categoria:"Principal",imagen:"img/Dogpurpose.jpg",producto:"A Dog's Purpose: A Novel for Humans",eligible:true,numero:8,centavo:76,precio:"$8.76"},
    {departamento:"PetSupplies",categoria:"Principal",imagen:"img/Kavik.jpg",producto:"Kavik the Wolf Dog",eligible:true,numero:6,centavo:99,precio:"$6.99"},

]

function generarListaPrincipalBuyItems(){
    $('#petItems').empty();
    for(var i=0; i<buyitems.length; i++){
        if(buyitems[i].categoria=="Principal"){
            if(buyitems[i].producto == "Dogzilla (digest)"){
                buyitems[i].eligible="Eligible for Shipping to Honduras";
                $("#petItems").append(
                    `
                    <div class="td-petitem col-xl-4 col-md-6 col-12">
                        <a href="#">
                            <div class="pet-imageitem" style="background-image: url(${buyitems[i].imagen});"></div>
                        </a>
                        <div class="petContenido marginbottom">
                            <div class="petItemstext">
                                <a class="anchor-label" href="../../compras/paginaGenerica.2.html">${buyitems[i].producto}</a>
                            </div>
                            <div class="eligible">${buyitems[i].eligible}</div>
                            <div class="petItemsprice margin-item">
                                <p><span class="dolar">$</span><span class="number">${buyitems[i].numero}</span><span class="centavos">${buyitems[i].centavo}</span></p>
                            </div> 
                        </div>
                    </div>
                    `
                    );
            }else{
                $("#petItems").append(
                    `
                    <div class="td-petitem col-xl-4 col-md-6 col-12">
                        <a href="#">
                            <div class="pet-imageitem" style="background-image: url(${buyitems[i].imagen});"></div>
                        </a>
                        <div class="petContenido">
                            <div class="petItemstext">
                                <a class="anchor-label" href="#">${buyitems[i].producto}</a>
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