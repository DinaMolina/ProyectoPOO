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
    {departamento:"Deals",categoria:"Principal",imagen:"img/HitachiGas.jpg",dealoftheday:true,precio:"$96.75",discount:"Previous Price:  $149.95 (35% off)",producto:"Hitachi gas powered leaf blower",boton:"Add to Cart"},
    {departamento:"Deals",categoria:"Principal",imagen:"img/BambooMattressPad.jpg",dealoftheday:true,precio:"$83.99",discount:"Previous Price: $119.99 (30% off)",producto:"Rayon from Bamboo Mattress Pad",boton:"Add to Cart"},
    {departamento:"Deals",categoria:"Principal",imagen:"img/HamiltonBeachMixer.jpg",dealoftheday:false,precio:"$139.99",discount:"",producto:"Hamilton Beach Stand Mixer",boton:"Add to Cart"},
    {departamento:"Deals",categoria:"Principal",imagen:"img/OneTouch.jpg",dealoftheday:false,precio:"$31.97",discount:"",producto:"iOttie Easy One Touch Wireless Qi Fast Charge Car Mount Kit",boton:"Add to Cart"},
    {departamento:"Deals",categoria:"Principal",imagen:"img/Whitesheets.jpg",dealoftheday:false,precio:"$28.04",discount:"",producto:"CGK Unlimited Twin XL Sheet Set - 3 Piece - Fits College Dorm Rooms - Hotel Luxury Bed Sheets",boton:"Add to Cart"},
    {departamento:"Deals",categoria:"Principal",imagen:"img/Retainercleaner.jpg",dealoftheday:false,precio:"$18.20",discount:"",producto:"Premium Denture Cleaner",boton:"Add to Cart"},
    {departamento:"Deals",categoria:"Principal",imagen:"img/AuxiwaClip.jpg",dealoftheday:false,precio:"$11.89",discount:"Previous Price: $19.99 (41% off)",producto:"Auxiwa Clip on Selfie Ring Light [Rechargeable Battery] with 36 LED for Smart Phone Camera Round Shape, White",boton:"Add to Cart"},
    {departamento:"Deals",categoria:"Principal",imagen:"img/Starbucksbreakfast.jpg",dealoftheday:false,precio:"$35.64",discount:"Previous Price:  $44.96 (21% off)",producto:"Starbucks Breakfast Blend Medium Roast Single Cup Coffee for Keurig Brewers, 6 Boxes of 10 (60 Total K-Cup pods)",boton:"Add to Cart"},
    {departamento:"Deals",categoria:"Principal",imagen:"img/Toysteaset.jpg",dealoftheday:false,precio:"$13.27",discount:"Previous Price:  $27.99 (53% off)",producto:"Green Toys Tea Set - BPA Free, Phthalates Free Play Toys for Gross Motor, Fine Skills Development. Kitchen Toys",boton:"Add to Cart"},
    {departamento:"Deals",categoria:"Principal",imagen:"img/Dashcam.jpg",dealoftheday:false,precio:"$39.97",discount:"Previous Price:  $49.99 (20% off)",producto:"APEMAN Dash Cam 1080P Full HD Mini Car Driving Recorder 170° Wide Angle, Motion Detection, G-Sensor, Loop Recording, Night Vision",boton:"Add to Cart"},
    {departamento:"Deals",categoria:"Principal",imagen:"img/Flatsandals.jpg",dealoftheday:false,precio:"$7.76",discount:"",producto:"FUNKYMONKEY Women's Comfort Slides Double Buckle Adjustable EVA Flat Sandals",boton:"Add to Cart"},
    {departamento:"Deals",categoria:"Principal",imagen:"img/Carphonemount.jpg",dealoftheday:false,precio:"$8.49",discount:"",producto:"Lamicall Car Phone Mount",boton:"Add to Cart"}
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
        if(buyitems[i].categoria=="Principal"){
            if(buyitems[i].dealoftheday){
                buyitems[i].dealoftheday="DEAL OF THE DAY";
                $('#dealItems').append(
                    `   <div class="td-dealitem col-xl-3 col-md-6 col-12">
                            <a href="#">
                                <div class="deal-imageitem" style="background-image: url(${buyitems[i].imagen});"></div>
                            </a>
                            <div class="dealContenido">
                                <div class="orange-box">${buyitems[i].dealoftheday}</div>
                                <div class="dealItemsprice">${buyitems[i].precio}</div>
                                <div style="margin-top:-10px;">${buyitems[i].discount}</div>
                                <div class="dealItemstext">
                                    <a class="anchor-label"href="#" style="font-size:10px;">${buyitems[i].producto}</a>
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
                                <div class="deal-imageitem" style="background-image: url(${buyitems[i].imagen});"></div>
                            </a>
                            <div class="dealContenido">
                                <div class="dealItemsprice">${buyitems[i].precio}</div>
                                <div style="margin-top:-3px;">${buyitems[i].discount}</div>
                                <div class="dealItemstext">
                                    <a class="anchor-label"href="#" style="font-size:10px;">${buyitems[i].producto}</a>
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
