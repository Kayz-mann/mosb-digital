import { useState, useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectBlogPost } from "@/store/global";

export const useMetadata = () => {
  const [metadata, setMetadata] = useState({
    title:
    "Lupli From Plaid to Figma, here’s why many tech startups are postponing their IPOs until 2025",
  description:
    "Last year, investors were hopeful that 2024 would see a lot of companies going public through IPOs (Initial Public Offerings). However, as we near the middle of 2024, those hopes have mostly faded.",
  openGraph: {
    title:
      "From Plaid to Figma, here’s why many tech startups are postponing their IPOs until 2025",
    description:
      "Last year, investors were hopeful that 2024 would see a lot of companies going public through IPOs (Initial Public Offerings). However, as we near the middle of 2024, those hopes have mostly faded.",
    images: [
      {
        url: "https://www.mosbdigital.com/_next/image?url=https%3A%2F%2Fblog.mosbdigital.com%2F2024%2F05%2F25%2Ffrom-plaid-to-figma-heres-why-many-tech-startups-are-postponing-their-ipos-until-2025%2F53200113510_bb815ce7d9_k-jpg%2F&w=3840&q=75",
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
