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

export const metadata = {
  title: "Nic || Blessed People, Blessing Lives.",
  description: "Welcome to NIC Church, a community of believers united in faith. Join us for uplifting worship, powerful teachings, and a life-changing experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <link rel="shortcut icon" href="/favi.png" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
