'use strict';
{
  const img = document.querySelectorAll('.hover');
  let apper = document.getElementsByTagName('img');

  apper = apper[apper.length - 1];

  img.forEach(el => {
    el.addEventListener('mouseenter', () => {
      apper.src = el.src;
    });
    el.addEventListener('mouseleave', () => {
      apper.src = "img/5.gif";
    })
  });
}