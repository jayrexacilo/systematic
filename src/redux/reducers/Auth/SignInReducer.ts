import { SignInActionTypes, SignInDispatchTypes } from '../../actions/Auth/SignInActionTypes';
import SignInState from '../../state/Auth/SignInState';

const defaultState: SignInState = {
  loading: false,
  authenticated: false
}

const signInReducer = (state: SignInState = defaultState, action: SignInDispatchTypes): SignInState => {
  switch (action.type) {
    case SignInActionTypes.SIGNIN_START:
      return {
        loading: true,
        authenticated: false
      };
    case SignInActionTypes.SIGNIN_FAILED:
      return {
        loading: false,
        authenticated: false
      };
    case SignInActionTypes.SIGNIN_LOADING:
      return {
        loading: true,
      };
    case SignInActionTypes.SIGNIN_SUCCESS:
      return {
        loading: false,
        authenticated: true,
        token: action.token
      };
    default:
      return state
  }
};

export default signInReducer;
