'use strict';
{
  const ans = document.getElementById('ans')
  const result = document.getElementById('result');
  let min = 0;
  let max = 10;
  let rand = Math.floor(Math.random() * (max + 1 - min))+min;
  console.log(rand);

  ans.addEventListener('blur', () => {

    let parse = parseInt(ans.value,10);
    result.classList.remove('none');

    if (parse === rand) {
      result.src = 'img/1.png';
    } else { 
      result.src = 'img/2.jpeg';
    }
    ans.value = '';

  });







}