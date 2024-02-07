import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Clone",
  description: "This is a clone of Discord that I made for fun and learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={open_sans.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
