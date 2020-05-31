'use strict';
{
  let map = new Map();
  // ①要素の追加
  map.set('one', 1);
  map.set('two', 2);
  map.set('three', 3);

  // ②要素数の取得
  console.log(map.size);

  // ③指定したキーの取得
  console.log(map.get('two'));

  // ④指定したキーの要素が存在するか
  console.log(map.has('one'));
  console.log(map.has('four'));

  // ⑤指定したキーの要素を削除
  map.delete('three')
  console.log(map.size);

  map.forEach(function(value, key) {
    console.log("[" + key + ", " + value + "]")
  })

  // Mapの利点
  // キーに任意の型を使うことができる
  // サイズプロパティを使って簡単に要素の数を取得することができる
  // 完全にからの連想配列を作成することができる


}