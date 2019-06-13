import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';

import {of} from 'rxjs';
import {catchError, concatMap, map, tap} from 'rxjs/operators';

import {HeroesActionTypes, HeroesActions, LoadHeroesSucess} from '../actions/heroes.actions';
import {DetailActions, DetailActionTypes, LoadDetailSuccess} from '../actions/detail.actions';
import {UpdateActions, UpdateActionTypes, UpdateHeroSuccess} from '../actions/update.actions';
import {Error, ErrorActionTypes} from '../actions/error.actions';
import {HeroesService} from '../services/heroes.service';
import {AlertsService} from '../../alerts/services/alerts.service';


@Injectable()
export class HeroesEffects {


    @Effect()
    loadHeroes$ = this.actions$.pipe(
        ofType(HeroesActionTypes.LoadHeroes),
        concatMap(() => this.service.getHeroes()
            .pipe(
                map(data => new LoadHeroesSucess(data)),
                catchError((error) => of(new Error(error)))
            )
        )
    );

    @Effect()
    loadHeroDetail$ = this.actions$.pipe(
        ofType(DetailActionTypes.LoadDetails),
        map(action => action.id),
        concatMap((id) => this.service.getHero(id)
            .pipe(
                map(data => new LoadDetailSuccess(data)),
                catchError((error) => of(new Error(error)))
            )
        )
    );

    @Effect()
    updateHeroDetail$ = this.actions$.pipe(
        ofType(UpdateActionTypes.UpdateHero),
        map(action => action.payload),
        concatMap((updateData) => this.service.updateHero(updateData)
            .pipe(
                map(data => new UpdateHeroSuccess(data)),
                tap(() => this.router.navigate(['heroes'])),
                // it would be nice to have action for alerts, but aint nobody got time for this.
                tap(() => this.alertsService.add('Hero updated')),
                catchError((error) => of(new Error(error)))
            )
        )
    );

    @Effect({dispatch: false})
    error$ = this.actions$.pipe(
        ofType(ErrorActionTypes.Error),
        tap((error) => this.alertsService.add(error))
    );

    constructor(private actions$: Actions<HeroesActions | DetailActions | UpdateActions>,
                private service: HeroesService,
                private router: Router,
                private alertsService: AlertsService) {
    }

}
