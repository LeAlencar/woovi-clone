import type { GetStaticProps, NextPage } from 'next'
import CashBackSection from '../components/CashBackSection/CashBackSection'
import FirstSection from '../components/FirstSection'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'
import OmniSection from '../components/OmniSection'
import SalesSection from '../components/SalesSection/SalesSection'
import SecondSection from '../components/SecondSection'
import GET_LANDING_PAGE from '../graphql/queries/getLandingPage'
import { SectionsProps } from '../types/api'
import strapiClient from '../graphql/client'

const Home = ({sections}: SectionsProps) => {
  console.log(sections[0])
  return (
    <>
      <Header />
      <FirstSection section={sections[0]} />
      <CashBackSection section={sections[1]} />
      <SecondSection section={sections[2]}/>
      <SalesSection section={sections[3]}/>
      <OmniSection section={sections[4]}/>
      <Footer />
    </>
  )
}

export const getStaticProps:GetStaticProps = async() => {
  const { pages } = await strapiClient.request(GET_LANDING_PAGE);
  const response = pages.data[0].attributes.pageSection

  return {
    props: {
      sections: response,
    },
    revalidate: 60 * 24
  };
}


export default Home
