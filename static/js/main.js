$(function () {
  // Menu
  $( ".button-date button" ).click(function() {
    $( ".button-stage .any" ).click();
    $('.button-stage button, .other-stage button').each( function() {
        $( this ).addClass( "active" );
        $( ".button-date" ).removeClass( "mobile-active" );
    });
  });
  $( ".button-stage button, .other-stage button" ).click(function() {
    $('.button-stage button, .other-stage button').each( function() {
        $( this ).removeClass( "active" );
        $( ".stage" ).removeClass( "mobile-active" );
    });
  });
  $( ".select-date" ).click(function() {
    $( ".button-date" ).toggleClass( "mobile-active" );
    $( ".stage" ).removeClass( "mobile-active" );
  });
  $( ".select-stage" ).click(function() {
    $( ".stage" ).toggleClass( "mobile-active" );
    $( ".button-date" ).removeClass( "mobile-active" );
  });

  $( ".open-menu" ).click(function() {
    $( ".menu" ).addClass( "open" );
  });
  $( ".close, .menu-link" ).click(function() {
    $( ".menu" ).removeClass( "open" );
  });
  if ($(window).width() > 599) {
    if(document.getElementById("header") === null){}else{
        window.onscroll = function() {scrollfunction()};
        var header = document.getElementById("header");
        var logo = document.getElementById("sticky-logo");
        var sticky = header.offsetHeight;
        function scrollfunction() {
            if (window.pageYOffset > sticky) {
              header.classList.add("sticky");
              logo.classList.add("grab");
            } else {
              header.classList.remove("sticky");
              logo.classList.remove("grab");
            }
        }
    }
  }
  console.log('Main.js ready!')
})
