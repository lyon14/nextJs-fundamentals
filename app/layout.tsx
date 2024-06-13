import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Next.js Fundamentals",
  description: "J1yen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <h1>
            <Link href="/">J1yen</Link>
          </h1>
          <div className="flex gap-2">
            <Link href="/home">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/settings">settings</Link>
            <Link href="/conference">conference</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
