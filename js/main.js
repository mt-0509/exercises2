'use strict';
{
  window.onload = () => {
    // 現在の日付を取得する
    let date1 = new Date();
    let dnum1 = date1.getTime();
    
    // 未来の日付を取得する(年末)
    let date2 = new Date(2020, 11, 31);
    let dnum2 = date2.getTime();
    
  
    // 未来と現在の差分を求める
    let diffMsec = dnum2 - dnum1;
    let diffDays = diffMsec / (1000 * 60 * 60 * 24);
    let showDays = Math.ceil(diffDays);

    // 表示する
    let p = document.getElementById('p');
    p.textContent = `あと ${showDays} 日`;
  };








}
