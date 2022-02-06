import React, { useState } from 'react'
import ButtonCounter, { IButtonCounter } from './ButtonCounter'
import { Story } from '@storybook/react'

/** экспорт истории */
export default {
  component: ButtonCounter,
  title: 'ButtonCounter'
}

/** шаблон */
const Template: Story<IButtonCounter> = (args) => {
  const [count, setCount] = useState(args.count)

  return (
    <div>
      <ButtonCounter
        {...args}
        count={count}
        handleChange={setCount}
      />
    </div>
  )
}

/** по умолчанию */
export const Default = Template.bind({})
Default.args = {
  count: 0
}

/** со значением */
export const WithValue = Template.bind({})
WithValue.args = {
  count: 100
}
