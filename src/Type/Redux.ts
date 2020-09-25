import {
  Epic as TEpic,
  EpicMiddleware as TEpicMiddleware
} from 'redux-observable';
import { Action } from 'typesafe-actions';
import { State } from 'Store/Reducer';
import * as Api from 'Api';
import * as Redux from 'react-redux';

type Selector<T> = (state: State) => T;

export const useSelector = <T>(
  selector: Selector<T>
) => Redux.useSelector<State, T>(selector);

type Input = Action;
type Output = Action;
type Dependencies = { api: typeof Api; };

export type Epic = TEpic<Input, Output, State, Dependencies>;
export type EpicMiddleware = TEpicMiddleware<Input, Output, State, Dependencies>;
