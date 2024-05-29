import { useState, useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectBlogPost } from "@/store/global";

export const useMetadata = () => {
  const [metadata, setMetadata] = useState({
    title: "Default Title x",
    description: "Default Description x",
    openGraph: {
      title: "Default Title",
      description: "Default Description",
      images: [
        {
          url: "/default-image.png",
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    verification: {
      google: "google",
      yandex: "yandex",
      yahoo: "yahoo",
      other: {
        me: [
          "info@mosbdigital.com",
          "https://www.mosbdigital.com/",
          "mosbdigital",
          "mosbdigital.com",
          "mosbdigital/blog",
        ],
      },
    },
  });

  const blogPost = useAppSelector(selectBlogPost);

  useEffect(() => {
    if (!blogPost) return;

    const updatedMetadata = {
      ...metadata,
      title: blogPost.title || metadata.title,
      description: blogPost.description || metadata.description,
      openGraph: {
        ...metadata.openGraph,
        title: blogPost.title || metadata.openGraph.title,
        description: blogPost.description || metadata.openGraph.description,
        images: [
          {
            url: blogPost.image?.node.uri
              ? `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${blogPost.image.node.uri}`
              : metadata.openGraph.images[0].url,
            width: metadata.openGraph.images[0].width,
            height: metadata.openGraph.images[0].height,
          },
        ],
      },
    };

    setMetadata(updatedMetadata);
  }, [blogPost]);

  return metadata;
};
