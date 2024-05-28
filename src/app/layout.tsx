import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  metadata,
}: {
  children: React.ReactNode;
  metadata: Metadata | any;
}) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta property="og:title" content={metadata.openGraph?.title} />
          <meta
            property="og:description"
            content={metadata.openGraph?.description}
          />
          <meta
            property="og:image"
            content={metadata.openGraph?.images.image.url}
          />
          <meta property="og:type" content={metadata.openGraph?.type} />
          <meta property="og:locale" content={metadata.openGraph?.locale} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta
            name="twitter:image"
            content={metadata.openGraph?.images.image.url}
          />
          {metadata.verification?.google && (
            <meta
              name="google-site-verification"
              content={metadata.verification.google}
            />
          )}
          {/* Add other verification metadata if needed */}
        </Head>
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
