// packages
import React from 'react'
import cn from 'classnames'
import BgImage from 'components/BgImage/BgImage'

export interface IBanner {
  image?: string
  title?: string
  text?: string
  className?: string
}

/** баннер */
const Banner: React.FC<IBanner> = ({ text, title, className, image }: IBanner) => {
  return (
    <div className={cn('bg-brown h-600 relative flex flex-col justify-end', className)}>
      <div className='wrapper relative z-10 pb-80 min-h-2/3'>
        <h2 className='text-white text-72 font-bold mb-24'>{title}</h2>
        <p className='text-white text-24'>{text}</p>
      </div>
      {image &&
        <BgImage
          image={image}
          className='absolute right-0 top-0 bottom-0 w-1/2 sm:w-full'
        >
          <div
            className='w-full h-full'
            style={{
              background: 'linear-gradient(89.93deg, #5b362e 0.08%, rgba(91,54,46, .7) 99.95%)'
            }}
          />
        </BgImage>
      }
    </div>
  )
}

export default React.memo(Banner)
