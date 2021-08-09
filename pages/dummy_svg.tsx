import { VFC } from 'react'
import { Layout } from '../components/layout/Layout'
import { AppHead } from '../components/layout/AppHead'
import { PageTitle } from '../components/layout/PageTitle'
import { DummySVG } from '../components/DummySVG/DummySVG'

const DummySVGPage: VFC = () => {
  const title = 'Dummy SVG'

  return (
    <Layout>
      <AppHead title={title} description="Tool to create a dummy svg" />
      <PageTitle title={title} />
      <DummySVG />
    </Layout>
  )
}
export default DummySVGPage
