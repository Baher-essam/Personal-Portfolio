/*scrollbar width*/
window.addEventListener("scroll" , event => {
  progressBar();
  dotsRotate();
  endSite();
})
/*end of scrollbar width*/

function progressBar(){
  let scrollTop =document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progressElement = 100 * scrollTop / scrollHeight ;
  document.querySelector("#progress").style.width = progressElement + "%";
};

function dotsRotate(){
  
  let imageScroll = $('.dots1');
  imageScroll.css('transform' ,'rotate('+window.pageYOffset/8 +'deg)');
};

function endSite(){
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  if(Math.ceil(scrollable) === scrolled)
  {
    console.log('success');
  }
};

//start of navbar chnage color on scroll
$(window).scroll(function(){
$('nav').toggleClass('scrolled' , $(this).scrollTop()>150);
})
//end of navbar chnage color on scroll

/*AOS libaray initialize function */
$(function() {
  AOS.init();
});


/*start of projects filter */
$(document).ready(function(){
  //defult active list *all*
  $('.list').first().addClass('active');
  
  $('.list').click(function(){
    const projectList = $(this).attr('data-filter');
    if(projectList == 'all')
    {
      $('.project').show('300');
    }
    else
    {
      $('.project').not('.'+projectList).hide('300' ,function(){
        $('.project').filter('.'+projectList).show('300');
      });
    
    }
  })
  // add active class on selected button
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})
/*end of projects filter */

/*start of live chat*/
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5f7e8bf14704467e89f59c2c/1ek37123r';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
/*end of live chat*/

/*3D animator*/
VanillaTilt.init(document.querySelectorAll(".service-animate"), {
  max: 15,
  speed: 6000,
  transition: true
});
/*3D animator*/

/*Services section show and hide cards */
$(function() {
  $( ".service-data p" ).hide();
  $( ".services-content" )
  .mouseenter(function() {
    $( ".service-data p" , this ).slideDown(300);
  })
  .mouseleave(function() {
    $( ".service-data p", this  ).slideUp(300);
  });
});
/*Services section show and hide cards */

$(function() {
  $( ".dots" ).clone().appendTo( ".about-me-photo" );
  $( ".dots").first().clone().appendTo("#aboutMe").addClass('dots1');
});


//loader

$(window).on('load', function () {


  $('sk-cube-grid').fadeOut(1000);
  $('.loader').addClass('test');
});

//navbar
let home = $('#home').offset().top;
let aboutMe = $('#aboutMe').offset().top;
let services = $('#services').offset().top;
let projects = $('#projects').offset().top;
let contact = $('#contact').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= home && scrollPos < aboutMe) {
    $('.nav-item').removeClass('active');
    $('.nav-item:nth-child(1)').addClass('active');
  } else if (scrollPos >= aboutMe && scrollPos < services) {
    $('.nav-item').removeClass('active');
    $('.nav-item:nth-child(2)').addClass('active');
   } 
  // else if (scrollPos >= services && scrollPos < projects) {
  //   $('.nav-item').removeClass('active');
  //   $('.nav-item:nth-child(3)').addClass('active');
  // } 
  else if (scrollPos >= services && scrollPos < projects) {
    $('.nav-item').removeClass('active');
    $('.nav-item:nth-child(4)').addClass('active');
  } else if (scrollPos >= projects && scrollPos < contact) {
    $('.nav-item').removeClass('active');
    $('.nav-item:nth-child(5)').addClass('active');
  } else if (scrollPos >= contact) {
    $('.nav-item').removeClass('active');
    $('.nav-item:nth-child(6)').addClass('active');
   }
});

//navbar small screen toggle btn

$('.navbar-toggler').click(function () {

  $('.collapse-group').toggleClass('active');
  $('.bg').toggleClass('active');
});
//navbar small screen toggle links
$('.nav-item').click(function () {
  $('.collapse-group').toggleClass('active');
  $('.bg').toggleClass('active');
  $('.navbar-collapse').toggleClass('show');
});