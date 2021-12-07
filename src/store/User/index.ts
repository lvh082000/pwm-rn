import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {GetUserInfoResponse, User} from 'types/Responses/GetUserInfoResponse'
import {getUserInfo} from './ThunkActions'

interface UserStore {
  userInfo: User | undefined
}

const initialState: UserStore = {
  userInfo: undefined,
}

const UserSlice = createSlice({
  name: 'USER_SLICE',
  initialState,
  reducers: {
    logout: state => {
      state.userInfo = initialState.userInfo
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getUserInfo.fulfilled,
      (state, action: PayloadAction<GetUserInfoResponse>) => {
        state.userInfo = action.payload.data
      },
    )
  },
})

export default UserSlice.reducer

export * from './Selectors'
export * from './ThunkActions'

export const {logout} = UserSlice.actions
