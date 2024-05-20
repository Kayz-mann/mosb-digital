import { gql, useQuery } from "@apollo/client";

// Define the interface for the blog post data
interface BlogPost {
  id: string;
  blogFields: {
    authorimage: {
      node: {
        id: string;
        uri: string;
      };
    };
    authorjobrole: string;
    authorname: string;
    category: string;
    companyname: string;
    companyposition: string;
    footerdescription: string;
    description: string;
    headline: string;
    image: {
      node: {
        id: string;
        uri: string;
      };
    };
    quote: string;
    quoteauthor: string;
    title: string;
  };
}

// Define the GraphQL query
const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    blogs {
      nodes {
        id
        blogFields {
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

// Create the custom hook with response type
const useApolloBlog = () => {
  const { data, loading, error } = useQuery<{ blogs: { nodes: BlogPost[] } }>(GET_BLOG_POSTS);

  return {
    data: data ? data.blogs.nodes : [],
    loading,
    error,
  };
};

export default useApolloBlog;
