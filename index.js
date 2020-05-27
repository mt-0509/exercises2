'use strict';
{

  class Charactor {
    constructor(name, HP, power) {
      this.name = name;
      this.HP = HP;
      this.power = power;
    }
    gethp(min, max) {
      this.HP = Math.floor(Math.random() * (max - min + 1) + min);
      return console.log(`${this.name}のHPは${this.HP}です`);
    }
    getpower(min, max) {
      this.power = Math.floor(Math.random() * (max - min + 1) + min);
      return console.log(`${this.name}のpowerは${this.power}です`);
    };
    attack() {
      return console.log(`敵に${this.power}のダメージ!`)
    }
  }

  let neko = new Charactor('neko')
  neko.gethp(300, 800);
  neko.getpower(100, 500);
  neko.attack();

  
}