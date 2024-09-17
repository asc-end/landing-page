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
        <section className="section flex-col h-screen justify-center items-center" ref={containerRef}>
            <div>
                <ThreeHeaders
                    title="Define your goal"
                    subTitle="Set your challenge"
                    paragraph="Choose from challenges library and connect relevant apps"
                    align="center"
                    gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent"
                />
            </div>
            {containerRef.current && (
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 bg-[#2D0896]/20 rounded-lg border border-white/10 p-4 sm:p-6 lg:p-8">
                    {[
                        "flashcard", "github", "meditation", "twitter",
                        "farcaster", "tiktok", "youtube"
                    ].map((icon) => (
                        <div key={icon} className="relative group">
                            <Image
                                src={`/challenges/${icon}.png`}
                                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 hover:scale-125 transition-transform"
                                alt={icon}
                                width={100}
                                height={100}
                            />
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-5 px-3 py-1 bg-gray-800/60 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                {icon.charAt(0).toUpperCase() + icon.slice(1)}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="absolute inset-0 -z-50">
                <Image src="/blob2.png" alt="blob" width={2000} height={600} className=" object-contain w-full" />
            </div>
        </section>
    )
}