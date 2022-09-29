import type { NextPage } from 'next'
import CashBackSection from './components/CashBackSection/CashBackSection'
import FirstSection from './components/FirstSection'
import Header from './components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <FirstSection />
      <CashBackSection />
    </>
  )
}

export default Home
