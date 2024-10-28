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

      <body className={`${inter.className} relative flex flex-col overflow-x-hidden w-screen`}>
        <header className="simple-padding flex flex-row justify-between items-center fixed top-0 left-0 h-20 bg-[#00001E30] backdrop-blur-lg z-50">
          <Link href="/" className="flex flex-row gap-1 md:gap-2 items-center">
            <Image src="/logo.png" alt="logo" width={60} height={60} className=" scale-75 md:scale-100" />
            <h3 className=" text-white font-semibold text-xl">Ascend.sh</h3>
          </Link>
          <div className="flex-1"></div>
          <div className="flex flex-row gap-2">

            <div className="relative group">
                <button
                    className="text-xs lg:text-base text-white bg-gradient-to-r from-[#6663FF] to-[#7F00FE] rounded-full px-3 md:px-6 py-1 md:py-2 hover:opacity-80 transition-opacity cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                    disabled
                >
                    Download App
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Coming soon!
                </div>
            </div>
            {/* <button className=" text-xs lg:text-base text-white bg-gradient-to-r from-[#6663FF] to-[#7F00FE] rounded-full px-3 md:px-6 py-1 md:py-2 hover:opacity-80 transition-opacity cursor-pointer">
              Twitter
            </button> */}
          </div>
        </header>
        <main className="flex flex-col w-full">
          {children}
        </main>
        <footer className="simple-padding py-8 flex flex-col justify-between items-start text-white">
          <hr className="w-full border-t border-white/20 my-4 sm:my-6" />
          <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4">
            <p className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">Ascend</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
                <a href="https://twitter.com/ascend_sh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                <a href="https://discord.gg/ymVPRnpuqC" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a>
                <a href="https://warpcast.com/~/channel/ascend" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Farcaster</a>
              </div>
              <span className="hidden sm:inline text-white/20">|</span>
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-4 text-center w-full">© 2024 Ascend. All rights reserved.</p>
        </footer>
      </body>

    </html>
  );
}
