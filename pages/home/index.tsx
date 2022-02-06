// packages
import React from 'react'
// components
import BannerSlider from 'components/BannerSlider/BannerSlider'
import HeadMeta from 'components/HeadMeta/HeadMeta'
// hooks
import useFetchMainPage from 'api/fetchMainPage/useFetchMainPage'
import useFetchMeta from 'api/fetchMeta/useFetchMeta'
import ListProducts from 'modules/ListProducts/ListProducts'

const HomePage: React.FC = () => {
  const { data } = useFetchMainPage()
  const { data: meta } = useFetchMeta()

  return (
    <div className='pb-100 bg-fog'>
      <HeadMeta {...meta?.mainPage} />
      <BannerSlider slides={data?.slides} />
      <ListProducts />
    </div>
  )
}

export default HomePage
