import { useQuery, UseQueryResult } from 'react-query'
import { axiosInstance } from 'api/axiosInstance'
import { TypeMainPageApi } from 'api/fetchMainPage/types'
import { IBanner } from 'components/BannerSlider/Banner/Banner'
import getImagePath from 'utils/getImagePath'

interface UseFetchMainPage {
  slides?: IBanner[]
}

const useFetchMainPage = (): UseQueryResult<UseFetchMainPage> => {
  return useQuery('mainPage',
    async (): Promise<UseFetchMainPage> => {
      const { data } = await axiosInstance.get<TypeMainPageApi>('/main-page')
      console.log(data)
      const slides: IBanner[] = data?.slider?.map(slide => ({
        title: slide.title,
        text: slide.text,
        image: getImagePath(slide.img)
      }))

      return {
        slides
      }
    })
}

export default useFetchMainPage
