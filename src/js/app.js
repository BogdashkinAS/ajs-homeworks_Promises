import GameSavingLoader from './gamesavingloader.js';

GameSavingLoader.load().then((saving) => saving, (error) => error);
