$(document).ready(function(){
    generarListaPrincipalBuyItems();
});

var buyitems=[
    {departamento:"Software",categoria:"Principal",imagen:"img/Scholastic.jpg",producto:"Scholastic Success with Writing, Grade 1",eligible:true,numero:5,centavo:99,precio:"$5.99"},
    {departamento:"Software",categoria:"Principal",imagen:"img/Schoolzone.jpg",producto:"School Zone - Get Ready!™ 1-25 Dot-to-Dots Workbook, Ages 3 to 5, Numbers, Numerical Order, Counting, Fine Motor Skills, Sequencing (School Zone Get Ready!™ Activity Book Series)",eligible:true,numero:2,centavo:99,precio:"$2.99"},
    {departamento:"Software",categoria:"Principal",imagen:"img/Germanbook.jpg",producto:"The Everything Learning German Book: Speak, write, and understand basic German in no time",eligible:true,numero:13,centavo:28,precio:"$13.28"},
    {departamento:"Software",categoria:"Principal",imagen:"img/Webster.jpg",producto:"Webster's New World Portable Large Print Dictionary, Second Edition",eligible:true,numero:16,centavo:11,precio:"$16.11"},
    {departamento:"Software",categoria:"Principal",imagen:"img/Digitizing.jpg",producto:"Digitizing Made Easy: Create Custom Embroidery Designs Like a Pro",eligible:true,numero:21,centavo:75,precio:"$21.75"},
    {departamento:"Software",categoria:"Principal",imagen:"img/Sharmanic.jpg",producto:"Shamanic Journeying: A Beginner's Guide",eligible:true,numero:12,centavo:02,precio:"$12.02"},
    {departamento:"Software",categoria:"Principal",imagen:"img/Garmin.jpg",producto:"Garmin 010-12705-00 Delorme Atlas & Gazetteer Alaska",eligible:true,numero:18,centavo:32,precio:"$18.32"},
    {departamento:"Software",categoria:"Principal",imagen:"img/Studybible.jpg",producto:"Life Application Study Bible NKJV",eligible:true,numero:34,centavo:02,precio:"$34.02"},
    {departamento:"Software",categoria:"Principal",imagen:"img/Guitarforkids.jpg",producto:"Guitar for Kids: Hal Leonard Guitar Method (Hal Leonard Guitar Method (Songbooks))",eligible:true,numero:12,centavo:67,precio:"$12.67"}
]

function generarListaPrincipalBuyItems(){
    $('#softwareItems').empty();
    for(var i=0; i<buyitems.length; i++){
        if(buyitems[i].categoria=="Principal"){
            if(buyitems[i].eligible){
                buyitems[i].eligible="Eligible for Shipping to Honduras";
                $("#softwareItems").append(
                `
                <div class="td-softwareitem col-xl-12 col-md-12 col-12">
                    <div class="box-softwareitems">
                        <div class="boxleft-softwareItems">
                            <a href="#">
                                <div class="software-imageitem" style="background-image: url(${buyitems[i].imagen});"></div>
                            </a>
                        </div>
                        <div class="softwareContenido">
                                <div class="softwareItemstext">
                                    <a class="anchor-label" href="#">${buyitems[i].producto}</a>
                                </div>
                                <div class="eligible">${buyitems[i].eligible}</div>
                                <div class="softwareItemsprice margin-item">
                                    <p><span class="dolar">$</span><span class="number">${buyitems[i].numero}</span><span class="centavos">${buyitems[i].centavo}</span></p>
                                </div> 
                        </div>
                    </div>     
                </div>   
                
                `);
            }else{
                $("#softwareItems").append(
                    `
                    <div class="td-softwareitem col-xl-12 col-md-12 col-12">
                        <div class="box-softwareitems">
                            <div class="boxleft-softwareItems">
                                <a href="#">
                                    <div class="software-imageitem" style="background-image: url(${buyitems[i].imagen});"></div>
                                </a>
                            </div>
                            <div class="softwareContenido">
                                    <div class="softwareItemstext">
                                        <a class="anchor-label" href="#">${buyitems[i].producto}</a>
                                    </div>
                                    <div class="softwareItemsprice margin-item">
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