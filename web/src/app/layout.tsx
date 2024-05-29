import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const inter = Roboto_Flex({ subsets: ["greek"] });

export const metadata: Metadata = {
  title: "nano",
  description: "nano, app para posts sobre outros projetos de S. Silva.",
  creator: "https://github.com/IsaacGSS",
  appleWebApp: true,
  category: 'Blog Profissional.',
  abstract: 'nano, app para posts sobre outros projetos de S. Silva.',
  icons: './favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
}
