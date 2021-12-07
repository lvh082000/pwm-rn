import {combineReducers} from '@reduxjs/toolkit'
import Auth from './Authentication'
import Status from './Status'
import User from './User'
import Defaults from './Defaults'
import Posts from './Posts'

const RootReducers = combineReducers({
  status: Status,
  authentication: Auth,
  user: User,
  defaults: Defaults,
  posts: Posts,
})

export default RootReducers
