import { GraphQLClient } from "graphql-request";

const endpoint = process.env.GRAPHQL_HOST as string

const hygraphClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default hygraphClient