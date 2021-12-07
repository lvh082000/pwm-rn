export interface GetDefaultsResponse {
  success: boolean
  data: DefaultType[]
}

export interface DefaultType {
  id: number
  name: string
}
