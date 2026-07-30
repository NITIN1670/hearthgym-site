import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "HearthGym — Software that keeps your gym's fire burning.";
const DESCRIPTION =
  "Member management, WhatsApp renewal reminders, a lead CRM, and AI-generated Indian diet charts — all in one platform built for Indian gyms.";

// TODO: replace with the real azurewebsites.net hostname (or the custom domain, once
// connected) — needed so the og:image URL resolves to something WhatsApp/Facebook can
// actually fetch, instead of localhost.
const SITE_URL = "https://hearthgym-web.azurewebsites.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "en_IN",
    siteName: "HearthGym",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
