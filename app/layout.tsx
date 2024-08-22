import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/app/styles/global.css";

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
    <html lang="en">
      <body className={inter.className}>
        <h1>Understanding FSD</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
