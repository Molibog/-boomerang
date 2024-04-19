// Наш герой.

class Hero {
  constructor({ position, score }) {
    this.skin = '🙋';
    this.position = position;
    this.score = score || 0;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log(`YOU ARE DEAD!💀YOUR FINAL SCORE IS ${this.score}`);
    process.exit();
  }
}

module.exports = Hero;
