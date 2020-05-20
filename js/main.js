'use strict';
{
  // id属性を取得
  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let p = document.getElementById('p');

  // 開始ボタンが押された時間を取得する
  let startTime = start.addEventListener('click', () => {
    let startTime = new Date();
    p.textContent = '';

    // ボタンの表示・非表示切り替え
    start.disabled = true;
    stop.disabled = false;
    
    // 終了ボタンが押された時間を取得する
    stop.addEventListener('click', () => {
      let stopTime = new Date();
      
      // 差分を求める
      let diffMsec = stopTime - startTime;
      let diffSec = diffMsec / 1000;
      let showSec = Math.round(diffSec);
      p.textContent = `開始を押してから${showSec}秒後に終了しました`

      // ループさせるため
      start.disabled = false;
      stop.disabled = true;
      startTime = '';
      stopTime = '';
    });
  });

  







}
