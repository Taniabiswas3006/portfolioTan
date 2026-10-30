import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Tania Biswas — AI Engineer & Full Stack Developer",
  description:
    "Personal editorial portfolio of Tania Biswas. AI Engineer & Full Stack Developer specializing in predictive models, OCR inference, edge computing, and ultra-fluid web architectures.",
  keywords: [
    "Tania Biswas",
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TinyML",
    "Scrivener Publishing",
    "Parot.Dev",
    "Portfolio",
  ],
  authors: [{ name: "Tania Biswas", url: "https://github.com/Taniabiswas3006" }],
  creator: "Tania Biswas",
  openGraph: {
    title: "Tania Biswas — AI Engineer & Full Stack Developer",
    description:
      "A Learner with Code and Coffee. Quiet luxury editorial portfolio showcasing AI models, OCR pipelines, and award-grade web apps.",
    url: "https://tania-biswas.vercel.app",
    siteName: "Tania Biswas Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0A09",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground transition-colors duration-500 antialiased selection:bg-[#FF85A1] selection:text-[#0B0A09] font-sans">
        <ThemeProvider>
          {/* Subtle Film Grain Noise Texture */}
          <div className="film-grain" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
