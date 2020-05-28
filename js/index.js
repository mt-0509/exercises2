'use strict';
{
  // 自分のコード
  class Charactor {
    constructor(name, HP, power) {
      this.name = name;
      this.HP = Math.floor(Math.random() * 501) + 1;
      this.power = Math.floor(Math.random() * 501) + 1;
      this.defense = Math.floor(Math.random() * 501) + 1;
    }
    attack(enemy) {
      let damage = enemy.defense - this.power;
      console.log(`ダメージ値${damage}`);
      if(damage >= 0) {
        enemy.HP -1;
        console.log(enemy.HP -1,1);
        console.log(`${enemy.name}に1のダメージ!`)
      } else {
        enemy.HP + damage;
        console.log(enemy.HP + damage,2);
        console.log(`${enemy.name}に${Math.abs(damage)}のダメージ!`);
      }
    }
  }

  let neko = new Charactor('neko');
  console.log(`NEKOのhpは${neko.HP}, powerは${neko.power}, defenceは${neko.defense}`);

  let enemy = new Charactor('enemy');
  console.log(`敵のhpは${enemy.HP}, powerは${enemy.power}, defenceは${enemy.defense}`);

  neko.attack(enemy);
}