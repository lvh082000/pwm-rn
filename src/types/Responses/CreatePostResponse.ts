import {PostType} from '../Properties'

export interface CreatePostResponse {
  status: number
  code: number
  message: string
  data: PostType[]
}
