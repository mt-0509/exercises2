
'use strict';
{
  // id属性を取得する
  const ans = document.getElementById('ans');
  const result = document.getElementById('result');
  const mondaibun = document.getElementById('mondaibun');
  const next = document.getElementById('next');
  const onemore = document.getElementById('onemore');
  const p = document.getElementById('p');
  const p2 = document.getElementById('p2');

  // スタート
  let wrapper = document.getElementById('wrapper');
  let startBtn = document.getElementById('startBtn');

  // 非表示にしておく
  onemore.classList.add('none');
  wrapper.classList.toggle('none');
  result.classList.add('none');

  // 問題開始
  startBtn.addEventListener('click', () => {
    // 非表示にする
    startBtn.classList.toggle('none');
    
    // 非表示を解除
    wrapper.classList.remove('none');
    
    // スタートした時間を取得する
    let startTime = new Date();
    
    // 問題の正解数
    let seikai = 0;
    
    // 問題を作成する関数
    const mondai = () => {
      let min = 0;
      let max = 10;
      let rand1;
      let rand2;
      
      const change = () => {
        rand1 = Math.floor(Math.random() * (max + 1 - min)) + min;
        rand2 = Math.floor(Math.random() * (max + 1 - min)) + min;
        mondaibun.innerText = `${rand1} + ${rand2} = ?`
        ans.disabled = false;
        result.classList.add('none');
      }
      change();

      ans.addEventListener('blur', () => {
  
        // 数字かどうかを判定する関数
        function isNumber(numVal) {
          // チェック条件パターン
          var pattern = /^[-]?([1-9]\d*|0)(\.\d+)?$/;
          // 数値チェック
          return pattern.test(numVal);
        }
  
        let parse = parseInt(ans.value, 10);
  
        // 正解・不正解分岐
        if (parse === (rand1 + rand2)) {
          result.src = 'img/1.png';
          seikai++;
          result.classList.remove('none');
          next.classList.toggle('none');
          ans.disabled = true;
          ans.value = '';

          // 次の問題を表示する
          next.addEventListener('click', () => {
            change();
            console.log(seikai);
            result.classList.toggle('none');
            next.classList.toggle('none');

          });
        } else {
          result.src = 'img/2.jpeg';
          seikai = 0;
          result.classList.remove('none');
          onemore.classList.remove('none');
          ans.value = '';
          ans.disabled = false;

          // 再挑戦
          onemore.addEventListener('click', () => {
            change();
            result.disabled = true;
            onemore.classList.add('none');
          });
        }

        // 3回連続で正解した時の処理
        if (seikai >= 3) {
          result.src = 'img/3.png';
        }

      });
    };
    
    mondai();
    
    




  });






}