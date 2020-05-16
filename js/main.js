'use strict';
{
  const ans = document.getElementById('ans')
  const result = document.getElementById('result');
  const mondai = document.getElementById('mondai');

  let min = 0;
  let max = 10;
  let rand1 = Math.floor(Math.random() * (max + 1 - min))+min;
  let rand2 = Math.floor(Math.random() * (max + 1 - min))+min;

  mondai.innerHTML = `${rand1} + ${rand2} = ?`

  ans.addEventListener('blur', () => {

    let parse = parseInt(ans.value,10);
    result.classList.remove('none');

    if (parse === (rand1 + rand2)) {
      result.src = 'img/1.png';
    } else { 
      result.src = 'img/2.jpeg';
    }
    ans.value = '';

  });







}