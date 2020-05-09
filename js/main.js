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
  const list = {one:'img/1.png',two:'img/2.png',three: 'img/3.png',four:'img/4.png'}
  let num = 0;

  const pic = document.getElementById('pic');
  pic.addEventListener('mouseover', () => {
    let id = setInterval(change,1000);

    function change() {
      switch (num) {
        case 0:
          pic.src = list.one;
          num++;
          break; 
        case 1:
          pic.src = list.two;
          num++;
          break;
        case 2:
          pic.src = list.three;
          num++;
          break;
        case 3:
          pic.src = list.four;
          num = 0;
          break;
      }
    };

    pic.addEventListener('mouseleave', () => {
      clearTimeout(id);
    })
  });





  





}