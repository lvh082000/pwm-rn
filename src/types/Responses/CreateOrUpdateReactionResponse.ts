export interface CreateOrUpdateReactionResponse {
  status: number
  code: number
  message: string
  data: CreateReactionData
}

export interface CreateReactionData {
  type: string
  data: CreateReactionDetails
  priority: number
  progress: number
  attempts: Attempts
}

export interface CreateReactionDetails {
  post_id: number
  user_id: number
  df_reaction_id: number
  create_by: number
}

export interface Attempts {
  made: number
  remaining: number
  max: number
}
