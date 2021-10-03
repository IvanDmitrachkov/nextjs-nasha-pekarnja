import React from 'react'
import Warning from '../Warning'

export default {
  component: Warning,
  title: 'Warning'
}

/** шаблон сториса (обертка, делай везде просто как тут) */
const Template = (args) => (
  <div>
    <Warning
      {...args}
    />
  </div>
)

/** экспорт, чтобы сделать сторис */
export const Default = Template.bind({})
