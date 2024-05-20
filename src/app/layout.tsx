import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mosb Digital",
  description: "Fuelling Entrepreneurial Successs...",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["info@mosbdigital.com", "https://www.mosbdigital.com/", "mosbdigital", "mosbdigital.com", "mosbdigital/blog"],

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
