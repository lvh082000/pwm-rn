export interface SignTokenResponse {
  status: number
  code: number
  message: string
  data: {access_token: string}
}
