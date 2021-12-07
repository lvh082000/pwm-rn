import {UserHashtagType} from '../Properties'

export interface GetUserHashtagResponse {
  status: number
  code: number
  message: string
  data: UserHashtagType[]
}
