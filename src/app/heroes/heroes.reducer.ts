import {HeroesActions, HeroesActionTypes} from './actions/heroes.actions';
import {Hero} from './models/hero.model';
import {DetailActions, DetailActionTypes} from './actions/detail.actions';
import {UpdateActionTypes} from './actions/update.actions';

export interface HeroesState {
    list: Hero[];
    detail: Hero;
}

export const initialState: HeroesState = {
    list: null,
    detail: null,
};

export function HeroesReducer(state = initialState, action: HeroesActions | DetailActions): HeroesState {
    switch (action.type) {

        case HeroesActionTypes.LoadHeroesSucess:
            return {
                ...state,
                list: action.payload,
            };

        case DetailActionTypes.LoadDetailsSuccess:
            return {
                ...state,
                detail: action.payload
            };

        default:
            return state;
    }
}
