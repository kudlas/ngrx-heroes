import {Component, Input, OnInit} from '@angular/core';

import {HeroesService} from '../../services/heroes.service';
import {Hero} from '../../models/hero.model';
import {LoadHeroes} from '../../actions/heroes.actions';
import {HeroesState} from '../../heroes.reducer';
import {Store} from '@ngrx/store';
import {selectHeroes} from '../../heroes.selector';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    @Input()
    tilesNumber: number;

    heroes: Hero[];

    constructor(private service: HeroesService, private store: Store<HeroesState>) {}

    ngOnInit() {
        this.store.dispatch(new LoadHeroes());
        this.store.select(selectHeroes).subscribe(data => {
            this.heroes = data.slice(0, this.tilesNumber);
            console.log("diz hirouz", this.heroes);
        });
    }
}
