$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay:true,
    });
})
//menu
  const nav = document.querySelector('.menu');
  const navBtn = document.querySelector('.header__menu-btn');
  const BtnImg = document.querySelector('.menu__btn');
  
  navBtn.onclick = function(){
      if(nav.classList.toggle('open')){
          BtnImg.src = './img/header/nav_close.svg';
      }else{
          BtnImg.src = './img/header/menu.svg';
      }
  }