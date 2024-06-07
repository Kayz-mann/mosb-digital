import { Inter } from "next/font/google";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mosb Digital",
  description:
    "Fuelling Entrepreneurial Success Through Strategic Content Management",
  openGraph: {
    title: "Mosb Digital",
    description:
      "Fuelling Entrepreneurial Success Through Strategic Content Management",
    images: [
      {
        url: "https://www.mosbdigital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fm-logo.d2a15e03.png&w=128&q=75",
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
