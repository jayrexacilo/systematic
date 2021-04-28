import * as actions from '../types/actionTypes';

interface BugAddedAction {
  type: actions.BUG_ADDED,
  payload: {

  }
}

export const bugAdded = description: string => ({
  type: actions.BUG_ADDED,
  payload: {
    description
  }
});

export const bugRemoved = description => ({
  type: actions.BUG_REMOVED,
  payload: {
    description
  }
});

export const bugResolved = id => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id
  }
});
