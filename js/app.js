const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active")
});



const swiper = new Swiper('.wine__swiper', {
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});




function openCity(evt, cityName) {

  let i, tabcontent, tablinks;


  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }


  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += "block";
}



const vacal__swiper = new Swiper('.vacal__swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

});

const slid = new Swiper(".amazing__swiper", {
  slidesPerView: 2,
  loop: true,
  centeredSlides: true,
  pagination: {
      el: ".amazing-pagination",
      clickable: true,
  },

  spaceBetween: 0,
  breakpoints: {
      
      320: {
          slidesPerView:1,
      },
      1300: {
          slidesPerView: 3,
      },
  },
});

const features__swiper = new Swiper('.features__swiper', {
  loop: true,

  navigation: {
    nextEl: '.features-button-next',
    prevEl: '.features-button-prev',
  },

});