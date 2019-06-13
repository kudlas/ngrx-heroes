import { Action } from '@ngrx/store';

export enum HeroesActionTypes {
  LoadHeroes = '[Heroes] Load data',
  LoadHeroesSucess = '[Heroes] Load data Sucess',
}

export class LoadHeroes implements Action {
  readonly type = HeroesActionTypes.LoadHeroes;
}

export class LoadHeroesSucess implements Action {
  readonly type = HeroesActionTypes.LoadHeroesSucess;
  constructor(public payload: any) {}
}

export type HeroesActions = LoadHeroes | LoadHeroesSucess;
