export interface LoginResponse {
  status: number
  code: number
  message: string
  data: {refresh_token: string}
}
