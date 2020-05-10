'use strict';
{
  // 1 配列とif文を使った繰り返し処理
  const list = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png'];
  let num = 0;

  const pic = document.getElementById('pic');

  pic.addEventListener('mouseover', () => {
    let id = setInterval(change,1000);
  
    function change () {
      if (num < list.length - 1) {
        num++;
        pic.src = list[num]; 
      } else {
        num = 0;
        pic.src = list[num] 
      }
    }

    pic.addEventListener('mouseleave', () => {
      clearTimeout(id);
    });
  });

  // 2 オブジェクトとswitch文を使った繰り返し処理
  const list = [
    {img:'img/1.png'},
    {img:'img/2.png'},
    {img:'img/3.png'},
    {img:'img/4.png'}
  ];
  
  const pic = document.getElementById('pic');
  let num = 0;
  

  const  change = () => {
    num < list.length - 1 ? num++ : num = 0;
    pic.src = list[num].img
  }

  pic.addEventListener('mouseover', () => {
    let id = setInterval(change,500);
    
    pic.addEventListener('mouseleave', () => {
      clearTimeout(id);
    })
  });





  





}