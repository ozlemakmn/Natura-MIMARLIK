let search = document.querySelector("#tel");
let myform = document.querySelector(".tel-form");
let menubar = document.querySelector("#menu-bar")
let mymenubar = document.querySelector(".navbar")



tel.onclick = () =>{
    myform.classList.toggle('active')
    mymenubar.classList.remove("active")
}

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mymenubar.classList.toggle("active")
    myform.classList.remove('active')
}


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 


	





















































// let menubar = document.querySelector('#menu-bar');
// let mycart = document.querySelector('#cart');
// let opencart = document.querySelector('.add-cart');
// let mynav = document.querySelector('.navbar');


// menubar.onclick = () =>{
//     menubar.classList.toggle('fa-times')
//     mynav.classList.toggle('active')
// }

// mycart.onclick = () =>{

//     opencart.classList.toggle('active')

// }

