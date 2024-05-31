/* eslint-disable react/no-unescaped-entities */

import { Metadata } from "next";
import useApolloBlog from "../hooks/useApolloBlog";
import { PageTemplate } from "@/components/shared/PageTemplate";
import { getBlogPostById } from "@/getBlogs";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { id: string };
}): Promise<Metadata> {
  const id = searchParams.id;
  const data = await getBlogPostById(id);

  const t = data?.title;
  const h = data?.headline;

  const title = t?.replaceAll(/<\/?[^>]+(>|$)/gi, "");
  const headline = h?.replaceAll(/<\/?[^>]+(>|$)/gi, "");

  // Return metadata object
  return {
    title: title || "Default Title",
    description: headline || "Default Description",
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

const View = ({ searchParams }: { searchParams: { id: string } }) => {
  console.log("SEARCH", searchParams);

  return <PageTemplate id={searchParams.id} />;
};

export default View;
