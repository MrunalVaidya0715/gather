import "./globals.css";
import type { Metadata } from "next";
import { Inter, Geologica } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
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
      <html lang="en"  suppressHydrationWarning>
        <body className={cn(font.className, "bg-white dark:bg-[#1d2332]")}>
          <ThemeProvider 
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="gather-theme"
            >
          {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
