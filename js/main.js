'use strict';
{
  const select = document.getElementById('select');

  const p = document.getElementById('p')

  // select.optionsの戻り値がHTMLOptionsCollectionなので配列に直す
  // ...は個々の値に展開することができる
  const chosenList = [...select.options];

  select.addEventListener('change', () => {

    // 選択肢が全て選択状態であればtrueを返す式
    // 一つでも選択されていなければfalseを返す everyメソッド使用
    // everyは与えられた関数の処理が全て通るかテストする関数
    const result = chosenList.every(el => {
      return el.selected;
    });

    if (result) {
      return p.textContent = '太りますよ...'
    }

    // 選択状態を調べてselectedの場合のみ配列にpushする。reduceメソッド使用
    // foeEachを使用の場合あらかじめ配列の用意が必要だが、
    // reduceを使いselectされている物のみの配列を生成

    // reduceの基本的な使い方は配列に格納されたデータをすべて合計した値を取得する、
    const choices = chosenList.reduce((arr,cur)=>{
      console.log(cur);
    if(cur.selected){
      arr.push(cur.value);
    }
    return arr;
    },[]);

    // joinは配列の全要素を連結した文字列を返す。また指定した文字列などで要素と要素を区切ることができる
    p.textContent = choices.join('と');
  })

}