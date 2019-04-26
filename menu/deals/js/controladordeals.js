$(document).ready(function(){
    generarListaCheckbox();
    generarListaPrincipalBuyItems();
});
var checkbox=[
    {departamento:"Arts, Crafts & Sewing"},{departamento:"Automotive & Motorcycle"},{departamento:"Baby"},
    {departamento:"Baby Clothing & Accessories"},{departamento:"Beauty"},{departamento:"Books"},
    {departamento:"Boys’ Fashion"},{departamento:"Camera & Photo"},{departamento:"Cell Phones & Accessories"},
    {departamento:"Collectibles & Fine Art"},{departamento:"Computers & Accessories"},{departamento:"Costumes & Accessories"}
];
var checkboxseemore=[
    {departamento:"Arts, Crafts & Sewing"},{departamento:"Automotive & Motorcycle"},{departamento:"Baby"},
    {departamento:"Baby Clothing & Accessories"},{departamento:"Beauty"},{departamento:"Books"},
    {departamento:"Boys’ Fashion"},{departamento:"Camera & Photo"},{departamento:"Cell Phones & Accessories"},
    {departamento:"Collectibles & Fine Art"},{departamento:"Computers & Accessories"},{departamento:"Costumes & Accessories"},
    {departamento:"DVD & Blu-ray"},{departamento:"Electronics"},{departamento:"Fashion"},
    {departamento:"Furniture"},{departamento:"Girls’ Fashion"},{departamento:"Grocery"},
    {departamento:"Music"},{departamento:"PC & Video Games"},{departamento:"Software"}
];
var buyitems=[
    {categoria:"Deals",subcategoria:"Principal",caratula:"img/HitachiGas.jpg",dealoftheday:true,precio:"$96.75",discount:"Previous Price:  $149.95 (35% off)",texto:"Hitachi gas powered leaf blower",producto:"Hitachi gas powered leaf blower",boton:"Add to Cart"},
    {categoria:"Deals",subcategoria:"Principal",caratula:"img/BambooMattressPad.jpg",dealoftheday:true,precio:"$83.99",discount:"Previous Price: $119.99 (30% off)",texto:"Rayon from Bamboo Mattress Pad",producto:"Rayon from Bamboo Mattress Pad",boton:"Add to Cart"},
    {categoria:"Deals",subcategoria:"Principal",caratula:"img/HamiltonBeachMixer.jpg",dealoftheday:false,precio:"$139.99",discount:"",texto:"Hamilton Beach Stand Mixer",producto:"Hamilton Beach Stand Mixer",boton:"Add to Cart"},
    {categoria:"Deals",subcategoria:"Principal",caratula:"img/OneTouch.jpg",dealoftheday:false,precio:"$31.97",discount:"",texto:"iOttie Easy One Touch Wireless Qi Fast Charge Car Mount Kit",producto:"iOttie Easy One Touch Wireless Qi Car Mount Kit",boton:"Add to Cart"},
    {categoria:"Deals",subcategoria:"Principal",caratula:"img/Whitesheets.jpg",dealoftheday:false,precio:"$28.04",discount:"",texto:"CGK Unlimited Twin XL Sheet Set - 3 Piece - Fits College Dorm Rooms - Hotel Luxury Bed Sheets",producto:"CGK Unlimited Twin XL Sheet Set - Hotel Luxury Bed Sheets",boton:"Add to Cart"},
    {categoria:"Deals",subcategoria:"Principal",caratula:"img/AuxiwaClip.jpg",dealoftheday:false,precio:"$11.89",discount:"Previous Price: $19.99 (41% off)",texto:"Auxiwa Clip on Selfie Ring Light [Rechargeable Battery] with 36 LED for Smart Phone Camera Round Shape, White",producto:"Auxiwa Clip on Selfie Ring Light [Rechargeable Battery] with 36 LED for Smart Phone Camera Round Shape, White",boton:"Add to Cart"},
    {categoria:"Deals",subcategoria:"Principal",caratula:"img/Starbucksbreakfast.jpg",dealoftheday:false,precio:"$35.64",discount:"Previous Price:  $44.96 (21% off)",texto:"Starbucks Breakfast Blend Medium Roast Single Cup Coffee for Keurig Brewers, 6 Boxes of 10 (60 Total K-Cup pods)",producto:"Starbucks Breakfast Blend Medium Roast Single Cup Coffee for Keurig Brewers",boton:"Add to Cart"},
    {categoria:"Deals",subcategoria:"Principal",caratula:"img/Toysteaset.jpg",dealoftheday:false,precio:"$13.27",discount:"Previous Price:  $27.99 (53% off)",texto:"Green Toys Tea Set - BPA Free, Phthalates Free Play Toys for Gross Motor, Fine Skills Development. Kitchen Toys",producto:"Green Toys Tea Set",boton:"Add to Cart"},
    {categoria:"Deals",subcategoria:"Principal",caratula:"img/Dashcam.jpg",dealoftheday:false,precio:"$39.97",discount:"Previous Price:  $49.99 (20% off)",texto:"APEMAN Dash Cam 1080P Full HD Mini Car Driving Recorder 170° Wide Angle, Motion Detection, G-Sensor, Loop Recording, Night Vision",producto:"APEMAN Dash Cam 1080P Full HD Mini Car Driving Recorder 170°",boton:"Add to Cart"},
    {categoria:"Deals",subcategoria:"Principal",caratula:"img/Flatsandals.jpg",dealoftheday:false,precio:"$7.76",discount:"",texto:"FUNKYMONKEY Women's Comfort Slides Double Buckle Adjustable EVA Flat Sandals",producto:"Women's EVA Flat Sandals",boton:"Add to Cart"},
    {categoria:"Deals",subcategoria:"Principal",caratula:"img/Retainercleaner.jpg",dealoftheday:false,precio:"$18.20",discount:"",texto:"Premium Denture Cleaner",producto:"Premium Denture Cleaner",boton:"Add to Cart"},
    {categoria:"Deals",subcategoria:"Principal",caratula:"img/Carphonemount.jpg",dealoftheday:false,precio:"$8.49",discount:"",texto:"Lamicall Car Phone Mount",producto:"Lamicall Car Phone Mount",boton:"Add to Cart"}
]

