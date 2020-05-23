
'use strict';
{
  // classを大文字で始める理由は慣習的に決まっていて、Google JavaScript Style Guideにも記載されているから。また、インスタンス化した時には小文字で始めれば名前が被ることがない。
  class Keisan {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    // メソッドは区切りでメソッドを定義できない
    // 例 メソッド: () => {}, メソッド: function(){}
    syuturyoku () {
      return console.log(this.x, this.y);
    }
    tasizan () {
      return console.log(this.x + this.y); 
    }
    hikizan () {
      return console.log(this.x - this.y);
    }
    do () {
      document.getElementById('p').textContent = `プロパティは${this.x}と${this.y}`
    }
  }
  let keisan = new Keisan(5, 10);
  let one = keisan.syuturyoku();
  keisan.x = 20; // プロパティへのアクセス
  let tashi = keisan.tasizan();
  let hiki = keisan.hikizan();
  let d = keisan.do();

  // 親クラスのプロパティを継承し、かつプロパティを1つ追加する
  class Keisan2 extends Keisan {
    constructor(x,y,z) {
      super(x,y)
      this.z = z;
    }
  }

  // プロパティの追加なしで、メソッドを1つ追加したものを作る
  class Keisan3 extends Keisan {
    warizan () {
      console.log(this.x / this.y);
    }
  }

  let keisan3 = new Keisan3(10,2);
  keisan3.warizan()
    


}
