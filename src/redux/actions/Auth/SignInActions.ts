import { Dispatch } from 'redux';
import { SignInActionTypes, UserType, SignInDispatchTypes } from './SignInActionTypes';

export const SignInAction = (user: UserType) => (dispatch: Dispatch<SignInDispatchTypes>) => {
  dispatch({
    type: SignInActionTypes.SIGNIN_START,
    user
  });

  const token = `alskdjalskdjasld`;

  dispatch({
    type: SignInActionTypes.SIGNIN_SUCCESS,
    token
  });

  // FAILED
  // dispatch({ type: SignInActionTypes.SIGNIN_FAILED });
  

};
