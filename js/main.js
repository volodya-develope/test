$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__items').toggleClass('menu__items--active')
  });


  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("logo").style.fontSize = "1em";
    } else {
      document.getElementById("logo").style.fontSize = "1.3em";
    }
  }

});