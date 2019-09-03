// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
// const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initiale state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    // menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    // menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu state
    showMenu = false;
  }
}

$(document).ready(function () {

/* SCROLLDOWN FUNCTION */
  $('.scrollbar').click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $('#about').offset().top
      }, 400);
  });
});

// $(document).ready(function () {
//   /* vertical header (right-left-animation) */
//   $('.menu-btn').click(function(){
//      $(".menu").animate({
//        top: '+=80px'
//      }, 400);
//      $('.menu-nav-m').removeClass('show');
//      $('.menu-nav-m').removeClass('show');
//      // $(".menu-btn").fadeOut("fast");
//    });
//
//    $('.close').click(function(){
//      $(".menu").animate({
//        top: '-=80px'
//      }, 400);
//      // $(".menu-btn").fadeIn("fast");
//    });
// });

/* SHRINK HEADER */
/*
   on mobile screen(< 768px) the header position is fixed,
   on larger screen the header disappear after
   scrolling the page
*/
// window.onscroll = function() {shrinkHeader()};
//
// function shrinkHeader() {
// var width = $(window).width();
// var menu = document.querySelector(".menu");
//
//   if (width < 768) {
//     if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
//         menu.addClass = "test";
//     } else {
//         menu.className = "";
//     }
//   } else {
//     menu.className = "";
//     // document.querySelector(".cross").className = "disappear";
//   }
// }

/* SHRINK HEADER */
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  var width = $(window).width();

  if (width > 768) {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      menu.classList.add('desktop-shrink');
    } else {
      menu.classList.remove('desktop-shrink');
    }
  } else {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      menu.classList.add('mobile-shrink');
    } else {
      menu.classList.remove('mobile-shrink');
    }
  }
}


var data = {
  "thumb": [{
      "image": "img/thumb-one.jpeg",
      "title": "Holiday",
      "description": "Just some dummy content, lorem ipsum content to be replaced."
    },
    {
      "image": "img/thumb-five.jpeg",
      "title": "Keep in Mind",
      "description": "We'll take your measurements and walk you through all your suiting options."
    },
    {
      "image": "img/thumb-three.jpeg",
      "title": "Peace and Love",
      "description": "Just some dummy content, lorem ipsum content to be replaced."
    },
    {
      "image": "img/thumb-four.jpeg",
      "title": "No Fear",
      "description": "We'll take your measurements and walk you through all your suiting options."
    },
    {
      "image": "img/thumb-five.jpeg",
      "title": "More Holiday",
      "description": "Just some dummy content, lorem ipsum content to be replaced."
    },
    {
      "image": "img/thumb-six.jpeg",
      "title": "Yoga Time",
      "description": "We'll take your measurements and walk you through all your suiting options."
    }
  ]
}
// $(function() {
//    var thumbs = [];
//    $.getJSON('config.json', function(data) {
$.each(data.thumb, function(i, f) {
  var gridRow = "<a href='#' class='thumb'><div class='thumb-image' style='background-image: url(" + f.image + ");' data-aos='fade-up' data-aos-duration='1200'><span class='thumb-info'><div class='info-wrapper'><h3>" + f.title + "</h3><p>" +
    f.description + "</p></div><h5 class='details'>See Details</h5></span></div></a>"
  $(gridRow).appendTo("#grid .row");
});
