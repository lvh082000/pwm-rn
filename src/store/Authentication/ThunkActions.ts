import {createAsyncThunk} from '@reduxjs/toolkit'
import {AuthenticationService} from 'services/AuthenticationService'
import {LoginParams, RegisterParams, VerifyRegisterParams} from 'types/Params'

export const LoginPrefix = '@Auth/Login'
export const SignTokenPrefix = '@Auth/SignToken'
export const RegisterPrefix = '@Auth/Register'
export const VerifyRegisterPrefix = '@Auth/VerifyRegister'

export const login = createAsyncThunk(
  LoginPrefix,
  async (values: LoginParams) => {
    return await AuthenticationService.login(values)
  },
)

export const signToken = createAsyncThunk(SignTokenPrefix, async () => {
  return await AuthenticationService.signToken()
})

export const register = createAsyncThunk(
  RegisterPrefix,
  async (values: RegisterParams) => {
    return await AuthenticationService.register(values)
  },
)

export const verifyRegister = createAsyncThunk(
  VerifyRegisterPrefix,
  async (values: VerifyRegisterParams) => {
    return await AuthenticationService.verifyRegister(values)
  },
)
