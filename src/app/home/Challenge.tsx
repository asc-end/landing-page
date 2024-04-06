"use client"

import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useElementTopPosition from "@/hooks/useElementRect";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import useElementRect from "@/hooks/useElementRect";

export default function Challenge() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scroll, _] = useWindowScroll()

    const { top } = useElementRect(containerRef)

    console.log("TOP", top)
    return (
        <section className="section flex-row" ref={containerRef}>
            {/* <Parallax pages={1} style={{ top: '0', left: '0', bottom: "0", right: "0", position: "absolute" }}>

                <ParallaxLayer offset={0} speed={2} className="relative bg-green-200/20">
                    <Image
                        src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                        alt="github" width={140} height={100}
                        className="absolute top-48 right-44"
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={2} className="relative ">
                    <Image
                        src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                        alt="github" width={140} height={100}
                        className="absolute top-48 left-44"
                    />
                </ParallaxLayer>
            </Parallax> */}
            {containerRef.current && <div className=" absolute inset-0" >
                <Image
                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                    alt="github" width={140} height={140}
                    className="absolute bottom-6 left-44 rounded-md"
                    style={{ transform: `translateY(${-((scroll.y - top + (containerRef.current.getBoundingClientRect().height / 2)) / 2)}px)` }}
                />
                {/* <animated.div className="absolute top-48 right-44" style={{ translateY: scrollYProgress }}> */}
                <Image
                    src="https://pngfre.com/wp-content/uploads/You-Tube-14.png"
                    alt="youtube" width={200} height={200} className="absolute -bottom-12 right-44"
                    style={{ transform: `translateY(${-((scroll.y - top + (containerRef.current.getBoundingClientRect().height / 2)) / 2)}px)`}}

                />
                {/* </animated.div> */}
                <Image
                    src="https://static-00.iconduck.com/assets.00/tiktok-icon-1890x2048-ihin0vop.png"
                    alt="tiktok" width={70} height={100} className="absolute  bottom-8 left-2/3"
                    style={{ transform: `translateY(${-((scroll.y - top + (containerRef.current.getBoundingClientRect().height / 2)) / 5)}px)`}}

                />
                <Image
                    src={"data:image/jpeg;base64,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"}
                    alt="farcaster" width={100} height={100} className="absolute top-52 left-36 rounded-md"
                    style={{ transform: `translateY(${-((scroll.y - top + (containerRef.current.getBoundingClientRect().height / 2)) / 6)}px)` }}

                />

                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
                    alt="twitter" width={180} height={180} className="absolute bottom-96 right-3"
                    style={{ transform: `translateY(${-((scroll.y - top + (containerRef.current.getBoundingClientRect().height / 2)) / 2)}px)`  }}
                />
            </div>}
            <div className="flex-1">
                <ThreeHeaders title="Define your goal" subTitle="goals" paragraph="Chose from challenges library and connect relevant apps" align="center" />
            </div>
        </section>
    )
}