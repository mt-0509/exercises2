'use strict';
{

  class Charactor {
    constructor(name, HP, power) {
      this.name = name;
      this.HP = Math.floor(Math.random() * 501) + 100;
      this.power = Math.floor(Math.random() * 501) + 100;
    }
    // gethp(min, max) {
    //   this.HP = Math.floor(Math.random() * (max - min + 1) + min);
    //   return console.log(`${this.name}のHPは${this.HP}です`);
    // }
    // getpower(min, max) {
    //   this.power = Math.floor(Math.random() * (max - min + 1) + min);
    //   return console.log(`${this.name}のpowerは${this.power}です`);
    // };
    attack(enemy) {
      return console.log(`${enemy}に${this.power}のダメージ!`)
    }
  }

  let neko = new Charactor;
  neko.attack('敵');
  console.log(neko.power, neko.HP);

  // neko.gethp(300, 800);
  // neko.getpower(100, 500);
  // neko.attack();

  
}