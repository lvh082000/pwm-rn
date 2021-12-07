import {persistReducer} from 'redux-persist'
import RootReducers from './reducers'
import AsyncStorage from '@react-native-async-storage/async-storage'

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authentication', 'user', 'defaults', 'posts'],
}

const PersistReducer = persistReducer(config, RootReducers)
export default PersistReducer
