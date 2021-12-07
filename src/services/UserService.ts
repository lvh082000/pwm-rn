import HttpService from 'services/HttpService'
import {GetUserInfoResponse} from 'types/Responses/GetUserInfoResponse'

const getUserInfo = async () => {
  return await HttpService.Get<GetUserInfoResponse>('/user/info')
}

export const UserService = {
  getUserInfo,
}
