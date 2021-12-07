// import {CommentType} from 'types/Properties'

export interface CreateCommentResponse {
  status: number
  code: 1
  message: string
  data: CommentType
}

export interface CommentType {
  content: string
  post_id: number
  url_media: Array<string>
  user_id: number
}
