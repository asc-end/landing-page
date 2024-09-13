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
import Challenge from "./home/Challenge copy 2";
import Link from "next/link";
// import Challenge from "./home/Challenge copy";
export default function Home() {
  return (
      <div className=" w-full flex flex-col items-center gap-32 md:gap-48 lg:gap-60 xl:gap-72">
        <Hero />
        <Numbers />
        <Challenge />
        {/* <Witness /> */}
        <Friends />
        <Lock />
        <Commit />
        <End />
        <CTA />
      </div>

  );
}
