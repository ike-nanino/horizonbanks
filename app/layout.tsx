export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets:['latin'], variable: '--font-inter'});

const ibm = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: "Horizon Bank",
  description: "Horizon is a modern banking platform for everyone",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibm.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
