import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Context } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "You Know Me",
  description: "Hi, this is Abhishek Kushwaha. Thanks for visiting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Context>{children}</Context>
      </body>
    </html>
  );
}
