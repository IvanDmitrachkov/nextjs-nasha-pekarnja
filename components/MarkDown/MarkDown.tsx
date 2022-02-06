// packages
import React from 'react'
import cn from 'classnames'
import ReactMarkdown from 'react-markdown'
// styles
import css from './markDown.module.css'

interface IMarkDown {
  children: string
  className?: string
}

/** обертка для контента в формате mark-down */
const MarkDown: React.FC<IMarkDown> = ({ children, className }: IMarkDown) => {
  return (
    <ReactMarkdown
      className={cn(
        css.markdown,
        className
      )}
    >
      {children}
    </ReactMarkdown>
  )
}

export default React.memo(MarkDown)
