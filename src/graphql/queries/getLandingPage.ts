const GET_LANDING_PAGE = /* GraphQL */ `
  query {
    pages(filters: {
      slug: {
        eq: "cashback"
      }
    }) {
      data {
        attributes {
          pageSection {
            id
            title
            subtitle
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
export default GET_LANDING_PAGE