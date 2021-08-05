import { VFC } from 'react'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

const App: VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}
export default App
