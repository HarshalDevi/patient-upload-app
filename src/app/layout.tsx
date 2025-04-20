import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patient Upload App",
  description: "Upload and edit patient data from CSV",
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
