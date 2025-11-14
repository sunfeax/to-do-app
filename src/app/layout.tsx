import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "To Do App",
  description: "To Do App with Next.js and TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interFont.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
