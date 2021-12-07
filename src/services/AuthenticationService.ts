import HttpService from 'services/HttpService'
import {LoginParams, RegisterParams, VerifyRegisterParams} from 'types/Params'
import {LoginResponse} from 'types/Responses/LoginResponse'
import {LogoutResponse} from 'types/Responses/LogoutResponse'
import {SignTokenResponse} from 'types/Responses/SignTokenResponse'
import {RegisterResponse} from 'types/Responses/RegisterResponse'

const login = async (values: LoginParams) => {
  return await HttpService.Post<LoginResponse>('/auth/login', values)
}

const signToken = async () => {
  return await HttpService.Post<SignTokenResponse>('/auth/sign-token', {})
}

const logout = async () => {
  return await HttpService.Put<LogoutResponse>('/auth/logout', {})
}

const register = async (values: RegisterParams) => {
  return await HttpService.Post<RegisterResponse>('/auth/register', values)
}

const verifyRegister = async (values: VerifyRegisterParams) => {
  return await HttpService.Post<LoginResponse>('/auth/verify-register', values)
}

export const AuthenticationService = {
  login,
  signToken,
  logout,
  register,
  verifyRegister,
}
