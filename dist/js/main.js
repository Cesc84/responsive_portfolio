// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
// const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const btnLineMenu = document.querySelector('.btn-line');
const navLink = document.querySelector('.nav-link');
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

// $(document).ready(function () {
// /* SCROLLDOWN FUNCTION */
//   $('.scrollbar').click(function() {
//       $([document.documentElement, document.body]).animate({
//           scrollTop: $('#about').offset().top
//       }, 400);
//   });
// });


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

/*
 function to show the banner once the user
 click one card of the first row and 3 cards of the second row
*/
$(document).ready(function(){

  /*
  *** first row - function to select the developer side ***
  */
  var $side = $('.side .thumb'),
  $tech = $('.tech .thumb');
  // side card
  $side.click( function(){
    $this = $(this);
    $side.removeClass('selected');
    $this.addClass('selected');

    // check if we can show footer
    popupFooter();
});

// Tech cards
$tech.click( function(){
  $this = $(this);

  if( $this.hasClass('selected') ) {
    $this.removeClass('selected');
    console.log('Was selected before. Set it unselected.');
    console.log('We have less than 3 features selected');
  } else {
    if( $('.features .card.selected').length <3 ) {
      $(this).addClass('selected');
      console.log('We have 3 cards selected');
    } else {
      // do nothing as 3 cards selected
      console.log('We have 3 cards selected yet');
    }
  }

  // check if we can show footer
  popupFooter();

});

function popupFooter() {

  if( $('.side .thumb.selected').length && $('.tech .thumb.selected').length === 3 ) {
    $('#pop-up').css('display', 'block');
    console.log('Footer info ON');
  } else {
    $('#pop-up').css('display', 'none');
    console.log('Footer info OFF');
  }
}
});
/* CV page - Close PopUp */
function resetGrid() {
  $('.cv .close').click(function() {
    $('.cv-thumb.selected').removeClass('selected');
    $('#pop-up').hide();
  });
}
resetGrid();


/* TYPED - Title typed */
var typed = new Typed('.title', {
  strings: ["Francesco D'Aloe'"],
  typeSpeed: 30,
  backDelay: 750,
  loop: false, // loop on or off (true or false)
  loopCount: false
});

var typed = new Typed('.subtitle', {
  strings: ["Front-end Developer"],
  typeSpeed: 30,
  loop: false, // loop on or off (true or false)
  loopCount: false
});
