import { useQuery, UseQueryResult } from 'react-query'
import { axiosInstance } from 'api/axiosInstance'

interface IMetaApi {
  description?: string
  id: number
  title?: string
}

type pageVariant = 'about'|'basket'|'form'|'mainPage'|'news'

const useFetchMeta = (): UseQueryResult<Record<pageVariant, IMetaApi>> => {
  return useQuery('meta',
    async () => {
      const { data } = await axiosInstance.get('meta')

      return data
    })
}

export default useFetchMeta
