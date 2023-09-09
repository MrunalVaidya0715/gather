import "./globals.css";
import type { Metadata } from "next";
import { Inter, Geologica } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
const font = Geologica({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gather",
  description: "The future of online socializing, made simple!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}