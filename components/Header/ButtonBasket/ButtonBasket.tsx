// packages
import React from 'react'
import { IconBasket } from 'icons'

/** кнопка корзины в хедере */
const ButtonBasket: React.FC = () => {
  return (
    <button className='text-white bg-brown rounded h-48 px-24 text-16 flex items-center font-medium'>
      Корзина
      <IconBasket className='text-white ml-8 text-24' />
    </button>
  )
}

export default React.memo(ButtonBasket)
