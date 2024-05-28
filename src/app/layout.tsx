import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

type ExtendedMetadata = Metadata & {
  openGraph: {
    title: string;
    description?: string;
    images?: Array<{ url: string; width?: number; height?: number }>;
    locale?: string;
    type?: string;
  };
  verification?: {
    google?: string;
    yandex?: string;
    yahoo?: string;
    other?: {
      me?: string[];
    };
  };
};
export default function RootLayout({
  children,
  metadata,
}: {
  children: React.ReactNode;
  metadata: ExtendedMetadata;
}): JSX.Element {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <Head>
          <title>{metadata.openGraph.title}</title>
          <meta
            name="description"
            content={metadata.description ?? "Default Description"}
          />
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta
            property="og:description"
            content={metadata.openGraph.description ?? "Default OG Description"}
          />
          {metadata.openGraph.images?.map((image, index) => (
            <meta key={index} property="og:image" content={image.url} />
          ))}
          <meta
            property="og:type"
            content={metadata.openGraph.type ?? "website"}
          />
          <meta
            property="og:locale"
            content={metadata.openGraph.locale ?? "en_US"}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.openGraph.title} />
          <meta
            name="twitter:description"
            content={
              metadata.openGraph.description ?? "Default Twitter Description"
            }
          />
          {metadata.openGraph.images?.map((image, index) => (
            <meta key={index} name="twitter:image" content={image.url} />
          ))}
          {metadata.verification?.google && (
            <meta
              name="google-site-verification"
              content={metadata.verification.google}
            />
          )}
          {/* Add other verification metadata if needed */}
        </Head>
        <body>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
