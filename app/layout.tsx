import { ThemeProvider } from '@/components/providers/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils';

const font = Open_Sans({ subsets: ["latin"] });

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
        <body className={cn
          (font.className,
            "bg-white dark:bg-gray-900"
          )}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={true}
            storageKey='discord-theme'
          >{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
