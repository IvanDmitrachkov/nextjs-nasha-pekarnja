import { IImageApi } from 'utils/getImagePath'

export type TypeMainPageApi = {
  id: number,
  title: string,
  text: string,
  // eslint-disable-next-line camelcase
  created_at: string
  // eslint-disable-next-line camelcase
  updated_at: string
  banner: {
    id: number
    title: string
    text: string
    link: unknown
    img: IImageApi
  },
  slider: [
    {
      id: 3,
      title: string
      text: string
      link: string
      img: IImageApi
    }
  ],
  img: IImageApi
}
