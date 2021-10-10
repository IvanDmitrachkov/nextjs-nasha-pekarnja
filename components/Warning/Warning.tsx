import React from 'react'

export interface IWarning {
  title?: string
}

/** компонент - предупреждение */
const Warning:React.FC<IWarning> = ({ title }: IWarning) => {
  return (
    <div>{title}</div>
  )
}

export default Warning
