export interface GetUserInfoResponse {
  status: number
  code: number
  message: string
  data: User
}

export interface User {
  id: number
  name: string
  phone: string
  email: string
  gender: string
  date_of_birth: string
  describe: string
  create_at: string
  update_at: string
}
