let loadmorebtn3 = document.querySelector("#loading");
let currentItem3 = 4;

loadmorebtn3.onclick = () =>{
   let boxes3 = [...document.querySelectorAll(' .box3 ')];
   for(var i = currentItem3; i< currentItem3 +4 ;i++){
      boxes3[i].style.display = 'block';
   }
   currentItem3 +=4;
}