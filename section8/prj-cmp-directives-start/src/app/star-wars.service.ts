import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { LogService } from './log.service';
import { Subject } from 'rxjs/Subject';


@Injectable() // must have this decorator in order to have LogService injected.
export class StarWarsService {

    private characters = [{
        name: 'Luke Skywalker',
        side: ''
    },
    {
        name: 'Darth Vader',
        side: ''
    }]

    private logService;
    charactersChanged = new Subject<void>();
    http: Http;

    constructor(logService: LogService, http: Http) {
        this.logService = logService;
        this.http = http;
    }

    fetchCharacters() {
        this.http.get('http://swapi.co/api/people/')
            .map((response: Response) => {
                const data = response.json();
                const extractedData = data.results;
                const chars = extractedData.map((char) => {
                    return { name: char.name, side: '' }
                });
                return chars;
            })
            .subscribe((data) => {
                console.log(data);
                this.characters = data;
                this.charactersChanged.next();
            })
    };

    getCharacters(chosenList) {
        if (chosenList === 'all') {
            return this.characters.slice();
        }
        return this.characters.filter((char) => {
            return char.side === chosenList;
        });
    };

    onSideChosen(charInfo) {
        const pos = this.characters.findIndex((char) => {
            return char.name === charInfo.name;
        });
        this.characters[pos].side = charInfo.side;
        this.charactersChanged.next();
        this.logService.writeLog('Changed side of ' + charInfo.name + ' new side: ' + charInfo.side);

    };

    addCharacter(name, side) {
        const pos = this.characters.findIndex((char) => {
            return char.name === name;
        });

        if (pos !== -1) {
            return;
        }
        const newChar = { name: name, side: side };
        this.characters.push(newChar);

    }

}
