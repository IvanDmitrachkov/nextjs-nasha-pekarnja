import { apiUrl } from 'api/axiosInstance'

export interface IImageApi {
  // eslint-disable-next-line camelcase
  created_at: string
  ext: string
  hash: string
  id: 6
  mime: string
  name: string
  provider: string
  // eslint-disable-next-line camelcase
  provider_metadata: unknown
  sha256: string
  size: number
  // eslint-disable-next-line camelcase
  updated_at: string
  url: string
}

const getImagePath = (image?: IImageApi) => apiUrl + image?.url
export default getImagePath
