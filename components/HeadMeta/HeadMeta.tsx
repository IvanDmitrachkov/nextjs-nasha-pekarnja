// packages
import React from 'react'
import Head from 'next/head'

interface IHeadMeta {
  description?: string
  id?: number
  title?: string
}

/** мета данные */
const HeadMeta: React.FC<IHeadMeta> = ({ title, description }: IHeadMeta) => {
  return (
    <Head>
      <title>Наша пекарня {title ? ` - ${title}` : ''}</title>
      <meta name='description' content={description} />
    </Head>
  )
}

export default React.memo(HeadMeta)
