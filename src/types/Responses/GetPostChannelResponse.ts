import {PostChannelType} from '../Properties'

export interface GetPostChannelResponse {
  status: number
  code: number
  message: string
  data: PostChannelType[]
}
