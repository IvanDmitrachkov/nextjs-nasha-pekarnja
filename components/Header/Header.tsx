// packages
import React from 'react'
// icons
import { IconMenu } from 'icons'
// components
import IconLogo from 'icons/IconLogo'
import ButtonBasket from 'components/Header/ButtonBasket/ButtonBasket'

/** хедер */
const Header: React.FC = () => {
  return (
    <div className='bg-yellow'>
      <div className='wrapper flex items-center h-80 justify-between'>
        <div className='flex items-center'>
          <button className='w-32 h-32'>
            <span className='sr-only'>Открыть меню</span>
            <IconMenu className='text-brown text-32' />
          </button>
          <span className='text-12 font-medium w-2/3 pl-16 sm:hidden'>Доставка в Сыктывкаре до 50 минут</span>
        </div>
        <IconLogo className='text-brown h-32' />
        <div className='flex items-center'>
          <a className='text-24 text-brown font-bold mr-24 sm:hidden'>88005553535</a>
          <ButtonBasket />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
