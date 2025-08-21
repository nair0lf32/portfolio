import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { VT323 } from "next/font/google";
import "./globals.css";


const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "EDEMESSI Florian's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${vt323.className} antialiased bg-zinc-200 dark:bg-zinc-950 dark:text-white
        transition-all text-center p-0 m-0 w-full h-full`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
