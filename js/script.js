$(document).ready(function () {

  /* ------------------------------- */
  /* READ MORE BOXES */
  /* ------------------------------- */

  /* OPENING */
  document.getElementById("popupLink1").onclick = function () {
    document.getElementById("popup1").style.display = "flex";
  };
  document.getElementById("popupLink2").onclick = function () {
    document.getElementById("popup2").style.display = "flex";
  };
  document.getElementById("popupLink3").onclick = function () {
    document.getElementById("popup3").style.display = "flex";
  };
  document.getElementById("popupLink4").onclick = function () {
    document.getElementById("popup4").style.display = "flex";
  };

  /* CLOSING */
  document.getElementById("close1").onclick = function () {
    document.getElementById("popup1").style.display = "none";
  };
  document.getElementById("close2").onclick = function () {
    document.getElementById("popup2").style.display = "none";
  };
  document.getElementById("close3").onclick = function () {
    document.getElementById("popup3").style.display = "none";
  };
  document.getElementById("close4").onclick = function () {
    document.getElementById("popup4").style.display = "none";
  };

  /* ------------------------------- */
  /* ANIMATIONS */
  /* ------------------------------- */
  $('.section-me').waypoint(function (direction) {
    $('.js-insta-me').addClass('animate__animated animate__fadeInLeftBig');
  }, { offset: '10%' });

  /* free section */
  $('.section-free').waypoint(function (direction) {
    $('.js-redu-cover').addClass('animate__animated animate__fadeInUpBig');
  }, { offset: '10%' });

  $('.section-free').waypoint(function (direction) {
    $('.js-free-email').addClass('animate__animated animate__heartBeat animate__delay-2s');
  }, { offset: '-10%' });

  /* Ebooks fade in */
  $('.section-ebooks').waypoint(function (direction) {
    $('.js-ebook-1').addClass('animate__animated animate__fadeInUpBig');
  }, { offset: '10%' });

  $('.section-ebooks').waypoint(function (direction) {
    $('.js-ebook-2').addClass('animate__animated animate__fadeInUpBig animate__delay-1s');
  }, { offset: '10%' });

  $('.section-ebooks').waypoint(function (direction) {
    $('.js-ebook-3').addClass('animate__animated animate__fadeInUpBig animate__delay-2s');
  }, { offset: '10%' });

  /* ------------------------------- */
  /* NAV */
  /* ------------------------------- */
  /* nav pop-up */
  $('.section-me').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  },
    {
      offset: '50px;'
    });
  /* nav burger */
  $('.nav-burger').click(function () {
    $('.main-nav').slideToggle(200)
    if ($('.nav-burger ion-icon').attr('name') == 'reorder-three') {
      $('.nav-burger ion-icon').attr('name', 'close')
    } else {
      $('.nav-burger ion-icon').attr('name', 'reorder-three')
    }
  });
  /* hiding nav-links after selecting section */
  if ($(window).width() <= 767) {
    $('.nav-hide').click(function () {
      $('.main-nav').slideToggle(200)
      if ($('.nav-burger ion-icon').attr('name') == 'reorder-three') {
        $('.nav-burger ion-icon').attr('name', 'close')
      } else {
        $('.nav-burger ion-icon').attr('name', 'reorder-three')
      }
    })
  }
  /* ------------------------------- */
  /* SCROLLING */
  /* ------------------------------- */
  /* HEADER BUTTONS */
  $(".js-offer").click(function () {
    $('html, body').animate({
      scrollTop: $(".section-oferta").offset().top - 50
    }, 800);
  });
  $(".js-free").click(function () {
    $('html, body').animate({
      scrollTop: $(".section-free").offset().top - 50
    }, 800);
  });
  /* OFFER BUTTONS */
  $(".js-contact").click(function () {
    $('html, body').animate({
      scrollTop: $(".section-contact").offset().top - 50
    }, 1000);
  });

  /* SNIPPET FOR NAV SCROLLS */
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 40
          }, 600
          );
        }
      }
    });
  /* HIDE NAVBAR WHILE SCROLLING DOWN */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      if ($(window).width() <= 767) {
        document.getElementById("navbar").style.top = "-55px";
      } else if ($(window).width() >= 768 && $(window).width() <= 1023) {
        document.getElementById("navbar").style.top = "-63px";
      } else if ($(window).width() >= 1024 && $(window).width() <= 1199) {
        document.getElementById("navbar").style.top = "-68px";
      } else if ($(window).width() >= 1200){
        document.getElementById("navbar").style.top = "-84px";
      }
    }
    prevScrollpos = currentScrollPos;
  }
});	