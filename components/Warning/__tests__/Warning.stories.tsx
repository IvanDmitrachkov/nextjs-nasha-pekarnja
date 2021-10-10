import React from 'react'
import Warning, { IWarning } from '../Warning'
import { Story } from '@storybook/react'

export default {
  component: Warning,
  title: 'tests/Warning'
}

/** шаблон сториса (обертка, делай везде просто как тут) */
const Template: Story<IWarning> = (args) => (
  <div className='bg-fog p-16'>
    <Warning
      {...args}
    />
  </div>
)

/** экспорт, чтобы сделать сторис */
export const Default = Template.bind({})
Default.args = { title: 'test' }
