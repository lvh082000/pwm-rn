import {ReactionType} from 'types/Properties'

export interface LoginParams {
  username: string
  password: string
  name_device: string
}

export interface RegisterParams {
  phone: string
  email: string
  name: string
  password: string
  date_of_birth: number
}

export interface VerifyRegisterParams {
  id: number
  code: string
}

export interface UploadedFileParams {
  uri: string
  type: string
  name: string
}

export interface CommentParams {
  postId: number
  countComment: number
  reactions: Array<ReactionType>
}
