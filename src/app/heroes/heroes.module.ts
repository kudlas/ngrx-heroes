import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreModule} from '@ngrx/store';

import {HeroesReducer} from './heroes.reducer';
import {ListComponent} from './components/list/list.component';
import {DashboardPageComponent} from './pages/dashboard/dashboard.page';
import {DetailPageComponent} from './pages/detail/detail.page';
import {ListPageComponent} from './pages/list/list.page';
import {ListItemComponent} from './components/list-item/list-item.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateFormComponent} from './components/update-form/update-form.component';
import {AvatarComponent} from './components/avatar/avatar.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        ListPageComponent,
        DashboardPageComponent,
        DetailPageComponent,
        ListItemComponent,
        ListComponent,
        DashboardComponent,
        UpdateFormComponent,
        AvatarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        StoreModule.forFeature('heroes', HeroesReducer)
    ],
    exports: []
})
export class HeroesModule {
}
