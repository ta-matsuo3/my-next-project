import type { Metadata } from "next";
import "./globals.css";
import Header from "./_compornents/Header/Header";
import Footer from "./_compornents/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
