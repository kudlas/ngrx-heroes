import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from '../app.component';
import {DashboardPageComponent} from '../heroes/pages/dashboard/dashboard.page';
import {HeroesModule} from '../heroes/heroes.module';
import {DetailPageComponent} from '../heroes/pages/detail/detail.page';
import {ListPageComponent} from '../heroes/pages/list/list.page';

const appRoutes: Routes = [
    {path: 'heroes/dashboard', component: DashboardPageComponent},
    {path: 'heroes/detail/:id', component: DetailPageComponent},
    {path: 'heroes', component: ListPageComponent},
    { path: '',
        redirectTo: 'heroes/dashboard',
        pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HeroesModule,
        RouterModule.forRoot(appRoutes)
    ],
    bootstrap: [AppComponent],
    exports: [
        RouterModule
    ]
})
export class RouteModule {
}
