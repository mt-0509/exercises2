'use strict';
{
  class Keisan {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    static ok () {
      return console.log('ok');
    }
    get kake() {
      return this.x * this.y;
    }

    set condinary(arr) {
      this.x = arr.x;
      this.y = arr.y;
    }
  }
  Keisan.ok();

  const keisan = new Keisan(10, 5);
  console.log(keisan.kake);
  keisan.condinary = {x: 20, y:10};
  console.log(keisan.kake);

}