import {ReactionType} from '../Properties'

export interface GetReactionTypeResponse {
  status: number
  code: number
  message: string
  data: ReactionType[]
}
