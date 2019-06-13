import { Action } from '@ngrx/store';
import {Hero} from '../models/hero.model';

export enum UpdateActionTypes {
  UpdateHero = '[Heroes] Update',
  UpdateHeroSuccess = '[Heroes] Update Success',
}

export class UpdateHero implements Action {
  readonly type = UpdateActionTypes.UpdateHero;
  constructor(public payload: Hero) {}
}

export class UpdateHeroSuccess implements Action {
  readonly type = UpdateActionTypes.UpdateHeroSuccess;
  constructor(public payload: Hero) {}
}

export type UpdateActions = UpdateHero | UpdateHeroSuccess;
