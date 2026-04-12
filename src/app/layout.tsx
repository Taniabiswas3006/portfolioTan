import type { Metadata } from "next";
import { Poppins, Inter, Fira_Code, Antic } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const antic = Antic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-antic",
});

export const metadata: Metadata = {
  title: "Tania Biswas | Portfolio",
  description: "Computer Science Undergraduate | Machine Learning Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} ${firaCode.variable} ${antic.variable} antialiased bg-bg-light text-text-dark selection:bg-primary/30 font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
