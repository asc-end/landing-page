import ThreeHeaders from "@/components/ThreeHeaders";
import useElementRect from "@/hooks/useElementRect";
import useElementTopPosition from "@/hooks/useElementRect";
import { useElementSize, useResizeObserver } from "@/hooks/useResizeObserver";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Commit() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scroll, scrollTo] = useWindowScroll()
    // const {top, height} = useElementRect(containerRef)
    const [ref, rect] = useResizeObserver();


    const parallaxStyle = useMemo(() => {
        if (typeof window === 'undefined' || !containerRef.current) return
        // const viewportHeight = window.innerHeight;
    
        // console.log("SCROLLL", containerRef.current.getBoundingClientRect().top, scroll.y)
        // // Calculate how far the element is through its scroll (0 = just entering at bottom, 1 = just exiting at top)
        // const scrollProgress = (scroll.y - containerRef.current?.getBoundingClientRect().top + viewportHeight / 2);
        // // const scrollProgress = (scroll.y - rect.top + viewportHeight / 2) / (viewportHeight + rect.height);
        
        // console.log("SCROLL PROGRESS", scrollProgress)
        // // Scale scroll progress to be -0.5 at the bottom of the viewport, 0 in the middle, and +0.5 at the top.
        // // Scale further by desired parallax speed (here, 1/3)
        // const translateY = scrollProgress;
        
        return {
            transform: `translateY(${containerRef.current.getBoundingClientRect().top / 7}px)`
        };
    }, [scroll, rect]);


    console.log(parallaxStyle)
    return (
        <section className="section flex-row" ref={containerRef}>
            <div className="flex-1 h-[500px] flex items-center justify-center" ref={ref}>
                {containerRef.current && <div className="bg-[#00001EC2] rounded-lg backdrop-blur-lg p-4"
                    style={parallaxStyle}
                >
                    <Image src="/calendar.png" alt="calendar" width={400} height={400} />
                </div>}
            </div>
            <div className="flex-1">
                <ThreeHeaders title="Stick to your goals" subTitle="Commit" paragraph="Celebrate the small victories on your journey to success and get your dopamine boost doing the hard things." gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" />
            </div>
            <Image src="/blob3.png" alt="blob" width={2000} height={1000} className="absolute inset-0 -z-50" />
        </section>
    )
}