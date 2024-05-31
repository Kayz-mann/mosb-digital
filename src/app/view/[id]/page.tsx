/* eslint-disable react/no-unescaped-entities */

import { Metadata } from "next";
import { PageTemplate } from "@/components/shared/PageTemplate";
import { getBlogPostById } from "@/getBlogs";

interface paramProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: paramProps): Promise<Metadata> {
  const id = params.id;
  const data = await getBlogPostById(id);

  console.log(data);

  const t = data?.title;
  const h = data?.headline;

  const title = t?.replaceAll(/<\/?[^>]+(>|$)/gi, "");
  const headline = h?.replaceAll(/<\/?[^>]+(>|$)/gi, "");

  // Return metadata object
  return {
    title: title || "Default Title",
    description: headline || "Default Description",
    openGraph: {
      title: title || "Default Title",
      description: headline || "Default Description",
      images: [
        {
          url: data.image?.node.uri,
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

/* export const useMetadata = ({
  searchParams,
}: {
  searchParams: { id: string };
}): Metadata => {
  const { data: wp } = useApolloBlog();
  const post = wp.find((post: any) => post.id === searchParams.id);

  console.log("Blog Title:", post?.blog.title);
  return {
    title: `${post?.blog.title}` ?? "MOSB-DIGITAL",
  };
}; */

const View = ({ params }: paramProps) => {
  return <PageTemplate id={params.id} />;
};

export default View;
