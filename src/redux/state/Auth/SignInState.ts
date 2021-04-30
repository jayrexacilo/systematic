import { UserType } from '../../actions/Auth/SignInActionTypes';

export default interface SignInState {
  loading: boolean,
  user?: UserType,
  authenticated?: boolean,
  token?: string
}
