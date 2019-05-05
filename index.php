<?php 
    session_start();  
    if (!isset($_SESSION["usuario"]))
        header("Location: no-autorizado.html");//Redireccion con PHP
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Amazon</title>
  <link rel="shorcut icon" href="img/amazon.ico">
  <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" media="screen" href="css/styles.css?v=<?php echo time(); ?>">
</head>

<body style="background-color:#EAEDED;">
  <!--Barra donde esta el logo-->
  <nav class="navbar navbar-expand-lg bg-light">
    <a class="navbar-brand" href="index.html"><img id="logo" src="img/logo.png" alt="LogoAmazon">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!--Barra de search-->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <form class="form-inline my-2 my-lg-0 ">
            <select class="all">
              <option>All</option>
            </select>
            <input class="search-box form-control mr-sm-2 " type="search" aria-label="Search"
              style="background-image:url(img/lupa.png);">
          </form>
    </div>
    <a class="navbar-brand" href="#"><img src="img/esquina.png" alt="LogoAmazon">
    </a>
  </nav>
  <!--Barra de opciones-->
  <div>
    <ul class="nav">
      <li class="nav-item letters">
        <img src="img/lugar.png">
      </li>
        <!--Menú de los departamentos-->
      <li class="nav-item ">
        <div class="dropdown menu">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Departaments
            </a>
          
            <div class="dropdown-menu" id="menu" aria-labelledby="dropdownMenuLink">
            </div>
          </div>
      </li>
      <li class="nav-item ">
        <a class="button" href="anchors.html">Your Amazon.com</a>
      </li>
      <li class="nav-item">
        <a href="anchors.html" class="button">Today's Deals</a>
      </li>
      <a class="button downbutton" href="anchors.html">Gift Cards</a>
      </li>
      <li class="nav-item ">
        <a class="button" href="anchors.html">Registry</a>
      </li>
      </li>
      <a class="button downbutton" href="anchors.html">Sell</a>
      </li>
      </li>
      <a class="button downbutton" href="anchors.html">Help

      </a>
      </li>
      <li class="nav-item letters">
      <li>
        <select id="idioma" class="en" style="background-image: url(img/en.png);">
        </select>
      </li>
      <li> <div id="prueba2" >
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hola <?php echo $_SESSION["usuario"];  ?>
                </a>
                <div class="dropdown-menu" id="lista" aria-labelledby="dropdownMenuLink"></div>
          </div> 
      </li>            
      <li>
        <a href="#"><img style="margin-left: 17px; margin-top: -3px;" src="img/orden.png" alt="LogoAmazon">
        </a>
      </li>
      <li>
        <a href="compras/carrito.html" id="carrito"><img style="margin-top: -5px; margin-left: -9px;" src="img/carrito.png" alt="LogoAmazon">
        </a>
      </li>
    </ul>
  </div>

  <!--Carrusel de fotos-->
  <div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="img/primera.jpg" class="d-block w-100" alt="Primer imagen">
        </div>
        <div class="carousel-item">
          <img src="img/segunda.jpg" class="d-block w-100" alt="Segunda Imagen">
        </div>
        <div class="carousel-item">
          <img src="img/tercera.jpg" class="d-block w-100" alt="Tercera Imagen">
        </div>
        <div class="carousel-item">
          <img src="img/cuarta.jpg" class="d-block w-100" alt="Cuarta Imagen">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <!--Postales-->
  <div class="container-fluid col-xl-3 col-sm-12" style="background-color: transparent; margin-top: 0px;">
    <div class="row" id="cards">

    </div>
  </div><br>
  <!--Landing-page inferior-->
  <div class="container-fluid">
    <!--Div de Electronics-Toys-->
    <div class="row" id="div-electronics-toys">
      <div class="col-6">
        <div class="ad-image" id="electronics"></div>
      </div>
      <div class="col-6">
        <div class="ad-image" id="toys"></div>
      </div>
    </div>

    <!--Smartphones-->
    <div class="shop">

      <div class="htext">
        <h1>Like-new Smartphones &nbsp;<a class="anchor" href="compras/paginaGenerica.1.html">Shop now</a></h1>
      </div>
      <!--Slider-->
      <div id="carouselIndicators1" class="carousel slide" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators">
          <li data-target="#carouselIndicators1" data-slide-to="0" class="active"></li>
          <li data-target="#carouselIndicators1" data-slide-to="1"></li>
          <li data-target="#carouselIndicators1" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div id="smartphone1" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/smartphones/1.png" alt="Smartphone1"></div>
              <div id="smartphone2" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/smartphones/1.png" alt="Smartphone2"></div>
              <div id="smartphone3" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel4"
                  src="img/smartphones/2.png" alt="Smartphone3"></div>
              <div id="smartphone4" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/smartphones/3.png" alt="Smartphone4"></div>
              <div id="smartphone5" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/smartphones/4.png" alt="Smartphone5"></div>
              <div id="smartphone6" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/smartphones/5.png" alt="Smartphone6"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div id="smartphone7" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/smartphones/6.png" alt="Smartphone7"></div>
              <div id="smartphone8" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/smartphones/7.png" alt="Smartphone8"></div>
              <div id="smartphone9" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/smartphones/8.png" alt="Smartphone9"></div>
              <div id="smartphone10" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/smartphones/9.png" alt="Smartphone10"></div>
              <div id="smartphone11" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/smartphones/10.png" alt="Smartphone11"></div>
              <div id="smartphone12" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/smartphones/11.png" alt="Smartphone12"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div id="smartphone13" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/smartphones/12.png" alt="Smartphone13"></div>
              <div id="smartphone14" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/smartphones/13.png" alt="Smartphone14"></div>
              <div id="smartphone15" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/smartphones/13.png" alt="Smartphone15"></div>
              <div id="smartphone16" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/smartphones/14.png" alt="Smartphone16"></div>
              <div id="smartphone17" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/smartphones/15.png" alt="Smartphone17"></div>
              <div id="smartphone18" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/smartphones/16.png" alt="Smartphone18"></div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselIndicators1" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselIndicators1" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    </div>

    <!--Videogames-->
    <div class="shop">

      <div class="htext">
        <h1>Trending on videogames &nbsp;<a class="anchor" href="compras/paginaGenericalandingpage1.html">See more</a></h1>
      </div>
      <!--Slider-->
      <div id="carouselIndicators2" class="carousel slide" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators">
          <li data-target="#carouselIndicators2" data-slide-to="0" class="active"></li>
          <li data-target="#carouselIndicators2" data-slide-to="1"></li>
          <li data-target="#carouselIndicators2" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div id="videogame1" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel5"
                  src="img/videogames/1.png" alt="Videogame1"></div>
              <div id="videogame2" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel5"
                  src="img/videogames/2.png" alt="Videogame2"></div>
              <div id="videogame3" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel6"
                  src="img/videogames/3.png" alt="Videogame3"></div>
              <div id="videogame4" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/videogames/4.png" alt="Videogame4"></div>
              <div id="videogame5" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/videogames/5.png" alt="Videogame5"></div>
              <div id="videogame6" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/videogames/6.png" alt="Videogame6"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div id="videogame7" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/videogames/7.png" alt="Videogame7"></div>
              <div id="videogame8" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/videogames/8.png" alt="Videogame8"></div>
              <div id="videogame9" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel8"
                  src="img/videogames/9.png" alt="Videogame9"></div>
              <div id="videogame10" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/videogames/10.png" alt="Videogame10"></div>
              <div id="videogame11" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel7"
                  src="img/videogames/11.png" alt="Videogame11"></div>
              <div id="videogame12" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/videogames/12.png" alt="Videogame12"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div id="videogame13" class="col-xl-2"><img class="imagebottom-carousel8" src="img/videogames/13.png"
                  alt="Videogame13"></div>
              <div id="videogame14" class="col-xl-2"><img class="imagebottom-carousel8" src="img/videogames/14.png"
                  alt="Videogame14"></div>
              <div id="videogame15" class="col-xl-2"><img class="imagebottom-carousel6" src="img/videogames/15.png"
                  alt="Videogame15"></div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselIndicators2" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselIndicators2" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    </div>

    <!--Tablets-->
    <div class="shop">

      <div class="htext">
        <h1>Like-new tablets &nbsp;<a class="anchor" href="anchors.html">See more</a></h1>
      </div>
      <!--Slider-->
      <div id="carouselIndicators3" class="carousel slide" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators">
          <li data-target="#carouselIndicators3" data-slide-to="0" class="active"></li>
          <li data-target="#carouselIndicators3" data-slide-to="1"></li>
          <li data-target="#carouselIndicators3" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div id="tablet1" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/tablets/1.png" alt="Tablets1"></div>
              <div id="tablet2" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/tablets/2.png" alt="Tablets2"></div>
              <div id="tablet3" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/tablets/3.png" alt="Tablets3"></div>
              <div id="tablet4" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/tablets/4.png" alt="Tablets4"></div>
              <div id="tablet5" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel4"
                  src="img/tablets/5.png" alt="Tablets5"></div>
              <div id="tablet6" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                  src="img/tablets/6.png" alt="Tablets6"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div id="tablet7" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/tablets/7.png" alt="Tablets7"></div>
              <div id="tablet8" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/tablets/8.png" alt="Tablets8"></div>
              <div id="tablet9" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/tablets/9.png" alt="Tablets9"></div>
              <div id="tablet10" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/tablets/10.png" alt="Tablets10"></div>
              <div id="tablet11" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/tablets/11.png" alt="Tablets11"></div>
              <div id="tablet12" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                  src="img/tablets/12.png" alt="Tablets12"></div>

            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div id="tablet13" class="col-xl-2"><img class="imagebottom-carousel5" src="img/tablets/13.png"
                  alt="Tablets13"></div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselIndicators3" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselIndicators3" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    </div>

    <!--Wireless products-->
    <div class="shop">

      <div class="htext">
        <h1>Must have Wireless products &nbsp;<a class="anchor" href="anchors.html">See more</a></h1>
      </div>
      <!--Slider-->
      <div id="carouselIndicators4" class="carousel slide" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators">
          <li data-target="#carouselIndicators4" data-slide-to="0" class="active"></li>
          <li data-target="#carouselIndicators4" data-slide-to="1"></li>
          <li data-target="#carouselIndicators4" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div id="wproduct1" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel5"
                  src="img/wireless products/1.png" alt="Wireless1"></div>
              <div id="wproduct2" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel4"
                  src="img/wireless products/2.png" alt="Wireless2"></div>
              <div id="wproduct3" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel5"
                  src="img/wireless products/3.png" alt="Wireless3"></div>
              <div id="wproduct4" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel4"
                  src="img/wireless products/4.png" alt="Wireless4"></div>
              <div id="wproduct5" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel5"
                  src="img/wireless products/5.png" alt="Wireless5"></div>
              <div id="wproduct6" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel4"
                  src="img/wireless products/6.png" alt="Wireless6"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div id="wproduct7" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel4"
                  src="img/wireless products/7.png" alt="Wireless7"></div>
              <div id="wproduct8" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel4"
                  src="img/wireless products/8.png" alt="Wireless8"></div>
              <div id="wproduct9" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel4"
                  src="img/wireless products/9.png" alt="Wireless9"></div>
              <div id="wproduct10" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel4"
                  src="img/wireless products/10.png" alt="Wireless10"></div>
              <div id="wproduct11" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel4"
                  src="img/wireless products/11.png" alt="Wireless11"></div>
              <div id="wproduct12" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel3"
                  src="img/wireless products/12.png" alt="Wireless12"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div id="wproduct13" class="col-xl-2"><img class="imagebottom-carousel6"
                  src="img/wireless products/13.png" alt="Wireless13"></div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselIndicators4" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselIndicators4" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    </div>

    <!--Home Entertainment-->
    <div class="shop">

      <div class="htext">
        <h1>Top products in Home Entertainment &nbsp;<a class="anchor" href="anchors.html">Shop now</a></h1>
      </div>
      <!--Slider-->
      <div id="carouselIndicators5" class="carousel slide" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators">
          <li data-target="#carouselIndicators5" data-slide-to="0" class="active"></li>
          <li data-target="#carouselIndicators5" data-slide-to="1"></li>
          <li data-target="#carouselIndicators5" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div id="home1" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel5"
                  src="img/home entertainment/1.png" alt="Entertainment1"></div>
              <div id="home2" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel5"
                  src="img/home entertainment/2.png" alt="Entertainment2"></div>
              <div id="home3" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel7"
                  src="img/home entertainment/3.png" alt="Entertainment3"></div>
              <div id="home4" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel7"
                  src="img/home entertainment/4.png" alt="Entertainment4"></div>
              <div id="home5" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel7"
                  src="img/home entertainment/5.png" alt="Entertainment5"></div>
              <div id="home6" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel7"
                  src="img/home entertainment/6.png" alt="Entertainment6"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div id="home7" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel4"
                  src="img/home entertainment/7.png" alt="Entertainment7"></div>
              <div id="home8" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel7"
                  src="img/home entertainment/8.png" alt="Entertainment8"></div>
              <div id="home9" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel7"
                  src="img/home entertainment/9.png" alt="Entertainment9"></div>
              <div id="home10" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel7"
                  src="img/home entertainment/10.png" alt="Entertainment10"></div>
              <div id="home11" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel9"
                  src="img/home entertainment/11.png" alt="Entertainment11"></div>
              <div id="home12" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel7"
                  src="img/home entertainment/12.png" alt="Entertainment12"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div id="home13" class="col-xl-2"><img class="imagebottom-carousel9" src="img/home entertainment/13.png"
                  alt="Entertainment13"></div>
              <div id="home14" class="col-xl-2"><img class="imagebottom-carousel9" src="img/home entertainment/14.png"
                  alt="Entertainment14"></div>
              <div id="home15" class="col-xl-2"><img class="imagebottom-carousel8" src="img/home entertainment/15.png"
                  alt="Entertainment15"></div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselIndicators5" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselIndicators5" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    </div>
  </div>

  <div class="upperrecommendations">
    <hr>
  </div>
  <div class="recommendations">
    <div class="text-center">
      <h1>We Have Recommendations for You</h1>
    </div>
    <div class="bottom-sign-button"><button type="button">Sign in to see personalized recommendations </button></div><br>
    <!--carousel-recommendations-->
    <!--Slider-->
    <div id="carouselIndicators6" class="carousel slide" data-ride="carousel" data-interval="false">
      <ol class="carousel-indicators">
        <li data-target="#carouselIndicators6" data-slide-to="0" class="active"></li>
        <li data-target="#carouselIndicators6" data-slide-to="1"></li>
        <li data-target="#carouselIndicators6" data-slide-to="2"></li>
        <li data-target="#carouselIndicators6" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div id="recommendation1" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel6"
                src="img/recommendations/1.png" alt="Recommendations1"></div>
            <div id="recommendation2" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                src="img/recommendations/2.png" alt="Recommendations2"></div>
            <div id="recommendation3" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel4"
                src="img/recommendations/3.png" alt="Recommendations3"></div>
            <div id="recommendation4" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                src="img/recommendations/4.png" alt="Recommendations4"></div>
            <div id="recommendation5" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                src="img/recommendations/5.png" alt="Recommendations5"></div>
            <div id="recommendation6" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel3"
                src="img/recommendations/6.png" alt="Recommendations6"></div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div id="recommendation7" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel3"
                src="img/recommendations/7.png" alt="Recommendations7"></div>
            <div id="recommendation8" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel4"
                src="img/recommendations/8.png" alt="Recommendations8"></div>
            <div id="recommendation9" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                src="img/recommendations/9.png" alt="Recommendations9"></div>
            <div id="recommendation10" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel5"
                src="img/recommendations/10.png" alt="Recommendations10"></div>
            <div id="recommendation11" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel1"
                src="img/recommendations/11.png" alt="Recommendations11"></div>
            <div id="recommendation12" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel5"
                src="img/recommendations/12.png" alt="Recommendations12"></div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div id="recommendation13" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel3"
                src="img/recommendations/13.png" alt="Recommendations13"></div>
            <div id="recommendation14" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel3"
                src="img/recommendations/14.png" alt="Recommendations14"></div>
            <div id="recommendation15" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel3"
                src="img/recommendations/15.png" alt="Recommendations15"></div>
            <div id="recommendation16" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                src="img/recommendations/16.png" alt="Recommendations16"></div>
            <div id="recommendation17" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                src="img/recommendations/17.png" alt="Recommendations17"></div>
            <div id="recommendation18" class="col-xl-2 col-md-3 col-4 "><img class="imagebottom-carousel2"
                src="img/recommendations/18.png" alt="Recommendations18"></div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div id="recommendation19" class="col-xl-2"><img class="imagebottom-carouselxl"
                src="img/recommendations/19.png" alt="Recommendations19"></div>
            <div id="recommendation20" class="col-xl-2"><img class="imagebottom-carouselxl"
                src="img/recommendations/20.png" alt="Recommendations20"></div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselIndicators6" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselIndicators6" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <footer>
    <div class="navfooter">
      <div class="backtop"><a href="index.html">Back to top</a></div>
      <div class="container">
        <div class="row navfooterrowbox">
          <div class="col-lg-3 col-md-6 col-12 navfooterboxlist">
            <ul>
              <div class="titulonavfooterlist1">Get to know us</div>
              <a href="#">
                <li class="navfooterlist1">Careers</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Blog</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">About Amazon</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Investor Relations</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Amazon Devices</li>
              </a>
            </ul>

          </div>
          <div class="col-lg-3 col-md-6 col-12 navfooterboxlist">
            <ul>
              <div class="titulonavfooterlist1">Make Money with Us</div>
              <a href="#">
                <li class="navfooterlist1">Sell on Amazon</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Sell Your Services on Amazon</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Sell on Amazon Business</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Sell Your Apps on Amazon</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Become an Affiliate</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Advertise Your Products</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Self-Publish with Us</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">> See all </li>
              </a>
            </ul>

          </div>
          <div class="col-lg-3 col-md-6 col-12 navfooterboxlist">
            <ul>
              <div class="titulonavfooterlist1">Amazon Payment Products</div>
              <a href="#">
                <li class="navfooterlist1">Amazon Business Card</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Shop with Points</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Reload Your Balance</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Amazon Currency Converter</li>
              </a>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-12 navfooterboxlist">
            <ul>
              <div class="titulonavfooterlist1">Let Us Help You</div>
              <a href="#">
                <li class="navfooterlist1">Your Account</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Your Orders</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Shipping Rates & Policies</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Returns & Replacements</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Manage Your Content And Devices</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Amazon Assistant</li>
              </a>
              <a href="#">
                <li class="navfooterlist1">Help</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div id="navfooter-hr">
        <hr style="background-color: #3A4553">
      </div>
      <div class="bottom-amazon-language-us">
        <div class="row">
          <div><img id="bottom-logo" src="img/logo-amazon.png" alt="logo-amazon"></div>
          <form id="form-search-buttons" class="form-inline">
            <div class="col-lg-4 col-md-12 col-12">
              <div id="bottom-language"><button type="button">English</button></div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div id="bottom-coinage"><button type="button">USD-U.S. Dollar</button></div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div id="bottom-country"><button type="button">United States</button></div>
            </div>
          </form>
        </div>
      </div>
      <div class="bottom-options">
        <table class="tablebox">
            <tbody>
              <tr class="tablerow">
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Amazon Music<br><span>Stream millions<br>of songs</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Amazon Advertising<br><span>Find,attract, and<br>engage customers</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Amazon Drive<br><span>Cloud storage<br>from Amazon</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">6pm<br><span>Score deals<br>on fashion brands</span></a>
                  </td>
                    <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">AbeBooks<br><span>Books, art<br>& collectibles</span></a>
                  </td>
                    <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">ACX<br><span>Audiobook Publishing<br>Made Easy</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Alexa<br><span>Actionable Analytics<br>for the Web</span></a>
                  </td>
                  <td class="navdescspacer"></td>
              </tr>
              <tr>
                  <td>&nbsp;</td>
              </tr>
              <tr class="tablerow">
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Amazon Business<br><span>Everything For<br>Your Business</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">AmazonGlobal<br><span>Ship Orders<br>Internationally</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Home Services<br><span>Handpicked Pros<br>Happiness Guarantee</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Amazon Inspire<br><span>Digital Educational<br>Resources</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Amazon Rapids<br><span>Fun stories for<br>kids on the go</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Amazon Web Services<br><span>Scalable Cloud<br>Computing Services</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Audible<br><span>Listen to Books & Original<br>Audio Performances</span></a>
                  </td>
                  <td class="navdescspacer"></td>
              </tr>
              <tr>
                  <td>&nbsp;</td>
              </tr>
              <tr class="tablerow">
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Book Depository<br><span>Books With Free<br>Delivery Worldwide</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Box Office Mojo<br><span>Find Movie<br>Box Office Data</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">ComiXology<br><span>Thousands of<br>Digital Comics</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">CreateSpace<br><span>Indie Print Publishing<br>Made Easy</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">DPReview<br><span>Digital<br>Photography</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">East Dane<br><span>Designer Men's<br>Fashion</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Fabric<br><span>Sewing, Quilting<br>& Knitting</span></a>
                  </td>
                  <td class="navdescspacer"></td>
              </tr>
              <tr>
                  <td>&nbsp;</td>
              </tr>
              <tr class="tablerow">
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Goodreads<br><span>Book reviews<br>& recommendations</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">IMDb<br><span>Movies, TV<br>& Celebrities</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">IMDbPro<br><span>Get Info Entertainment<br>Professionals Need</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Junglee.com<br><span>Shop Online<br>in India</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Kindle Direct Publishing<br><span>Indie Digital Publishing<br>Made Easy</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Prime Video Direct<br><span>Video Distribution<br>Made Easy</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Shopbop<br><span>Designer<br>Fashion Brands</span></a>
                  </td>
                  <td class="navdescspacer"></td>
              </tr>
              <tr>
                  <td>&nbsp;</td>
              </tr>
              <tr class="tablerow">
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Woot!<br><span>Deals and<br>Shenanigans</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Zappos<br><span>Shoes &<br>Clothing</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Souq.com<br><span>Shop Online in<br>the Middle East</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Subscribe with Amazon<br><span>Discover & try<br>subscription services</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">PillPack<br><span>Pharmacy Simplified</span></a>
                  </td>
                  <td class="navdescspacer"></td>
                  <td class="tablebottomitem">
                    <a href="" class="table-a">Amazon Second Chance<br><span>Pass it on, trade it in,<br>give it a second life</span></a>
                  </td>
              </tr>
            </tbody>
        </table><br>  
      </div>
      <div class="bottom-copyright-text">
          <a href="#">Conditions of Use</a><a href="#">Privacy Notice</a><a href="#">Interest-Based Ads</a><span
            id="copyrights">&copy 1996-2019, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  </footer>

  <script src="js/popper.min.js"></script>
  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/controlador.js"></script>
  <script src="formularios/js/controlador.js"></script>
 

</body>

</html>