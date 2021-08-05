import { VFC } from 'react'
import Head from 'next/head'

type AppHeadProps = {
  title: string
  description: string
}

export const AppHead: VFC<AppHeadProps> = (props) => {
  return (
    <Head>
      <title>{props.title} : Utility</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
