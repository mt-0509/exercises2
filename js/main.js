'use strict';
{
  let select = document.getElementById('select');
  const text = document.getElementById('text');
  
  
  select.addEventListener('change', () => {
    let value = document.form.job.value;
    
    if (value !== '無職') {
      text.innerHTML = `${value}が選択されました`
    } else {
      text.innerHTML = 'そんな時もあります'
    }

    if (value !== '無職') {
      text.classList.remove('class')
    } else {
      text.classList.add('class');
    }
    
    
  });


}