//vanillaTilt Library
var VanillaTilt=function(){"use strict";class t{constructor(e,i={}){if(!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.glare=t.isSettingTrue(this.settings.glare),this.glarePrerender=t.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=t.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=t.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.updateInitialPosition()}static isSettingTrue(t){return""===t||!0===t||1===t}getElementListener(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){const t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(t){if(null===t.gamma||null===t.beta)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,s=e/this.width,n=i/this.height,l=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/s,a=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/n;null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:l+this.left,clientY:a+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform=`perspective(${this.settings.perspective}px) `+"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}updateInitialPosition(){if(0===this.settings.startX&&0===this.settings.startY)return;this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}getValues(){let t,e;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const t=document.createElement("div");t.classList.add("js-tilt-glare");const e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:`${2*this.element.offsetWidth}px`,height:`${2*this.element.offsetWidth}px`,transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))}updateGlareSize(){this.glare&&Object.assign(this.glareElement.style,{width:`${2*this.element.offsetWidth}`,height:`${2*this.element.offsetWidth}`})}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){let t=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(t)}catch(e){i[s]=t}}else i[s]=e[s];return i}static init(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(e=>{"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))})}}return"undefined"!=typeof document&&(window.VanillaTilt=t,t.init(document.querySelectorAll("[data-tilt]"))),t}();
//end of vanilaTilt Libarary

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
      $('.project').show('50');
    }
    else
    {
      $('.project').not('.'+projectList).hide('50' ,function(){
        $('.project').filter('.'+projectList).show('50');
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
  max: 30,
  speed: 6000,
  transition: true
});
/*3D animator*/

/*Services section show and hide cards */
// $(function() {
//   $( ".service-data p" ).hide();
//   $( ".services-content" )
//   .mouseenter(function() {
//     $( ".service-data p" , this ).slideDown(300);
//   })
//   .mouseleave(function() {
//     $( ".service-data p", this  ).slideUp(300);
//   });
// });
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

//light mode with local storage
let lightMode = localStorage.getItem('lightMode');
const lightModeToggle = document.querySelector('#lightModeToggle');

const enableLightMode = () =>{
// add the class lightmode to the body
$('body').addClass('lightMode');
$('#lightModeToggle').removeClass('disabled');
$('#lightModeToggle').addClass('enabled');
$('nav').removeClass('navbar-dark');
$('nav').addClass('navbar-light');
//update lightmode at the local storage
localStorage.setItem('lightMode', 'enabled');

}

const disableLightMode = () =>{
  // remove the class lightmode to the body
  $('body').removeClass('lightMode');
  $('#lightModeToggle').removeClass('enabled');
  $('#lightModeToggle').addClass('disabled');
  $('nav').addClass('navbar-dark');
  $('nav').removeClass('navbar-light');
  //update lightmode at the local storage
  localStorage.setItem('lightMode', 'disabled');
}

//for remembering what was saved last time
  if ( lightMode === 'enabled')
    enableLightMode();


lightModeToggle.addEventListener("click", () => {
  lightMode = localStorage.getItem('lightMode');
  if (lightMode !== 'enabled')
  {
    enableLightMode();
    $('body').addClass('time');
  }
  else
  {
    disableLightMode();
    $('body').removeClass('time');
  }
});