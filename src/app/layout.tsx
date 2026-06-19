import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import MinimalLayout from "@/components/layout/MinimalLayout";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sumitsharmaa.me"),
  title: "Sumit Sharma – Design Engineer & Product Builder",
  description: "Design Engineer and Product Builder. I build products, landing pages, and SaaS experiences using React, Next.js, and modern web technologies.",
  openGraph: {
    title: "Sumit Sharma – Design Engineer & Product Builder",
    description: "Design Engineer and Product Builder. I build products, landing pages, and SaaS experiences using React, Next.js, and modern web technologies.",
    type: "website",
    url: "https://sumitsharmaa.me",
    siteName: "Sumit Sharma",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sumitdotme",
    creator: "@sumitdotme",
    title: "Sumit Sharma – Design Engineer & Product Builder",
    description: "Design Engineer and Product Builder. I build products, landing pages, and SaaS experiences using React, Next.js, and modern web technologies.",
  },
};

export const viewport = {
  themeColor: "#FF4D00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable} suppressHydrationWarning>
      <head>
        {/* Geist Font is self-hosted via next/font/google */}
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Toaster />
          <MinimalLayout>
            {children}
          </MinimalLayout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
