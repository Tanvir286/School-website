// Counter js

$(document).ready(function(){
   $(".counter").counterUp({
       delay:40,
       time:7900
   });
 });
 
 
 // Counter js
 
 
 
 // swiper js
 
 var swiper = new Swiper(".mySwiper", {
   slidesPerView: 4,
   spaceBetween: 30,
   loop: true,
   speed:1000,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });
 
 //  All member
 
 let loadmorebtn = document.querySelector("#load");
 let currentItem = 4;
 
 loadmorebtn.onclick = () =>{
    let boxes = [...document.querySelectorAll(' .box ')];
    for(var i = currentItem; i< currentItem +4 ;i++){
       boxes[i].style.display = 'block';
    }
    currentItem +=4;
 }
 
 // All picture
 
 let loadmorebtn2 = document.querySelector("#hi");
 let currentItem2 = 4;
 
 loadmorebtn2.onclick = () =>{
    let boxes2 = [...document.querySelectorAll(' .dd ')];
    for(var i = currentItem2; i< currentItem2 +4 ;i++){
       boxes2[i].style.display = 'block';
    }
    currentItem2 +=4;
 }
 
 
 //All teachers
 let loadmorebtn11 = document.querySelector("#loading11");
let currentItem11 = 4;

loadmorebtn11.onclick = () =>{
   let boxes11 = [...document.querySelectorAll(' .box31 ')];
   for(var i = currentItem11; i< currentItem11 +4 ;i++){
      boxes11[i].style.display = 'block';
   }
   currentItem11 +=4;
}

//navbar
const navLinks = document.querySelector('.nav-links')
         function onToggleMenu(e){
             e.name = e.name === 'menu' ? 'close' : 'menu'
             navLinks.classList.toggle('left-[0.1%]')
         }

//contact         

