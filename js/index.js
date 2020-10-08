/*scrollbar width*/
window.addEventListener("scroll" , event => {
  let scrollTop =document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progressElement = 100 * scrollTop / scrollHeight ;
  document.querySelector("#progress").style.width = progressElement + "%";
})
/*end of scrollbar width*/

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
      $('.project').not('.'+projectList).hide('300');
      $('.project').filter('.'+projectList).show('300');
    }
  })
  // add active class on selected button
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})
/*end of projects filter */


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5f7e8bf14704467e89f59c2c/1ek37123r';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();