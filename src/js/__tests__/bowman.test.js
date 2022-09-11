import Bowman from "../bowman";

test('Создание нового персонажа Bowman', () => {
    const received = new Bowman('Maxim', 'Bowman');
    const expected = {
        name: 'Maxim',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(received).toEqual(expected);
});