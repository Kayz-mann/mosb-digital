import { Inter } from "next/font/google";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";
import { Toaster } from "react-hot-toast";
import { useMetadata } from "./hooks/useMetaData";

const inter = Inter({ subsets: ["latin"] });
export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const metadata = useMetadata();

  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <Toaster />
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
};
