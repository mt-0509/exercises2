'use strict';
{
  // ①
  let check = document.getElementById('check');
  const checkbox = document.form.check;
  
  const btn = document.getElementById('btn');
  btn.disabled = true;

  check.addEventListener('click', () => {
    if(check.checked) {
      btn.disabled = false
      btn.addEventListener('click', () => {
        alert('送信されました');
      });
    } else {
      btn.disabled = true;
    }
  });


  // ②
  let check = document.getElementById('check');
  const checkbox = document.form.check;
  
  const btn = document.getElementById('btn');
  
  let flag = true;
  btn.addEventListener('click', () => {
    if (check.checked) {
      alert('同意が確認できました');

      // 次に進むボタン作成
      const input = document.createElement('input');
      const button = document.createElement('button')
      input.type = 'button';
      input.value = '次に進む';
      if (flag === true) {
        document.body.appendChild(input);
        flag = false;
      };

      input.addEventListener('click', () => {
        if (check.checked) {
          alert('次に進みます');
        } else {
          alert('同意されていません')
        }
      });
    } else {
      alert('同意が確認できません');
    }
  });



}