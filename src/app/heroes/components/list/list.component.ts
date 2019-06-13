import {Component, OnInit} from '@angular/core';
import {Hero} from '../../models/hero.model';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HeroesService} from '../../services/heroes.service';
import {HeroesState} from '../../heroes.reducer';
import {select, Store} from '@ngrx/store';
import {LoadHeroes} from '../../actions/heroes.actions';
import {selectHeroes} from '../../heroes.selector';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    heroes: Hero[];

    constructor(private router: Router, public service: HeroesService, private store: Store<HeroesState>) {
    }

    ngOnInit() {
        this.store.dispatch(new LoadHeroes());
        this.store.select(selectHeroes).subscribe(data => this.heroes = data);
    }

    goToDetail(hero: Hero) {
        this.router.navigate(['heroes/detail', hero.id]);
    }

}
