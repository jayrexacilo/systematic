type UserType = {
  password: string,
  isPosting: boolean
}
export default interface SignInState {
  loading: boolean,
  user?: UserType,
  authenticated?: boolean,
  token?: string
}
