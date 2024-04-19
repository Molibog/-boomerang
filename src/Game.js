// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0 }); // Герою можно аргументом передать бумеранг.
    this.boomerang = new Boomerang({ position: 0 });
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.boomerang.position] = this.boomerang.skin;
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.view.notification = '';
      this.hero.die();
    }
  }

  checkBoomCollapse() {
    if (this.boomerang.position === this.enemy.position) {
      this.boomerang.isComingBack = true;
      this.enemy.die();
      this.hero.score += 10;
      this.view.notification = `You killed the enemy, your score: ${this.hero.score}`;
    }
    if (this.boomerang.position === this.hero.position) {
      this.boomerang.isComingBack = false;
      this.boomerang.isThrowed = false;
    }
  }

  checkIfBoomThrowed() {
    if (this.boomerang.isThrowed) {
      this.boomerang.fly();
    }
  }

  play() {
    runInteractiveConsole(this.hero, this.boomerang, this.enemy);
    setInterval(() => {
      this.enemy.moveLeft();
    }, 50);
    setInterval(() => {
      this.checkIfBoomThrowed();
    }, 70);
    setInterval(() => {
      this.check();
      this.checkBoomCollapse();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 10);
  }
}

module.exports = Game;
