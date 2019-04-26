$(document).ready(function(){
    generarListaPrincipalBuyItems();
});

var buyitems=[
    {categoria:"PetSupplies",subcategoria:"Principal",caratula:"img/Heartdisease.jpg",texto:"Prevent and Reverse Heart Disease: The Revolutionary, Scientifically Proven, Nutrition-Based Cure",eligible:true,numero:11,centavo:55,producto:"Heart Disease Cure"},
    {categoria:"PetSupplies",subcategoria:"Principal",caratula:"img/Biscuitpet.jpg",texto:"Biscuit's Pet & Play Easter: A Touch & Feel Book",eligible:true,numero:7,centavo:48,producto:"Biscuit's Pet & Play Easter: A Touch & Feel Book"},
    {categoria:"PetSupplies",subcategoria:"Principal",caratula:"img/Xaviersolutions.jpg",texto:"Xavier Training Solutions Stake and Tie Out Combo for Dogs | 20ft. Cable Leash Pet Tether System Blue | 18' Spiral Stake",eligible:true,numero:15,centavo:50,producto:"20ft. Cable Leash Pet Tether System Blue"},
    {categoria:"PetSupplies",subcategoria:"Principal",caratula:"img/Dogzilla.jpg",texto:"Dogzilla (digest)",eligible:true,numero:5,centavo:95,producto:"Dogzilla (digest)"},
    {categoria:"PetSupplies",subcategoria:"Principal",caratula:"img/Puppytricks.jpg",texto:"51 Puppy Tricks: Step-by-Step Activities to Engage",eligible:true,numero:8,centavo:47,producto:"51 Puppy Tricks"},
    {categoria:"PetSupplies",subcategoria:"Principal",caratula:"img/Thinklikecat.jpg",texto:"Think Like a Cat: How to Raise a Well-Adjusted Cat",eligible:true,numero:14,centavo:65,producto:"Think Like a Cat: How to Raise a Well-Adjusted Cat"},
    {categoria:"PetSupplies",subcategoria:"Principal",caratula:"img/Hotelfordogs.jpg",texto:"Hotel For Dogs",eligible:true,numero:7,centavo:79,producto:"Hotel For Dogs"},
    {categoria:"PetSupplies",subcategoria:"Principal",caratula:"img/Dogpurpose.jpg",texto:"A Dog's Purpose: A Novel for Humans",eligible:true,numero:8,centavo:76,producto:"A Dog's Purpose: A Novel for Humans"},
    {categoria:"PetSupplies",subcategoria:"Principal",caratula:"img/Kavik.jpg",texto:"Kavik the Wolf Dog",eligible:true,numero:6,centavo:99,producto:"Kavik the Wolf Dog"},

]

function generarListaPrincipalBuyItems(){
    $('#petItems').empty();
    for(var i=0; i<buyitems.length; i++){
        if(buyitems[i].subcategoria=="Principal"){
            if(buyitems[i].eligible){
                buyitems[i].eligible="Eligible for Shipping to Honduras";
                $("#petItems").append(
                    `
                    <div class="td-petitem col-xl-4 col-md-6 col-12">
                        <a href="#">
                            <div class="pet-imageitem" style="background-image: url(${buyitems[i].caratula});"></div>
                        </a>
                        <div class="petContenido marginbottom">
                            <div class="petItemstext">
                                <a class="anchor-label" href="#">${buyitems[i].texto}</a>
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