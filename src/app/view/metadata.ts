// import { Metadata } from "next";
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// // Create an Apollo Client
// const client = new ApolloClient({
//   uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
//   cache: new InMemoryCache(),
// });

// // Define your GraphQL query
// const GET_BLOG_POST = gql`
//   query GetBlogPost($id: ID!) {
//     post(id: $id) {
//       title
//       description
//       image {
//         uri
//       }
//     }
//   }
// `;

// export async function generateMetadata(id?: string): Promise<Metadata> {
//   const { data } = await client.query({
//     query: GET_BLOG_POST,
//     variables: { id },
//   });

//   const blogPost = data.post;
//   const getFullImageUrl = (uri: any) =>
//     `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${uri}`;


//   console.log('BLE',blogPost)

//   return {
//     title: blogPost.title,
//     description: blogPost.description,
//     openGraph: {
//       images: [getFullImageUrl(blogPost.image.uri)],
//     },
//   };
// }

// metadata.ts
export async function generateMetadata(id: string) {
  // Fetch blog post data based on the id
  const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts/${id}`);
  const data = await response.json();

  // Return metadata object
  return {
    title: data.title.rendered || "Default Title",
    description: data.headline.rendered || "Default Description",
  };
}

