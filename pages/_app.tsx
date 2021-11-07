// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  console.log({ Component });
  console.log({ pageProps });
  return <Component {...pageProps} />
}

export default MyApp
