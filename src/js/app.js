export default class Character {
  constructor(name, type) {
    if ((name.length > 10) || (name.length < 2)) {
      throw new Error('Неверное указано Имя');
    }
    if (type !== 'Bowman' & type !== 'Swordsman' & type !== 'Magician' & type !== 'Undead' & type !== 'Zombie' & type !== 'Daemon') {
      throw new Error('Неверно указан тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
