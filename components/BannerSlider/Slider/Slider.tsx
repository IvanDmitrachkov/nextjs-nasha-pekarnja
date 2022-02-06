// packages
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
// hooks
import useEmblaCarousel from 'embla-carousel-react'
// components
import Banner, { IBanner } from 'components/BannerSlider/Banner/Banner'
import Pagination from 'components/BannerSlider/Slider/Pagination'

interface ISlider {
  slides?: IBanner[]
}

/** слайдер */
const Slider: React.FC<ISlider> = ({ slides }: ISlider) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 10000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  )

  const [emblaRef, embla] = useEmblaCarousel({
    skipSnaps: false
  }, [
    autoplay.current
  ])

  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    // setPrevBtnEnabled(embla.canScrollPrev())
    // setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  // const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  // const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <div className='relative'>
      <div ref={emblaRef} className='overflow-hidden'>
        <ul className='flex bg-brown'>
          {slides?.map((item, key) => (
            <li key={key} className='flex-0-0-100'>
              <Banner {...item} />
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        scrollSnaps={scrollSnaps}
        scrollTo={scrollTo}
        selectedIndex={selectedIndex}
      />
    </div>
  )
}

export default React.memo(Slider)
