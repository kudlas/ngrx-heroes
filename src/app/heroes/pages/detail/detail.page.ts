import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Store} from '@ngrx/store';

import {Hero} from '../../models/hero.model';
import {selectDetail} from '../../heroes.selector';
import {LoadDetail} from '../../actions/detail.actions';
import {HeroesState} from '../../heroes.reducer';
import {MENU} from '../../../app.constants';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.css']
})
export class DetailPageComponent implements OnInit {

    menu = MENU;

    heroId: number;
    detailData: Hero;

    shakeInput: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private store: Store<HeroesState>) {
    }

    ngOnInit() {

        // get id from route
        this.route.params.subscribe(
            params => {
                this.heroId = params.id;
                this.store.dispatch(new LoadDetail(params.id));
            }
        );

        // get detail data
        this.store.select(selectDetail).subscribe((data: Hero) => {
            if (!!data) {
                this.detailData = data;
            }
        });
    }

    updateHeader(newTitle: string) {
        this.detailData.title = newTitle;
    }
}
