import {RootState, Store} from 'store'

export const GetDefaults = () => {
  return Store.getState().defaults
}
