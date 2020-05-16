'use strict';
{
  const ans = document.getElementById('ans')
  const result = document.getElementById('result');

  ans.addEventListener('blur', () => {
    let parse = parseInt(ans.value,10);
    if (parse === 11) {
      result.innerHTML = 'あたり';
    } else { 
      result.innerHTML = 'はずれ';
    }
    ans.value = '';
  });







}