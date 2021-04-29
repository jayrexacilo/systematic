import { combineReducers } from 'redux';
import signInReducer from './Auth/SignInReducer';

const RootReducer = combineReducers({
  signin: signInReducer
});

export default RootReducer;
