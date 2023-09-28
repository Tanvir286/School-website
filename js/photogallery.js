let loadmorebtn5 = document.querySelector("#photo");
let currentItem5 = 4;

loadmorebtn5.onclick = () =>{
   let boxes5 = [...document.querySelectorAll(' .box5 ')];
   for(var i = currentItem5; i< currentItem5 +4 ;i++){
      boxes5[i].style.display = 'block';
   }
   currentItem5 +=4;
}