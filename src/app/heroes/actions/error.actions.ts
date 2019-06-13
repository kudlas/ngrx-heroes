import { Action } from '@ngrx/store';

export enum ErrorActionTypes {
  Error = '[Error] Heroes',
}

export class Error implements Action {
  readonly type = ErrorActionTypes.Error;
  constructor(public error: string) {}
}

export type ErrorActions = Error;
