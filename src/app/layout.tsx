import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import MinimalLayout from "@/components/layout/MinimalLayout";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Sumit Sharma — Design Engineer · Open to Work",
  description: "Design Engineer who bridges Figma and Code. Building polished, interactive interfaces. Open to full-time roles and freelance projects.",
  openGraph: {
    title: "Sumit Sharma — Design Engineer · Open to Work",
    description: "Design Engineer who bridges Figma and Code. Building polished, interactive interfaces. Open to full-time roles and freelance projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <MinimalLayout>
            {children}
          </MinimalLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
