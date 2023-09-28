let loadmorebtn6 = document.querySelector("#video");
let currentItem6 = 4;

loadmorebtn6.onclick = () =>{
   let boxes6 = [...document.querySelectorAll(' .video3 ')];
   for(var i = currentItem6; i< currentItem6 +4 ;i++){
      boxes6[i].style.display = 'block';
   }
   currentItem6 +=4;
}