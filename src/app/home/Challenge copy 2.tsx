"use client"

import Goal from "@/components/Goal";
import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useWindowScroll from "@/hooks/useWindowScroll";
import useElementTopPosition from "@/hooks/useElementTopPosition";

export default function Challenge() {
    const containerRef = useRef<HTMLDivElement>(null)
    const windowScroll = useWindowScroll()
    const top = useElementTopPosition(containerRef)

    return (
        <section className="flex flex-col w-full gap-12 items-center relative" ref={containerRef}>

            <div className="">
                <ThreeHeaders title="Define your goal" subTitle="Set your challenge" paragraph="Chose from challenges library and connect relevant apps" align="center" gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" />
            </div>


                {containerRef.current && <div className="flex flex-row gap-8 items-center"
                style={{ transform: `translateX(${((windowScroll.y - top + (containerRef.current.getBoundingClientRect().height / 2)) / 2)}px)`}}
                >
                    <Goal title="Flashcards" description="Learn 5 minutes at a time" tag="in app"
                        icon={<Image
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="farcaster" width={60} height={60} />} />

                    <Goal title="Youtube" description="Learn 5 minutes at a time" tag="in app"
                        icon={<Image
                            src="https://pngfre.com/wp-content/uploads/You-Tube-14.png"
                            alt="farcaster" width={60} height={60} />}
                    />

                    <Goal title="Github" description="Learn 5 minutes at a time" tag="in app"
                        icon={<Image
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="farcaster" width={60} height={60} />}
                    />

                    <Goal title="Meditation" description="Learn 5 minutes at a time" tag="in app"
                        icon={<Image
                            src="https://static-00.iconduck.com/assets.00/tiktok-icon-1890x2048-ihin0vop.png"
                            alt="farcaster" width={60} height={60} />}
                    />

                    <Goal title="Tiktok" description="Learn 5 minutes at a time" tag="in app"
                        icon={<Image
                            src="https://static-00.iconduck.com/assets.00/tiktok-icon-1890x2048-ihin0vop.png"
                            alt="farcaster" width={60} height={60} />}
                    />

                    <Goal title="Farcaster" description="Learn 5 minutes at a time" tag="in app"
                        icon={<Image
                            src={"data:image/jpeg;base64,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"}
                            alt="farcaster" width={60} height={60} />}
                    />

                    <Goal title="Twitter" description="Learn 5 minutes at a time" tag="in app"
                        icon={<Image
                            src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
                            alt="farcaster" width={60} height={60} />}
                    />
                </div>}

                <Image src="/blob2.png" alt="blob" width={2000} height={1000} className="absolute inset-0 -z-50"/>

        </section>
    )
}