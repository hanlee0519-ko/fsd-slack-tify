import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/app/styles/global.css";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSD",
  description: "Understanding FSD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
