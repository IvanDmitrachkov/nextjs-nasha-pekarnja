// packages
import React from 'react'

interface IBgImage extends React.HTMLProps<HTMLDivElement>{
  image?: string
}

/** обертка с картинкой */
const BgImage: React.FC<IBgImage> = ({ image, ...otherProps }: IBgImage) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
      {...otherProps}
    />
  )
}

export default React.memo(BgImage)
