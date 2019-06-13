import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AppComponent} from './app.component';
import {reducers} from './reducers';
import {HeroesModule} from './heroes/heroes.module';
import {RouteModule} from './route/route.module';
import {HeroesEffects} from './heroes/effects/heroes.effects';
import {AlertsModule} from './alerts/alerts.module';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        console.log('%cState', 'color:blue;font-weight: bold;', state);
        console.log('%c' + action.type, 'color:darkred; font-style: italic; text-decoration:underline;', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RouteModule,
        AlertsModule,

        StoreModule.forRoot(reducers, {metaReducers}),
        EffectsModule.forRoot([HeroesEffects]),

        HeroesModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
