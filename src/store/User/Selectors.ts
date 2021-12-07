import {Store} from 'store'

export const IsAuth = () => {
  const auth = Store.getState().user
  return !!auth.userInfo
}

export const GetProfile = () => {
  return Store.getState().user
}
