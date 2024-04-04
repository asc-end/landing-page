import ThreeHeaders from "@/components/ThreeHeaders";
import useElementTopPosition from "@/hooks/useElementTopPosition";
import useWindowScroll from "@/hooks/useWindowScroll";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Commit() {
    const containerRef = useRef<HTMLDivElement>(null)
    const windowScroll = useWindowScroll()
    const top = useElementTopPosition(containerRef)


    return (
        <section className="section flex-row" ref={containerRef}>
            <div className="flex-1 h-[500px] flex items-center justify-center">
                {containerRef.current && <div className="bg-[#00001EC2] rounded-lg backdrop-blur-lg p-4"
                    style={{ transform: `translateY(${-((windowScroll.y - top - (containerRef.current.getBoundingClientRect().height / 2)) / 3)}px)` }}
                >
                    <Image src="/calendar.png" alt="calendar" width={400} height={400} />
                </div>}
            </div>
            <div className="flex-1">
                <ThreeHeaders title="Stick to your goals" subTitle="Commit" paragraph="Celebrate the small victories on your journey to success and get your dopamine boost doing the hard things." gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" />
            </div>
            <Image src="/blob3.png" alt="blob" width={2000} height={1000} className="absolute inset-0 -z-50"/>
        </section>
    )
}