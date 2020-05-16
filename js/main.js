'use strict';
{
  // 1 map
  // 配列に指定した処理を実行した配列を新たに作成する
  let num = [1,2,3,4,5,6,7,8,9,];
  let result = num.map(e => e * 2);
  console.log(result);
  // [2, 4, 6, 8, 10, 12, 14, 16, 18]

  let kvarray = [
    {key: 1, name: '田中'},
    {key: 2, name: '佐藤'},
    {key: 3, name: '鈴木'}
  ];
  console.log(kvarray[0]);

  let reformattedArray = kvarray.map(obj => {
    let rObj = {};
    rObj[obj.key] = '5';
    rObj[obj.name] = '太朗';
    return rObj;
  });
  console.log(reformattedArray);
  // アクセスしたプロパティが全て変更される


  // 2 filter
  // テスト関数に合致した値のみを抽出して新たな配列を作成する
  const num2 = [2,3,4,6,9,18,26,30];
  const result2 = num2.filter(x => x > 10);
  console.log(result2);
  // [18, 26, 30]

  // 別な感じの書き方
  const s = (value) => {
    return value > 10;
  }

  let ss = num2.filter(s);
  console.log(ss);



  // 3 reduce
  // 配列の各要素に対して引数で与えれられた関数を実行して単一の結果にする

  const num3 = [1,2,3,4];
  const reducer = (acc, cur) => acc + cur;
  console.log(num3.reduce(reducer));
  // 10


  const result3 = [0, 1, 2, 3, 4].reduce( (accumulator, currentValue) => {
    return accumulator + currentValue
  }, 10)

  console.log(result3);

  let initialValue = 0;
  let sum = [{x: 'あ'}, {x: 'い'}, {x: 'う'}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    , initialValue
  )

  console.log(sum);

  // 二次元配列を一次元配列にする
  let flattened = [[0,1], [2,3], [4,5]].reduce(
    function(accumulator, currentValue) {
      return accumulator.concat(currentValue)
    },[]
  )
  // 第二引数の[]あってもなくても結果変わらない

  console.log(flattened);




  // スプレッド構文を使った配列への変換方法
  const word = 'おはよう';
  const converted = [...word];
  console.log(converted);


  // Array.from()
  const array = Array.from('こんにちは');
  console.log(array);
  //  ['こ','ん','に','ち','は']







}