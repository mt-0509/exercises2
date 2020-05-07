'use strict';
{
  
  let text = document.getElementById('text');

    document.getElementById('wrapper').addEventListener('click', () => {
      let flag = false;

      for (let i = 0; i < document.form1.select.length; i++) {
        if (document.form1.select[i].checked) {
          flag = true;
          text.innerText = document.form1.select[i].value
        }
      }
      if (!flag) {
        text.innerText = "";
      }
    })
    
    document.getElementById('ALL').addEventListener('click', () => {
      const select = document.form1.select;
      let flag = true;
      if (flag === true) {
        for(let i = 0; i < select.length; i++) {
          select[i].checked = true;
        } 
      } 
       
      
      for (let i = 0; i < select.length; i++) {
        if(select[i].checked == false) {
          document.form1.select.select = false;
        } else  {
            document.form1.checked = true;
          }
        
      }

    });
}