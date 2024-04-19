// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor({ position, isThrowed = false, isComingBack = false }) {
    this.skin = '🌀';
    this.position = position;
    this.isThrowed = isThrowed;
    this.isComingBack = isComingBack;
  }

  throw() {
    if (this.isThrowed === false) {
      this.moveRight();
    }
    this.isThrowed = true;
  }

  fly() {
    if (this.isComingBack === false) {
      this.moveRight();
    }
    if (this.isComingBack === true) {
      this.moveLeft();
    }
  }
  
  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
