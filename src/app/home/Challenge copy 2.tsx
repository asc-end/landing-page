"use client"

import Goal from "@/components/Goal";
import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import useElementTopPosition from "@/hooks/useElementRect";
import useElementRect from "@/hooks/useElementRect";
import { useWindowScroll } from "@/hooks/useWindowScroll";

export default function Challenge() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scroll, scrollTo] = useWindowScroll()
    const { top } = useElementRect(containerRef)

    const parallax = useMemo(() => {
        if (typeof window === 'undefined' || !containerRef.current) return 0
        return - containerRef.current.getBoundingClientRect().top
    }, [scroll]);

    return (
        <section className="section flex-col" ref={containerRef}>

            <div className="">
                <ThreeHeaders title="Define your goal" subTitle="Set your challenge" paragraph="Chose from challenges library and connect relevant apps" align="center" gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" />
            </div>



            {containerRef.current && <div className="flex flex-row gap-8 items-center bg-[#2D0896]/20 rounded-lg border border-white/10 px-12 py-6"
            // style={{ transform: `translateX(${parallax}px)` }}
            >

                <Image
                    src="/challenges/flashcard.png"
                    className=" hover:scale-125 transition-transform"
                    alt="flashcard" width={100} height={100} />
                <Image
                    src="/challenges/github.png"
                    className=" hover:scale-125 transition-transform"
                    alt="github" width={100} height={100} />
                <Image
                    src="/challenges/meditation.png"
                    className=" hover:scale-125 transition-transform"
                    alt="meditation" width={100} height={100} />
                <Image
                    src="/challenges/twitter.png"
                    className=" hover:scale-125 transition-transform"
                    alt="twitter" width={100} height={100} />
                <Image
                    src="/challenges/farcaster.png"
                    className=" hover:scale-125 transition-transform"
                    alt="farcaster" width={100} height={100} />
                <Image
                    src="/challenges/tiktok.png"
                    className=" hover:scale-125 transition-transform"
                    alt="tiktok" width={100} height={100} />

                <Image
                    src="/challenges/youtube.png"
                    className=" hover:scale-125 transition-transform"
                    alt="youtube" width={100} height={100} />
            </div>
            }

            <Image src="/blob2.png" alt="blob" width={2000} height={1000} className="absolute inset-0 -z-50" />

        </section>
    )
}