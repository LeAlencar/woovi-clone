const GET_LANDING_PAGE = /* GraphQL */ `
query landingPage {
  page(where: {name: "cashback"}) {
    name
    sections {
      ... on Section {
        subtitle
        title
        image {
          url
        }
      }
    }
  }
}
`
export default GET_LANDING_PAGE