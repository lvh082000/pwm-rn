import {CommentType, Paging} from '../Properties'

export interface GetCommetPostResponse {
  status: number
  code: number
  message: string
  data: CommentType[]
  paging: Paging
}
