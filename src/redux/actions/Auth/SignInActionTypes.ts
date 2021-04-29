export enum SignInActionTypes {
  SIGNIN_LOADING = 'SIGNIN_LOADING',
  SIGNIN_START = 'SIGNIN_START',
  SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
  SIGNIN_FAILED = 'SIGNIN_FAILED',
}

export type UserType = {
  user: {
    email: string,
    password: string
  }
}

export interface SignInStartAction {
  type: SignInActionTypes.SIGNIN_START,
  user: UserType
}

export interface SignInLoadingAction {
  type: SignInActionTypes.SIGNIN_LOADING
}

export interface SignInSuccessAction {
  type: SignInActionTypes.SIGNIN_SUCCESS,
  token: string
}

export interface SignInFailedAction {
  type: SignInActionTypes.SIGNIN_FAILED
}

export type SignInDispatchTypes = SignInStartAction | SignInLoadingAction | SignInSuccessAction | SignInFailedAction;
