<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Deals</title>
  <link rel="shorcut icon" href="img/amazon.ico?v=<?php echo time(); ?>">
  <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" media="screen" href="css/styles.css?v=<?php echo time(); ?>">
  <link rel="stylesheet" type="text/css" media="screen" href="css/stylesdeals.css?v=<?php echo time(); ?>">
</head>

<body style="background-color:#FFFFFF">
  <nav class="navbar navbar-expand-lg bg-light">
      <a class="navbar-brand" href="#"><img id="logo" src="../imgcomunes/logo.png" alt="LogoAmazon" > 
    </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
    <!--Barra de search-->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
        <form class="form-inline my-2 my-lg-0 "style="width: 885px;">
            <select class="all">
                <option>Deals</option>
              </select>
         
  <?php
    include("../headerb.html");
  ?>
  <div id="firsth1">
    <h1 style="font-size: 28px; line-height: 1.2;"><b style="font-weight:700">Deals and Promotions</b></h1>
    <p>Shop Today’s Deals, Lightning Deals, and limited-time discounts</p>
  </div>
  <div id="containeradimage1">
      <img src="img/AMZNOutletDeals.jpg" alt="AmazonOutletDeals" style="width:100%; height:180px;">
  </div>
  </div>
  <div class="container-fluid">
      <div class="row general-box">
        <div class="deal-boxoptions">
            <div class="filter-items">
                <div><span class="text-bold">Department</span></div>
                <div id="deal-chk">
                </div>
            </div>
            <div class="filter-items">
                <div><span class="text-bold">Deal Type</span></div>
                <div id="deal-type">
                  <a class="anchor-label">Deal of the Day</a><br>
                  <a class="anchor-label">Lightning Deals</a><br>
                  <a class="anchor-label">Savings & Sales</a><br>
                  <a class="anchor-label">Prime Early Access Deals</a><br>
                </div>
            </div>
            <div class="filter-items">
                <div><span class="text-bold">Availability</span></div>
                <div id="availability">
                  <input type="checkbox" name="chk-availability[]" id="chk-availability0" value="0"><label for="chk-availability0"><span class="text-label">&nbsp;Active</span></label><br>
                  <input type="checkbox" name="chk-availability[]" id="chk-availability1" value="1"><label for="chk-availability1"><span class="text-label">&nbsp;Upcoming</span></label><br>
                  <input type="checkbox" name="chk-availability[]" id="chk-availability2" value="2"><label for="chk-availability2"><span class="text-label">&nbsp;Missed</span></label><br>
                </div>
            </div>
            <div class="filter-items">
                <div><span class="text-bold">Price</span></div>
                <div id="price">
                  <a class="anchor-label">Under $25</a><br>
                  <a class="anchor-label">$25 to $50</a><br>
                  <a class="anchor-label">$50 to $100</a><br>
                  <a class="anchor-label">$100 to $200</a><br>
                  <a class="anchor-label">$200 & Above</a><br>
                </div>
            </div>
            <div class="filter-items">
                <div><span class="text-bold">Discount</span></div>
                <div id="discount">
                  <a class="anchor-label">10% Off or More</a><br>
                  <a class="anchor-label">25% Off or More</a><br>
                  <a class="anchor-label">50% Off or More</a><br>
                  <a class="anchor-label">70% Off or More</a><br>
                </div>
            </div>
        </div>  
        <div id="principal-dealitems">
              <div class="row" id="dealItems">
                                          
              </div>
          </div>
        </div> 
  </div>
  <?php
    include("../footerb.html");
  ?>
  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/controlador.js?v=<?php echo time(); ?>"></script>
  <script src="js/controladordeals.js?v=<?php echo time(); ?>"></script>
</body>

</html>
