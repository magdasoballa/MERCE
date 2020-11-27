import * as fromRouter from '@ngrx/router-store';
import { routerReducer } from '@ngrx/router-store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RouterStateUrl } from './custom-route-serializer';

export interface StoreRootState {
    router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const getRouterState = (state: StoreRootState) => state.router;

export const selectRouter = createFeatureSelector<StoreRootState, fromRouter.RouterReducerState<RouterStateUrl>>('router');

export const getCurrentRouteState = createSelector(
    selectRouter, 
    ({state}) => !!state ? state : undefined
);

export const getCurrentId = createSelector(
    getCurrentRouteState,
    (state) => state?.params?.id
)


