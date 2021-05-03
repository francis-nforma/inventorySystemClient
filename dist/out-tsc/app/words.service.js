import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let WordsService = class WordsService {
    constructor(http) {
        this.http = http;
    }
    // getWords() {
    //   return this.http.get('https://api.github.com/users');
    // }
    getWords() {
        return this.http.get('https://gist.githubusercontent.com/adamc00/a45beb8a0cb55593220f749838c534d0/raw/fd11dcce5df4098839e19f21c50cc2363b9b7863/words.txt', { responseType: 'text' });
    }
};
WordsService = __decorate([
    Injectable()
], WordsService);
export { WordsService };
//# sourceMappingURL=words.service.js.map