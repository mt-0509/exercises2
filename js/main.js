'use strict';
{
  // // id属性を取得
  // let start = document.getElementById('start');
  // let stop = document.getElementById('stop');
  // let p = document.getElementById('p');

  // // 開始ボタンが押された時間を取得する
  // let startTime = start.addEventListener('click', () => {
  //   let startTime = new Date();
  //   p.textContent = '';

  //   // ボタンの表示・非表示切り替え
  //   start.disabled = true;
  //   stop.disabled = false;
    
  //   // 終了ボタンが押された時間を取得する
  //   stop.addEventListener('click', () => {
  //     let stopTime = new Date();
      
  //     // 差分を求める
      // let diffMsec = stopTime - startTime;
      // let diffSec = diffMsec / 1000;
      // let showSec = Math.round(diffSec);
      // p.textContent = `開始を押してから${showSec}秒後に終了しました`

  //     // ループさせるため
  //     start.disabled = false;
  //     stop.disabled = true;
  //     startTime = '';
  //     stopTime = '';
  //   });
  // });

  

  



  

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

  // onemore.classList.add('none');

  startBtn.addEventListener('click', () => {
    wrapper.classList.remove('wnone');
    let startTime = new Date();





    const roop = () => {
      
    }



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
        if (isNumber(ans.value)) {
          ans.disabled = true;
        } else {
          alert ('数字を入力してください')
        }
      
          let parse = parseInt(ans.value,10);
          result.classList.remove('none');
      
          if (parse === (rand1 + rand2)) {
            result.src = 'img/1.png';
            next.classList.remove('none');
            seikai++;
            next.addEventListener('click', () => {
              ans.disabled = false;
              next.classList.add('none');
              result.classList.add('none');
              x();
    
            })
      
          } else { 
            next.classList.add('none');
            result.src = 'img/2.jpeg';
            onemore.classList.remove('none');
            seikai = 0;
            onemore.addEventListener('click', () => {
              ans.disabled = false;
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
            startBtn.classList.add('none');
            let stopTime = new Date();
  
            console.log(startTime);
            console.log(stopTime);
  
            let diffMsec = stopTime - startTime;
            let diffSec = diffMsec / 1000;
            let showSec = Math.round(diffSec);
            p2.textContent = `3問連続正解${showSec}秒でクリアしました`

            onemore.classList.remove('none');
            onemore.addEventListener('click', () => {
              result.classList.add('none');
            next.classList.remove('none');
            ans.classList.remove('none');
            
            mondaibun.classList.remove('none');
            startBtn.classList.remove('none');

            onemore.classList.add('none');
            wrapper.classList.add('wnone');
            ans.disabled = false;
            p2.classList.add('none');

              mondai();
              x()
            });
          }
  
        // } else {
        //   alert ('数字を入力してください')
        // }
        
    
      });
    }
    mondai();
  
    // 数字かどうかを判定する関数
    function isNumber(numVal){
      // チェック条件パターン
      var pattern = /^[-]?([1-9]\d*|0)(\.\d+)?$/;
      // 数値チェック
      return pattern.test(numVal);
    }

  });

















}
