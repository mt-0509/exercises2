'use strict';
{
  // 定義方法
  // (引数,...) => {...関数の本体...}

  let double = (num) => {
    return num * 2
  };
  console.log(double(9));

  // 省略記法
  let triple = num => num * 3;
  console.log(triple(4));

  // functionとアロー関数の違い
  // ①thisの指す場所が違う
  // ②アロー関数はコンストラクタになることができないのでextendsできない
  // などなど


}