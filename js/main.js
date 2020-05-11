'use strict';
{
  const img = document.getElementsByTagName('img');
  const img2 = ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.gif'];

  img[0].addEventListener('mouseenter', () => {
    img[4].src = img2[0]
  });
  img[0].addEventListener('mouseleave', () => {
    img[4].src = img2[4]
  });

  img[1].addEventListener('mouseenter', () => {
    img[4].src = img2[1]
  });
  img[1].addEventListener('mouseleave', () => {
    img[4].src = img2[4]
  });

  img[2].addEventListener('mouseenter', () => {
    img[4].src = img2[2]
  });
  img[2].addEventListener('mouseleave', () => {
    img[4].src = img2[4]
  });
  
  img[3].addEventListener('mouseenter', () => {
    img[4].src = img2[3]
  });
  img[3].addEventListener('mouseleave', () => {
    img[4].src = img2[4]
  })
  


}