'use strict';
{
  // for...in
  const object = {a:1, b:2, c:3};

  for (const property in object) {
    // console.log(`${property}:${object[property]}`);
    console.log(property);
  }

  const data = ['apple', 'orange', 'banana'];
  Array.prototype.hoge = function () {}

  for (const key in data) {
    console.log(key);
    console.log(data[key]);
  }

  // for...inの問題点
  // ①処理の順序が保証されないそのため配列には使用しないほうがいい 
  // ②配列で使うと拡張された機能まで列挙されてしまう


  // for...of
  const object2 = ['one', 'two', 'three'];

  Array.prototype.hoge = function () {}
  for (const value of object2) {
    console.log(value);
  }




  // お手本のコード
  const obj = {
    first: 1,
    second: 2,
    third: 3
  };

  for(const key in obj) {
    console.log(`key:${key}, value:${obj[key]}`);
  }

  // 問題点
  // オブジェクトは何らかのオブジェクトを継承しているため、オブジェクトのプロパティを列挙する場合に親オブジェクトまで列挙可能なプロパティを探しにいき、可能なものがあれば列挙してしまう。そのため意図しない結果になる可能性がある。

  // 解決策
  // Objectの静的メソッドであるkeys, values, entriesを使う
  // 上記の静的メソッドは引数のオブジェクト自身が持っている列挙可能なプロパティの配列を返してくれる

  console.log(Object.keys(obj));
  console.log(Object.values(obj));
  console.log(Object.entries(obj))

  Object.keys(obj).forEach(value => {
    console.log(value);
  })


}