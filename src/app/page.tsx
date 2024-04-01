"use client"

import Image from "next/image";
import Hero from "./home/Hero";
import Numbers from "./home/Numbers";
import Dare from "./home/Dare";
// import Challenge from "./home/Challenge";
import Witness from "./home/Witness";
import Friends from "./home/Friends";
import Lock from "./home/Lock";
import Commit from "./home/Commit";
import End from "./home/End";
import CTA from "./home/CTA";
import { Parallax } from "@react-spring/parallax";
import Challenge from "./home/Challenge copy 2";
// import Challenge from "./home/Challenge copy";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden w-screen">
      <header className="flex flex-row justify-between w-full fixed top-0 h-20 px-12 items-center bg-[#00001E30] backdrop-blur-lg z-50">
        <div className="flex flex-row gap-2 items-center">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
          <h3 className=" text-white font-semibold text-xl">Ascend.sh</h3>
        </div>
        <button className="text-white bg-gradient-to-r from-[#6663FF] to-[#7F00FE] rounded-full px-6 py-2 hover:opacity-80 transition-opacity">Download app</button>

      </header>
      <div className=" w-full flex flex-col items-center gap-72">
        <Hero />
        <Numbers />
        <Challenge />
        <Witness />
        <Friends />
        <Lock />
        <Commit />
        <End />
        <CTA />
      </div>
      <footer className="flex flex-row justify-between w-full h-20 px-12 items-center">
        <div>
          Ascend
        </div>
        <div className="flex flex-row gap-4">
          <p>Twitter</p>
          <p>Discord</p>
        </div>
      </footer>
    </main>
  );
}
