import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EnglishWordsComponent = class EnglishWordsComponent {
    constructor(wordsService) {
        this.wordsService = wordsService;
    }
    ngOnInit() {
        this.foundWords = false;
        this.wordsService.getWords()
            .subscribe(results => {
            if (results.length > 0) {
                this.listOfWords = results.split(' ');
            }
            console.log('Words Received ' + results);
        }, err => {
            console.log('Error caught at Subscribe ' + err);
        }, () => console.log('Processing complete.'));
    }
    submitForm() {
        const message = `submitting text: ${this.text}`;
        console.log(message);
        // this.wordsService.getWords()
        //     .subscribe( results => {
        //             if (results.length > 0) {
        //                 this.listOfWords = results.split(' ');
        //             }
        //             console.log('Words Received ' + results)
        //         },
        //         err => {
        //               console.log('Error caught at Subscribe ' + err)
        //         },
        //         () => console.log ('Processing complete.')
        //     )
        // create words
        this.foundWords = this.findWords(this.text);
    }
    isPresent(randomChars, word) {
        // Count occurrences of all
        // characters in randomChars.
        let tempArr = randomChars.split("");
        tempArr.sort();
        let slist;
        let letters = [];
        let count = 1; // no of occurrence
        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i] === tempArr[i + 1]) {
                count++;
            }
            else {
                let value = count + tempArr[i];
                letters = [...letters, value];
                count = 1; // reset counter
            }
        }
        // Check if number of occurrences of
        // every character in q is less than
        // or equal to that in s.
        // for (int i = 0; i < q.Length; i++)
        // {
        //     freq[q[i]]--;
        //
        //     if (freq[q[i]] < 0)
        //         return false;
        // }
        return true;
    }
    findWords(text) {
        this.words = [];
        //
        // this.words.push(text);
        // this.words.push("2");
        // this.words.push("3");
        this.isPresent("odddgooo", "dog");
        this.listOfWords.forEach(word => this.words.push(word));
        return true;
    }
};
EnglishWordsComponent = __decorate([
    Component({
        selector: 'app-English-Words',
        templateUrl: './English-Words.component.html',
        styleUrls: ['./English-Words.component.scss']
    })
], EnglishWordsComponent);
export { EnglishWordsComponent };
//# sourceMappingURL=English-Words.component.js.map