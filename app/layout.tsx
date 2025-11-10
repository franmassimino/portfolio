import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Francisco Massimino - Portfolio",
    template: "%s | Francisco Massimino - Portfolio"
  },
  description: "Full stack developer with +4 years of experience creating and launching digital products. Building web applications that work, look great, and grow businesses.",
  keywords: ["full stack developer", "web developer", "Next.js", "React", "product development", "digital products", "Madrid"],
  authors: [{ name: "Francisco Massimino" }],
  creator: "Francisco Massimino",
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    siteName: "Francisco Massimino - Portfolio",
    title: "Francisco Massimino - Portfolio",
    description: "Full stack developer with +4 years of experience creating and launching digital products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Massimino - Portfolio",
    description: "Full stack developer with +4 years of experience creating and launching digital products.",
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (savedTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    // No saved theme, detect from system
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      document.documentElement.classList.add('dark');
                      localStorage.setItem('theme', 'dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                      localStorage.setItem('theme', 'light');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
