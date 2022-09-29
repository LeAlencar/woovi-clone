import type { NextPage } from 'next'
import CashBackSection from '../components/CashBackSection/CashBackSection'
import FirstSection from '../components/FirstSection'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'
import OmniSection from '../components/OmniSection'
import SalesSection from '../components/SalesSection/SalesSection'
import SecondSection from '../components/SecondSection'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <FirstSection />
      <CashBackSection />
      <SecondSection />
      <SalesSection />
      <OmniSection />
      <Footer />
    </>
  )
}

export default Home
