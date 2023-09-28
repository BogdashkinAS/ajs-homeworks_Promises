import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
    static load() {
        return read()
        .then((response) => json(response))
        .then((response) => JSON.parse(response));
    }
}
