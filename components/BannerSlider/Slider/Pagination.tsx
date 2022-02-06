// packages
import React from 'react'
import cn from 'classnames'

interface IPagination {
  scrollSnaps: number[]
  selectedIndex: number
  scrollTo: (index: number) => void
}

/** пагинация слайдера */
const Pagination: React.FC<IPagination> = ({
  scrollSnaps,
  selectedIndex,
  scrollTo
}: IPagination) => {
  return (
    <div className='flex justify-center w-full absolute bottom-0 mb-24 left-0 right-0 w-1/3 mx-auto'>
      {scrollSnaps.map((_, index) => (
        <button
          className='w-full mx-8 py-8'
          key={index}
          onClick={() => scrollTo(index)}
        >
          <div className={cn(
            'rounded h-4',
            index === selectedIndex ? 'bg-yellow' : 'bg-white'
          )}
          />
        </button>
      ))}
    </div>
  )
}

export default React.memo(Pagination)
