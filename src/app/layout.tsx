import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "From Plaid to Figma, here’s why many tech startups are postponing their IPOs until 2025",
  description:
    "Last year, investors were hopeful that 2024 would see a lot of companies going public through IPOs (Initial Public Offerings). However, as we near the middle of 2024, those hopes have mostly faded.",
  openGraph: {
    title: "Default Title",
    description: "Default Description",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <Toaster />
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
