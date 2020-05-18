'use strict';
{
  const text = document.getElementById('text');
  const btn = document.getElementById('btn');

  function isNumber(numVal){
    // チェック条件パターン
    var pattern = /^[-]?([1-9]\d*|0)(\.\d+)?$/;
    // 数値チェック
    return pattern.test(numVal);
  }
  

  btn.addEventListener('click', () => {
    if (isNumber(text.value)) {
      p.innerHTML = 'OK'
    } else {
      p.innerHTML = 'NO'
    }
  })
}