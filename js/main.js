'use strict';
{
  const src = ["img/1.png","img/2.png","img/3.png","img/4.png"];
  let num1 = 0;
  let num2 = 0;
  
  document.getElementById('btn1').addEventListener('click', () => {
    
    if (num1 < src.length - 1) {
      num1 ++;
      document.getElementById('pic1').src = src[num1];
    } else {
      num1 = 0;
      document.getElementById('pic1').src = src[num1];
    }
  })

  document.getElementById('btn2').addEventListener('click', () => {
    num2 = Math.floor(Math.random() * src.length);
    document.getElementById('pic2').src = src[num2];
  })

}