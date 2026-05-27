import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://basharismail.pro"),
  title: "Bashar V Ismail – Full Stack Developer",
  description:
    "Full Stack Developer with 4+ years of experience. MERN Stack specialist — React.js, Node.js, MongoDB, Docker. 1 year UAE experience. Available for immediate joining.",
  icons: {
    icon: "/forfavicon.png",
  },
  openGraph: {
    title: "Bashar V Ismail – Full Stack Developer",
    description: "MERN Stack · React · Node.js · MongoDB · 4+ yrs · UAE experience. Open to new opportunities.",
    url: "https://basharismail.pro",
    siteName: "basharismail.pro",
    images: [
      {
        url: "/foropengraph_low.png",
        width: 1200,
        height: 630,
        alt: "Bashar V Ismail – Full Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bashar V Ismail – Full Stack Developer",
    description: "MERN Stack · React · Node.js · MongoDB · 4+ yrs · UAE experience. Open to new opportunities.",
    images: ["/foropengraph_low.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
