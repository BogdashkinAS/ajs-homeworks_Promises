import GameSavingLoader from '../gamesavingloader.js';

test('Make GameSavingLoader', (done) => {
    const result = {
        id: 9,
        created: 1546300800,
        userInfo: {
          id: 1,
          name: 'Hitman',
          level: 10,
          points: 2000,
        },
    };

    GameSavingLoader.load().then((saving) => {
        expect(saving).toEqual(result);
        done();
    });
});

test('Find name of class', (done) => {
    GameSavingLoader.load().then((saving) => {
        expect(Object.getPrototypeOf(saving).constructor.name).toEqual('GameSaving');
        done();
    });
});
