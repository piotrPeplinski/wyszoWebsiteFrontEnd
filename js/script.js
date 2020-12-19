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
});	