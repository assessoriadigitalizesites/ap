$("body").on("click", ".services-banner-btn, .whatsapp", function() {
window.open("https://wa.me/5511958993999?text=Ol%C3%A1,%20gostaria%20de%20fazer%20uma%20avalia%C3%A7%C3%A3o%20do%20meu%20im%C3%B3vel...", "_blank");
});
$(document).ready(function(){
  var height = window.screen.width < 768 ? 30 : 100;
  $(window).scroll(function (event) {
    if (window.scrollY > height) {
      $(".header").addClass("has-background");
    } else {
      $(".header").removeClass("has-background");
    }
  });

  // slideshow()

  // setInterval(function() {
  //   slideshow();
  // }, 16000)

  function slideshow () {
    setTimeout(function() {
      $(".banner").removeClass("banner-1");
      $(".banner").removeClass("banner-3");
      $(".banner").removeClass("banner-4");
      $(".banner").addClass("banner-2");
    }, 4000);

    setTimeout(function() {
      $(".banner").removeClass("banner-1");
      $(".banner").removeClass("banner-2");
      $(".banner").removeClass("banner-4");
      $(".banner").addClass("banner-3");
    }, 8000);

    setTimeout(function() {
      $(".banner").removeClass("banner-1");
      $(".banner").removeClass("banner-2");
      $(".banner").removeClass("banner-3");
      $(".banner").addClass("banner-4");
    }, 12000);

    setTimeout(function() {
      $(".banner").removeClass("banner-2");
      $(".banner").removeClass("banner-3");
      $(".banner").removeClass("banner-4");
      $(".banner").addClass("banner-1");
    }, 16000);
  }
});

$("body").on("click", ".header-menu-btn", function() {
  $(".header-menu").toggleClass("opened");
  $(".header-menu-btn").toggleClass("opened");
});

$("body").on("click", ".header-menu-item a", function() {
  $(".header-menu").removeClass("opened");
  $(".header-menu-btn").removeClass("opened");
});

// $("body").on("click", ".ambiente", function() {
//   window.open("https://casactual.lojavirtualnuvem.com.br/" + $(this).attr("data-target") + "/", "_blank");
// });