function generarListaCheckbox(){
    $('#deal-chk').empty();
    for(var i=0; i<checkbox.length; i++){
        $('#deal-chk').append(
            `<input type="checkbox" name="chkdepartmentdeal[]" 
            id="chk-deal${i}" value="${i}">
            <label for="chk-deal${i}"><span class="text-label">&nbsp;${checkbox[i].departamento}</span></label><br>
            `
        );
    }
    $('#deal-chk').append(`<a class="anchor-label" onclick="javascript:generarListaCheckboxMore();" role="button">See more</a><br>`);
}
function generarListaCheckboxMore(){
    $('#deal-chk').empty();
    for(var i=0; i<checkboxseemore.length; i++){
        $('#deal-chk').append(
            `<input type="checkbox" name="chkdepartmentdeal[]" 
            id="chk-deal${i}" value="${i}">
            <label for="chk-deal${i}"><span class="text-label">&nbsp;${checkboxseemore[i].departamento}</span></label><br>
            `
        );
    }
    $('#deal-chk').append(`<a class="anchor-label" onclick="javascript:generarListaCheckbox();" role="button">See less</a><br>`); 
}
function generarListaPrincipalBuyItems(){
    $('#dealItems').empty();
    for(var i=0; i<buyitems.length; i++){
        if(buyitems[i].subcategoria=="Principal"){
            if(buyitems[i].dealoftheday){
                buyitems[i].dealoftheday="DEAL OF THE DAY";
                $('#dealItems').append(
                    `   <div class="td-dealitem col-xl-3 col-md-6 col-12">
                            <a href="#">
                                <div class="deal-imageitem" style="background-image: url(${buyitems[i].caratula});"></div>
                            </a>
                            <div class="dealContenido">
                                <div class="orange-box">${buyitems[i].dealoftheday}</div>
                                <div class="dealItemsprice">${buyitems[i].precio}</div>
                                <div style="margin-top:-10px;">${buyitems[i].discount}</div>
                                <div class="dealItemstext">
                                    <a class="anchor-label"href="#" style="font-size:10px;">${buyitems[i].texto}</a>
                                </div>
                            </div>
                            <div class="button-dealItem"><button type="button">${buyitems[i].boton}</button></div>
                        </div>
                    `
                );
            }else{
                $('#dealItems').append(
                    `   <div class="td-dealitem col-xl-3 col-md-6 col-12">
                            <a href="#">
                                <div class="deal-imageitem" style="background-image: url(${buyitems[i].caratula});"></div>
                            </a>
                            <div class="dealContenido">
                                <div class="dealItemsprice">${buyitems[i].precio}</div>
                                <div style="margin-top:-3px;">${buyitems[i].discount}</div>
                                <div class="dealItemstext">
                                    <a class="anchor-label"href="#" style="font-size:10px;">${buyitems[i].texto}</a>
                                </div>
                            </div>
                            <div class="button-dealItem"><button type="button">${buyitems[i].boton}</button></div>
                        </div>
                    `
                );
            }
        }
    }
}
