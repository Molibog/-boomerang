// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  a: (myhero, myboom) => {
    if (myhero.position > 0) {
      myhero.moveLeft();
      if (myboom.isThrowed === false) {
        myboom.moveLeft();
      }
    }
  },
  k: (myhero, myboom, myenemy) => {
    if (myhero.position === myboom.position) {
      myboom.moveRight();
    }
    myboom.throw();
  },
  d: (myhero, myboom) => {
    myhero.moveRight();
    if (myboom.isThrowed === false) {
      myboom.moveRight();
    }
  },
};

// Какая-то функция.

function runInteractiveConsole(myhero, myboom, myenemy) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name](myhero, myboom, myenemy);
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!

module.exports = runInteractiveConsole;
