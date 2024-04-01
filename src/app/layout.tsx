import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ogImage from '../../public/og.jpg';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ascend",
  description: "Build strong habits, seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image" content={ogImage.src} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="2056" />
        <meta property="og:image:height" content="936" />
        <meta name="twitter:image" content={ogImage.src} />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="2056" />
        <meta name="twitter:image:height" content="936" />
        <meta
          name="keywords"
          content="solana, socials"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
