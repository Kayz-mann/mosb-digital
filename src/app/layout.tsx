import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  metadata,
}: {
  children: React.ReactNode;
  metadata: Metadata;
}) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <head>
          <title>{metadata.title as any}</title>
          <meta
            name="description"
            content={metadata.description || "Default Description"}
          />
          {metadata.openGraph && (
            <>
              <meta
                property="og:title"
                content={metadata.openGraph.title as any}
              />
              <meta
                property="og:description"
                content={
                  metadata.openGraph.description || "Default Description"
                }
              />
              <meta
                property="og:image"
                content={metadata.openGraph.images?.[0]?.url}
              />
            </>
          )}
          {metadata.twitter && (
            <>
              <meta
                name="twitter:card"
                content={metadata.twitter.cardType as any}
              />
              <meta
                name="twitter:title"
                content={metadata.twitter.title as any}
              />
              <meta
                name="twitter:description"
                content={metadata.twitter.description || "Default Description"}
              />
              <meta
                name="twitter:image"
                content={metadata.twitter.images?.[0]?.url as any}
              />
            </>
          )}
          {/* Add more metadata tags as needed */}
        </head>
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
