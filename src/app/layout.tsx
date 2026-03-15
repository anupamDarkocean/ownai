import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OwnAI — Build it with AI. Own it forever.",
  description: "Build full-stack apps with AI. Clean code, your GitHub, deployable anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-zinc-950">
      <body
        className={`${geist.variable} font-sans antialiased h-full bg-zinc-950 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}