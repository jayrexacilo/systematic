import * as actions from '../types/actionTypes';
import { IBaseAction } from '../types/base';
import { Reducer } from 'redux';

interface IState {
  [index: number]: any[]
}

let lastId = 0;
const reducer: Reducer<IState, IBaseAction> = (state = [], action: IBaseAction) => {
  switch(action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false
        }
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug: any) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map((bug: any) => bug.id !== action.payload.id ? bug : {...bug, resolved: true });
    default:
      return state;
  }
}

export default reducer;
