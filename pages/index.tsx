import { FC } from 'react'
import { Layout } from '../components/layout/Layout'
import { AppHead } from '../components/layout/AppHead'

const Home: FC = () => {
  return (
    <Layout>
      <AppHead title="Home" description="kkeisuke's collection of utility tools." />
    </Layout>
  )
}
export default Home
