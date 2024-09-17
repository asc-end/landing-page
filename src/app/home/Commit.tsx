import ThreeHeaders from "@/components/ThreeHeaders";
import { useResizeObserver } from "@/hooks/useResizeObserver";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import Image from "next/image";
import { useMemo, useRef } from "react";

export default function Commit() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scroll, scrollTo] = useWindowScroll()
    const [ref, rect] = useResizeObserver();

    const parallaxStyle = useMemo(() => {
        if (typeof window === 'undefined' || !containerRef.current) return   
        return {
            transform: `translateY(${containerRef.current.getBoundingClientRect().top / 7}px)`
        };
    }, [scroll, rect]);

    return (
        <section className="section flex-col-reverse sm:flex-row overflow-hidden py-40 lg:py-64" ref={containerRef}>
            <div className="flex-1 h-96 sm:h-[500px] flex items-center justify-center -mt-12 sm:mt-0 px-20 sm:px-0" ref={ref}>
                {containerRef.current && <div className="bg-[#00001EC2] rounded-lg backdrop-blur-lg p-4"
                    style={parallaxStyle}
                >
                    <Image src="/calendar.png" alt="calendar" width={400} height={400} />
                </div>}
            </div>
            <div className="flex-1">
                <ThreeHeaders title="Stick to your goals" subTitle="Commit" paragraph="Celebrate the small victories on your journey to success and get your dopamine boost doing the hard things." gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" />
            </div>
            <div className="absolute inset-0 z-50 pointer-events-none">

            <Image src="/blob3.png" alt="blob" width={2000} height={1000} className=" object-cover" />
            </div>
        </section>
    )
}