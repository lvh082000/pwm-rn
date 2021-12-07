import {ReactionType, Paging} from '../Properties'

export interface GetReactionsPostResponse {
  status: number
  code: number
  message: string
  data: ReactionType[]
  paging: Paging
}
