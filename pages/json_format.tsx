import { VFC } from 'react'
import { Layout } from '../components/layout/Layout'
import { AppHead } from '../components/layout/AppHead'
import { PageTitle } from '../components/layout/PageTitle'
import { JsonFormatter } from '../components/JsonFormatter/JsonFormatter'

const JsonFormat: VFC = () => {
  const title = 'JSON format'

  return (
    <Layout>
      <AppHead title={title} description="A tool to format JSON statements." />
      <PageTitle title={title} />
      <JsonFormatter />
    </Layout>
  )
}
export default JsonFormat
