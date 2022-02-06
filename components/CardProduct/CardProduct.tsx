// packages
import React from 'react'
import BgImage from 'components/BgImage/BgImage'
import cn from 'classnames'
import { IconArrowForward } from 'icons'
import Link from 'next/link'
import Warning from 'components/Warning/Warning'
import css from './cardProduct.module.css'

export interface ICardProduct {
  title?: string
  text?: string
  image?: string
  className?: string
  link?: string
  price?: string
  discountPrice?: string
  discount?: string
  subtitle?: string
  oldPrice?: string
}

/** карточка продукта */
const CardProduct: React.FC<ICardProduct> = ({
  title,
  image,
  subtitle,
  discount,
  oldPrice,
  discountPrice,
  link = '/'
}: ICardProduct) => {
  return (
    <Link href={link as any}>
      <a className={cn('block rounded-16 shadow', css.card)}>
        <BgImage image={image} className='h-240 p-16 overflow-hidden rounded-t-16'>
          {discount && <Warning title={`скидка ${discount}%`} />}
        </BgImage>
        <div className='h-140 relative flex flex-col justify-between py-12 px-24'>
          <div>
            <div className='text-14 mb-2'>{subtitle}</div>
            <h3 className='text-24 font-medium sm:text-18'>{title}</h3>
          </div>
          <div>
            {discountPrice && <span className='text-24 font-bold text-brown'>{discountPrice} руб.</span>}
            {oldPrice && <span className='text-18 pl-24 line-through text-gray'>{oldPrice} руб.</span>}
          </div>
          <IconArrowForward className={cn('absolute right-0 bottom-0 text-32 text-brown mr-24 mb-16 opacity-0', css.arrow)} />
        </div>
      </a>
    </Link>
  )
}

export default React.memo(CardProduct)
