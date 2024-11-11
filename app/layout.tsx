import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/app/styles/global.css";
import { ReactQueryClientProvider } from "@/src/shared/react-query/reactQuery-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "slack-tify",
  description: "Han Lee's Project based on Slack Service",
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
