import { FC } from 'react'
import dynamic from 'next/dynamic'
import { Layout } from '../components/layout/Layout'
import { AppHead } from '../components/layout/AppHead'
import { PageTitle } from '../components/layout/PageTitle'

const DateTimeFormatter = dynamic(() => import('../components/DateTimeFormat/DateTimeFormatter').then((module) => module.DateTimeFormatter), { ssr: false })

const DateTimeFormat: FC = () => {
  const title = 'DateTime format'
  return (
    <Layout>
      <AppHead title={title} description="DateTime format" />
      <PageTitle title={title} />
      <DateTimeFormatter />
    </Layout>
  )
}
export default DateTimeFormat
