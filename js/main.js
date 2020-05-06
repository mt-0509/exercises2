'use strict';
{
  const input = document.getElementById('input');
  const total = document.getElementById('total');
  const tax = document.getElementById('tax');

  input.addEventListener('change', () => {
    if (input.value !== "") {
      // 消費税の計算
      tax.textContent = Math.floor(input.value * 0.1);
      
      // 合計金額の計算
      total.textContent = Math.floor(input.value * 1.1);
    } else {
      tax.textContent = "";
      total.textContent = "";
    }


  })
}