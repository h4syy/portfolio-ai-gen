import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash's Portfolio",
  description: "Created with love",
  generator: "KEKW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
