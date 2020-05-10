'use strict';
{
  let x = 3;
  let same = 2 ;

  let obj = {
    one: 1,
    two: 2,
    three: x,
    same
  }
  
  // 追加
  obj.four = 4;

  // 削除
  delete obj.one

  console.log(obj);
  console.log(obj.same);
  



}