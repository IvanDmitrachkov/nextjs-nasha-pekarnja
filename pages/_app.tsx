// packages
import React, { useState } from 'react'
import { Hydrate } from 'react-query/hydration'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppProps } from 'next/app'
// styles
import 'styles/roboto/stylesheet.css'
import 'styles/global.css'

function MyApp ({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
