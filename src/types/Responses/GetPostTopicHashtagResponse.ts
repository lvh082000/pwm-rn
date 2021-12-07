import {PostTopicHashtagType} from '../Properties'

export interface GetPostTopicHashtagResponse {
  status: number
  code: number
  message: string
  data: PostTopicHashtagType[]
}
