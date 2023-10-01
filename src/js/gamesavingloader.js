import read from './reader.js';
import json from './parser.js';
import GameSaving from './gamesaving.js';

export default class GameSavingLoader {
    static load() {
        return read()
        .then((response) => json(response))
        .then((response) => new GameSaving(JSON.parse(response)));
    }
}
