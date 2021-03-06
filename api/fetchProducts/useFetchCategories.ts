// packages
import { useQuery, UseQueryResult } from 'react-query'
// api
import { axiosInstance } from 'api/axiosInstance'
// utils
import getImagePath from 'utils/getImagePath'
// types
import { ICardProduct } from 'components/CardProduct/CardProduct'
import { TypeCategoriesApi, TypeProductApi } from 'api/fetchProducts/types'

interface ICategory {
  title: string,
  products: ICardProduct[]
}

const _formatProduct = (products: TypeProductApi[], categoryText: string): ICardProduct[] =>
  products.map(item => ({
    title: item.title,
    image: getImagePath(item.cardImg),
    subtitle: categoryText
  }))

const useFetchCategories = (): UseQueryResult<ICategory[]> => {
  return useQuery(
    'categories',
    async (): Promise<ICategory[]> => {
      const { data } = await axiosInstance.get<TypeCategoriesApi[]>('categories')
      console.log(data)

      return data?.map(category => ({
        title: category.title,
        products: _formatProduct(category.products, category.title)
      }))
    }
  )
}

export default useFetchCategories
