// packages
import React from 'react'
import cn from 'classnames'
// styles
import styles from './stylesButtonCounter'
import { IconMinus, IconPlus } from 'icons'

export interface IButtonCounter {
  count: number
  product: number
  handleChange: (count: number) => void
}

/** кнопка выбора количества */
const ButtonCounter: React.FC<IButtonCounter> = ({ count = 0, handleChange }: IButtonCounter) => {
  return (
    <div className={cn(
      'text-24 inline-flex items-center rounded-full overflow-hidden shadow',
      count > 0 ? 'bg-black text-white' : 'bg-white text-black'
    )}
    >
      {count > 0 &&
        <>
          <button className={styles.button} onClick={() => handleChange(count - 1)}>
            <IconMinus className='text-24' />
          </button>
          <span className='text-24 font-medium'>
            {count}
          </span>
        </>}
      <button className={styles.button} onClick={() => handleChange(count + 1)}>
        <IconPlus className='text-24' />
      </button>
    </div>
  )
}

export default React.memo(ButtonCounter)
