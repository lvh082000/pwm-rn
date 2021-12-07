import {Store} from 'store'

export const GetAuthentication = () => {
  return Store.getState().authentication
}
