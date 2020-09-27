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


/*mix it up libaray initialize function*/
var mixer = mixitup('#projects .row', {
  selectors: {
      target: '.mix'
  }
});
