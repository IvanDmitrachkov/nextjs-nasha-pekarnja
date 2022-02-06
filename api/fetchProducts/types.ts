import { IImageApi } from 'utils/getImagePath'

export type TypeProductApi = {
  id: number
  title: string
  text: string
  price: number
  discount: number
  category: number
  discountText: string
  summery: string
  created_at: string
  updated_at: string
  images: IImageApi[],
  cardImg: IImageApi
}

export type TypeCategoriesApi = {
  created_at: string
  id: number
  img: IImageApi
  title: string
  updated_at: string
  products: TypeProductApi[]
}
