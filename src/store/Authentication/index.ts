import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LoginResponse} from 'types/Responses/LoginResponse'
import {SignTokenResponse} from 'types/Responses/SignTokenResponse'
import {login, signToken, verifyRegister} from './ThunkActions'

interface AuthenticationStore {
  accessToken: string
  refreshToken: string
}

const initialState: AuthenticationStore = {
  accessToken: '',
  refreshToken: '',
}

const AuthenticationSlice = createSlice({
  name: 'AUTHENTICATION_SLICE',
  initialState,
  reducers: {
    logout: state => {
      state.refreshToken = initialState.refreshToken
      state.accessToken = initialState.accessToken
    },
  },
  extraReducers: builder => {
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<LoginResponse>) => {
        state.refreshToken = action.payload.data?.refresh_token
      },
    )
    builder.addCase(
      verifyRegister.fulfilled,
      (state, action: PayloadAction<LoginResponse>) => {
        state.refreshToken = action.payload.data?.refresh_token
      },
    )
    builder.addCase(
      signToken.fulfilled,
      (state, action: PayloadAction<SignTokenResponse>) => {
        state.accessToken = action.payload.data?.access_token
      },
    )
  },
})

export default AuthenticationSlice.reducer

export * from './Selectors'
export * from './ThunkActions'

export const {logout} = AuthenticationSlice.actions
