import { Action } from '@ngrx/store';
import {Hero} from '../models/hero.model';

export enum DetailActionTypes {
  LoadDetails = '[Heroes] Load Detail',
  LoadDetailsSuccess = '[Heroes] Load Detail Success',
}

export class LoadDetail implements Action {
  readonly type = DetailActionTypes.LoadDetails;
  constructor(public id: number) {}
}

export class LoadDetailSuccess implements Action {
  readonly type = DetailActionTypes.LoadDetailsSuccess;
  constructor(public payload: Hero) {}
}


export type DetailActions = LoadDetail | LoadDetailSuccess;
