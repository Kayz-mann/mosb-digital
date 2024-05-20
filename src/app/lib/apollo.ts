import {ApolloClient, InMemoryCache} from "@apollo/client"
import { cache } from "react"


export const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
    cache: new InMemoryCache(),
})