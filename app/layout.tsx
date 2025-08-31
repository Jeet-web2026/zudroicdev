import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "Zudroicdev",
    template: "%s | Zudroicdev",
  },
  description:
    "Zudroicdev is a modern career path platform that combines learning management, job applications, and AI-powered career guidance — helping learners grow and succeed.",
  keywords: [
    "Career Path",
    "Learning Management System",
    "Job Applications",
    "AI Career Guidance",
    "E-Learning",
    "Zudroicdev"
  ],
  authors: [{ name: "Zudroicdev Team", url: "https://zudroicdev.vercel.app/" }],
  creator: "Zudroicdev",
  publisher: "Zudroicdev",

  openGraph: {
    title: "Zudroicdev - AI-Powered Career Path System",
    description:
      "Learn, apply, and grow with Zudroicdev. A complete platform for learning management, job applications, and AI-driven career guidance.",
    url: "https://zudroicdev.vercel.app/",
    siteName: "Zudroicdev",
    images: [
      {
        url: "/assets/images/z-logo.png",
        width: 1200,
        height: 630,
        alt: "Zudroicdev Career Path Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zudroicdev - AI-Powered Career Path",
    description:
      "Build your future with Zudroicdev: Learning + Job Applications + Career Guidance with AI.",
    images: ["/assets/images/z-logo.png"],
    creator: "@zudroicdev",
  },

  icons: {
    icon: "/assets/images/z-logo.png",
    shortcut: "/assets/images/z-logo.png",
    apple: "/assets/images/z-logo.png",
  },

  metadataBase: new URL("https://zudroicdev.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
