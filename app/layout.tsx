import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JS Mastery",
  description: "JS Mastery ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-black-100
      font-poppins"
      >
        {children}
      </body>
    </html>
  );
}
