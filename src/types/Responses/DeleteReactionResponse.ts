export interface DeleteReactionResponse {
  status: number
  code: number
  message: string
  data: DeleteReactionData
}

export interface DeleteReactionData {
  type: string
  data: DeleteReactionDetails
  priority: number
  progress: number
  attempts: Attempts
}

export interface DeleteReactionDetails {
  is_active_delete: number
  update_by: number
  update_at: string
  post_id: number
  user_id: number
  is_active: number
}

export interface Attempts {
  made: number
  remaining: number
  max: number
}
