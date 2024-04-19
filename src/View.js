// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor(notification = '') {
    this.notification = notification;
  }

  render(track) {
    const yourTeamName = 'yest tolko MIK';
    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
    console.log(this.notification);
  }
}

module.exports = View;
