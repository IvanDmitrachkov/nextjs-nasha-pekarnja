import React from 'react'
import CardProduct, { ICardProduct } from './CardProduct'
import { Story } from '@storybook/react'

/** экспорт истории */
export default {
  component: CardProduct,
  title: 'CardProduct'
}

/** шаблон */
const Template: Story<ICardProduct> = (args) => (
  <div className='lg:w-1/3'>
    <CardProduct
      {...args}
    />
  </div>
)

/** по умолчанию */
export const Default = Template.bind({})
Default.args = {
  title: 'Пирог с мясом',
  subtitle: 'Пироги',
  image: 'https://cms.nasha-pekarnya11.ru//uploads/a848ca97bfa54282ab7485dac9ecc86d.jpg',
  discount: '20',
  discountPrice: '1300',
  oldPrice: '240',
  price: '2400'
}
