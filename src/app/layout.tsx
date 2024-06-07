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
        url: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/345655004_6959752834040044_6880955102819334679_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7R9QzP7LRe1-jS9Z7NRCOIXgnYDFI3V4heCdgMUjdXhPVFiVcxvTAz5YBeocClrjvDF0nNzcrpN3wfbXGLWO8&_nc_ohc=c4Znrayve80Q7kNvgGhPxSZ&_nc_ht=scontent-los2-1.xx&oh=00_AYA9QTwXMSjWDagqYH7NdFwX5P-eqpj8xvTE0QdP0j4n9w&oe=6668EA23",
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
