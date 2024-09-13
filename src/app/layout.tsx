import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ogImage from '../../public/og.jpg';
import Link from "next/link";
import Image from "next/image";

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

      <body className={`${inter.className} px-1 sm:px-3 lg:px-8 xl:px-20 w-screen relative flex flex-col overflow-x-hidden`}>
        <header  className="w-screen px-1 sm:px-3 lg:px-8 xl:px-20 flex flex-row justify-between items-center fixed top-0 left-0 h-20 bg-[#00001E30] backdrop-blur-lg z-50">
          <Link href="/" className="flex flex-row gap-1 md:gap-2 items-center">
            <Image src="/logo.png" alt="logo" width={60} height={60} className=" scale-75 md:scale-100" />
            <h3 className=" text-white font-semibold text-xl">Ascend.sh</h3>
          </Link>
          <div className="flex-1"></div>
          <button className=" text-xs lg:text-base text-white bg-gradient-to-r from-[#6663FF] to-[#7F00FE] rounded-full px-3 md:px-6 py-1 md:py-2 hover:opacity-80 transition-opacity">Download app</button>
        </header>
        <main className="flex min-h-screen flex-col w-full">
          {children}
        </main>

        <footer className="flex flex-row justify-between w-full h-20  items-center">
          <div>
            Ascend
          </div>
          <div className="flex flex-row gap-4">
            <Link href='https://twitter.com/ascend_sh' target="_blank">Twitter</Link>
            <Link href='https://discord.gg/9sDSGH2N' target="_blank">Discord</Link>
            <Link href='/privacy' target="_blank">Privacy Policy</Link>
          </div>
        </footer>
      </body>

    </html>
  );
}
