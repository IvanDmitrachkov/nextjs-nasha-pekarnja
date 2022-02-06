// packages
import React from 'react'
// components
import Banner, { IBanner } from 'components/BannerSlider/Banner/Banner'
import Slider from 'components/BannerSlider/Slider/Slider'

interface IBannerSlider {
  slides?: IBanner[]
}

const array = []

/** слайдер или баннер */
const BannerSlider: React.FC<IBannerSlider> = ({
  slides = array
}: IBannerSlider) => {
  return slides.length > 1
    ? <Slider slides={slides} />
    : <Banner {...slides?.[0]} />
}

export default React.memo(BannerSlider)
