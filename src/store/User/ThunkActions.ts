import {createAsyncThunk} from '@reduxjs/toolkit'
import {UserService} from 'services/UserService'

export const GetUserInfoPrefix = '@User/UserInfo'

export const getUserInfo = createAsyncThunk(GetUserInfoPrefix, async () => {
  return await UserService.getUserInfo()
})
