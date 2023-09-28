let loadmorebtn8 = document.querySelector("#member");
let currentItem8 = 4;

loadmorebtn8.onclick = () =>{
   let boxes8 = [...document.querySelectorAll(' .box8 ')];
   for(var i = currentItem8; i< currentItem8 +4 ;i++){
      boxes8[i].style.display = 'block';
   }
   currentItem8 +=4;
}