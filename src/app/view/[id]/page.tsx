// import { Metadata } from "next";
// import Head from "next/head";
// import { PageTemplate } from "@/components/shared/PageTemplate";
// import { getBlogPostById } from "@/getBlogs";

// export async function generateMetadata({
//   searchParams,
// }: {
//   searchParams: { id: string };
// }): Promise<Metadata> {
//   const id = searchParams?.id;
//   const data = await getBlogPostById(id);

//   if (!data) {
//     // Return default metadata if data is not found
//     return {
//       title: "Default Title",
//       description: "Default Description",
//       openGraph: {
//         title: "Default Title",
//         description: "Default Description",
//         images: [],
//         locale: "en_US",
//         type: "article",
//       },
//     };
//   }

//   const getFullImageUrl = (uri: any) =>
//     `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${uri}`;

//   const t = data?.title;
//   const h = data?.headline;

//   const title = t?.replaceAll(/<\/?[^>]+(>|$)/gi, "") || "Default Title";
//   const headline =
//     h?.replaceAll(/<\/?[^>]+(>|$)/gi, "") || "Default Description";

//   console.log("dataline|||||||", data);

//   return {
//     title: title,
//     description: headline,
//     openGraph: {
//       title: title,
//       description: headline,
//       images: [
//         {
//           url: getFullImageUrl(data?.image?.node.uri),
//           width: 800,
//           height: 600,
//         },
//       ],
//       locale: "en_US",
//       type: "article",
//     },
//   };
// }

// const View = async ({ searchParams }: { searchParams: { id: string } }) => {
//   const data = await getBlogPostById(searchParams.id);

//   const t = data?.title;
//   const h = data?.headline;

//   const title1 = t?.replaceAll(/<\/?[^>]+(>|$)/gi, "") || "Default Title";
//   const headline1 =
//     h?.replaceAll(/<\/?[^>]+(>|$)/gi, "") || "Default Description";

//   if (!data) {
//     // Handle the case where data is not found
//     return (
//       <>
//         <Head>
//           <title>{title1}</title>
//           <meta name="description" content={headline1} />
//           <meta property="og:title" content={title1} />
//           <meta property="og:description" content={headline1} />
//           <meta property="og:image" content="/path/to/default/image.jpg" />
//           <meta property="og:locale" content="en_US" />
//           <meta property="og:type" content="article" />
//         </Head>
//         <PageTemplate id={searchParams.id} />
//       </>
//     );
//   }

//   const getFullImageUrl = (uri: any) =>
//     `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${uri}`;

//   const title =
//     data?.title?.replaceAll(/<\/?[^>]+(>|$)/gi, "") || "Default Title";
//   const headline =
//     data?.headline?.replaceAll(/<\/?[^>]+(>|$)/gi, "") || "Default Description";
//   const imageUrl = getFullImageUrl(data?.image?.node.uri);

//   return (
//     <>
//       <Head>
//         <title>{title}</title>
//         <meta name="description" content={headline} />
//         <meta property="og:title" content={title || "Default Titlewwwwww"} />
//         <meta
//           property="og:description"
//           content={headline || "Default Descriptionsssss"}
//         />
//         <meta property="og:image" content={imageUrl} />
//         <meta property="og:locale" content="en_US" />
//         <meta property="og:type" content="article" />
//       </Head>
//       <PageTemplate id={searchParams.id} />
//     </>
//   );
// };

// export default View;
