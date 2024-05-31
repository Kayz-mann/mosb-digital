import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

// Define the GraphQL query
const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    posts {
      nodes {
        id
        blog {
          authorimage {
            node {
              id
              uri
            }
          }
          authorjobrole
          authorname
          category
          companyname
          companyposition
          footerdescription
          description
          headline
          image {
            node {
              id
              uri
            }
          }
          quote
          quoteauthor
          title
        }
      }
    }
  }
`;

async function fetchBlogPosts() {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`, // Update with your GraphQL endpoint
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_BLOG_POSTS,
  });

  return data.posts.nodes;
}

export async function getBlogPostById(id: string) {
  const blogPosts = await fetchBlogPosts();
  return blogPosts.find((post: any) => post.id === id)?.blog || null;
}
