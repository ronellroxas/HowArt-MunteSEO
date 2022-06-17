import Layout from '../components/layout'
import LandingPage from '../components/landingPage'

export default function Home() {
  return (
    <LandingPage />
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}