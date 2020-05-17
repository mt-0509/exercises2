'use strict';
{
  const ans = document.getElementById('ans');
  const result = document.getElementById('result');
  const mondaibun = document.getElementById('mondaibun');
  const next = document.getElementById('next');
  const onemore = document.getElementById('onemore');
  const p = document.getElementById('p');

  // 問題を生成する
  const mondai = () => {
    let min = 0;
    let max = 10;
    let rand1;
    let rand2;

    const x = () => {
      rand1 = Math.floor(Math.random() * (max + 1 - min))+min;
      rand2 = Math.floor(Math.random() * (max + 1 - min))+min;
    
      mondaibun.innerHTML = `${rand1} + ${rand2} = ?`
    }
    x();
    let seikai = 0;
  
    ans.addEventListener('blur', () => {
  
      let parse = parseInt(ans.value,10);
      result.classList.remove('none');
  
      if (parse === (rand1 + rand2)) {
        result.src = 'img/1.png';
        next.classList.remove('none');
        seikai++;
        next.addEventListener('click', () => {
          next.classList.add('none');
          result.classList.add('none');
          x();

        })
  
      } else { 
        result.src = 'img/2.jpeg';
        onemore.classList.remove('none');
        seikai = 0;
        onemore.addEventListener('click', () => {
          x();
          onemore.classList.add('none');
          result.classList.add('none')
        });

      }
      ans.value = '';
      if (seikai >= 3) {
        result.src = 'img/3.png';
        next.classList.add('none');
        ans.classList.add('none');
        p.classList.add('none');
        mondaibun.classList.add('none');
      }
  
    });
  }
  mondai();







}
