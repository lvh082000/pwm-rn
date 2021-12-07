import {PostType, Paging} from '../Properties'

export interface GetPostsResponse {
  status: number
  code: number
  message: string
  data: PostType[]
  paging: Paging
}
