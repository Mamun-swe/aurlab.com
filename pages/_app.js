import '../styles/globals.css'
import NextNprogress from 'nextjs-progressbar'
import { MainHead } from '../components/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainHead />
      <NextNprogress
        color="#581c87"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
