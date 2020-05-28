// お手本のコード
'use strict';
{
  function statusRandNum(max, min) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }

  // playerのstatus数値の処理

  const playerStatusArea = {
    hp: {max: 50, min: 30},
    power: {max: 20, min: 10},
    defense: {max: 20, min: 10}
  }

  // オブジェクトを配列にして作った配列に対してmapを使ってstatusRandNumの処理を行っている
  const setPlayerStatus = Object.values(playerStatusArea).map(value => {
    return statusRandNum(value.max, value.min)
  })

  const player = {
    name: 'takanobu',
    hp: setPlayerStatus[0],
    power: setPlayerStatus[1],
    defense: setPlayerStatus[2]
  }

  // enemyのstatus数値の処理
  const enemyStatusArea = {
    hp: {max: 30, min: 15},
    power: {max: 15, min: 10},
    defense: {max: 15, min: 10}
  }

  const setEnemyStatus = Object.values(enemyStatusArea).map(value => {
    return statusRandNum(value.max, value.min)
  })

  const monster = {
    name: 'スラリン',
    hp: setEnemyStatus[0],
    power: setEnemyStatus[1],
    defense: setEnemyStatus[2]
  }

  class Charactor {
    constructor(status) {
      this.name = status.name;
      this.hp = status.hp;
      this.power = status.power;
      this.defense = status.defense;
    }

    attack(enemyName, enemyDefence) {
      // Math.maxを使ってplayerとenemyのどちらが値が大きいか判別している
      let attack = Math.max(this.power - enemyDefence,1)
      return `${enemyName}に${attack}のダメージを与えた!!`;
    }

    guard(enemyAttack) {
      let damage = Math.max(enemyAttack - this.defense,1);
      this.hp -= damage;
      return `${this.name}は${damage}のダメージを受けた!!`
    }
  }

  // 先ほど作ったplayer・monsterオブジェクトでインスタンスを作成
  const myCharactor = new Charactor(player);
  const enemy = new Charactor(monster);

  console.log(myCharactor.attack(enemy.name, enemy.defense));
  console.log(enemy.attack(myCharactor.name, myCharactor.defense));

  console.log(myCharactor.guard(enemy.power));
  console.log(enemy.guard(myCharactor.power));

}