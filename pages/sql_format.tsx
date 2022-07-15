import { FC } from 'react'
import { Layout } from '../components/layout/Layout'
import { AppHead } from '../components/layout/AppHead'
import { PageTitle } from '../components/layout/PageTitle'
import { SqlFormatter } from '../components/SqlFormatter/SqlFormatter'

const SqlFormat: FC = () => {
  const title = 'SQL format'

  return (
    <Layout>
      <AppHead title={title} description="A tool to format SQL statements." />
      <PageTitle title={title} />
      <SqlFormatter />
    </Layout>
  )
}
export default SqlFormat
