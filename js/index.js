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