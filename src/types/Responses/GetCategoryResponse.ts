export interface GetCategoryResponse {
  status: number
  code: number
  message: string
  data: Category[]
}

export interface Category {
  id: number
  name: string
  order_number: number
  icon_url: string
  categories: Category1[]
}

export interface Category1 {
  id: number
  name: string
  order_number: number
  parent_id: number
  icon_url: string
  categories: Category2[]
}

export interface Category2 {
  id: number
  name: string
  order_number: number
  parent_id: number
  icon_url: string
}
