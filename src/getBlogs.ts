import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

// Define the GraphQL query for fetching a blog post by ID
const GET_BLOG_POST_BY_ID = gql`
  query GetBlogPostById($id: ID!) {
    post(id: $id) {
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
`;

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`, // Update with your GraphQL endpoint
  cache: new InMemoryCache(),
});

// Function to fetch a blog post by its ID
export async function getBlogPostById(id: string) {
  try {
    const { data } = await client.query({
      query: GET_BLOG_POST_BY_ID,
      variables: { id },
    });

    if (data && data.post) {
      console.log('Returned data: ', data.post.blog);
      return data.post.blog;
    }

    console.log('No blog post found for the given ID.');
    return null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}
