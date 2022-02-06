import React from 'react'
import cn from 'classnames'

type TypeWarningVariant = 'red'|'green'

export interface IWarning {
  title?: string
  variant?: TypeWarningVariant
}

const variants: Record<TypeWarningVariant, string> = {
  red: 'text-white bg-red',
  green: 'text-white bg-green'
}

/** компонент - предупреждение */
const Warning:React.FC<IWarning> = ({ title, variant = 'red' }: IWarning) => {
  return (
    <div className={cn(
      'rounded py-4 px-16 font-medium text-12 inline-block',
      variants[variant]
    )}
    >
      {title}
    </div>
  )
}

export default Warning
