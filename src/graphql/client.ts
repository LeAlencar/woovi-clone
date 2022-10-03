import { GraphQLClient } from "graphql-request";

const endpoint = process.env.GRAPHQL_HOST as string

const strapiClient = new GraphQLClient(endpoint)

export default strapiClient