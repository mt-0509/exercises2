'use strict';
{
  const ninja = [2,34,561,5,14];
  let futaketa = ninja.filter(function (num) {
    return 9 < num && num < 100
  });
  
  alert(futaketa);




}