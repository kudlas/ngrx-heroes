import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {retry} from 'rxjs/operators';
import {Observable, of, pipe} from 'rxjs';

import {Hero} from '../models/hero.model';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {

    apiURL = 'some-url';

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    HEROES: Hero[] = [
        {id: 11, title: 'Dr Nice'},
        {id: 12, title: 'Narco'},
        {id: 13, title: 'Bombasto'},
        {id: 14, title: 'Celeritas'},
        {id: 15, title: 'Magneta'},
        {id: 16, title: 'RubberMan'},
        {id: 17, title: 'Dynama'},
        {id: 18, title: 'Dr IQ'},
        {id: 19, title: 'Magma'},
        {id: 20, title: 'Tornado'}
    ];

    constructor(private http: HttpClient) {
    }

    getHeroes(): Observable<Hero[]> {
        // api call here
        /*return this.http.get<Hero>(this.apiURL + '/heroes')
            .pipe(
                retry(1)
            );
        */
        return of(this.HEROES);
    }

    getHero(id: number) {
        const theHero = this.HEROES.find(hero => hero.id == id);

        /*return this.http.get<Hero>(this.apiURL + '/heroes/' + id)
            .pipe(
                retry(1)
            );
        */

        return of(theHero);
    }

    updateHero(payload: Hero) {

        // instead of this madness, there will be api call
        const foundIndex = this.HEROES.findIndex(hero => hero.id == payload.id);
        this.HEROES[foundIndex] = payload;

        /* return this.http.put<Hero>(this.apiURL + '/heroes/' + payload.id, JSON.stringify(payload), this.httpOptions)
            .pipe(
                retry(1),
            );
         */
        // end of api call

        return of(payload);

    }

}
