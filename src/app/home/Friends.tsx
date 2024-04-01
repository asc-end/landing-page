"use client"

import Friend from "@/components/Friend";
import ThreeHeaders from "@/components/ThreeHeaders";
import useElementTopPosition from "@/hooks/useElementTopPosition";
import useWindowScroll from "@/hooks/useWindowScroll";
// import useElementTopPosition from "@/hooks/useElementTopPosition";
// import useWindowScroll from "@/hooks/useWindowScroll";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";


export default function Friends() {
    const containerRef = useRef<HTMLDivElement>(null)
    const windowScroll = useWindowScroll()
    const [animationPercentage, setAnimationPercentage] = useState(0)
    const top = useElementTopPosition(containerRef)
    const rect = useMemo(() => containerRef.current?.getBoundingClientRect(), [])

    const friends = useMemo(() => [
        { "name": "user1", scale: 1.32, "x": 0.43, "y": 0.61 },
        { "name": "user2", scale: 1.12, "x": 0.760, "y": -0.72 },
        { "name": "user3", scale: 0.95, "x": -0.450, "y": -0.50 },
        { "name": "user4", scale: 1.23, "x": -0.450, "y": 0.50 },
        { "name": "user5", scale: 0.73, "x": 0.10, "y": 0.20 },
        { "name": "user6", scale: 1.3, "x": -0.650, "y": -0.63 },
        { "name": "user7", scale: 1.132, "x": -0.750, "y": 0.73 },
        { "name": "user8", scale: 1.634, "x": -0.850, "y": -0.63 },
        { "name": "user9", scale: 1.31, "x": -0.980, "y": -0.443 },
        { "name": "user10", scale: 1.432, "x": 0.1050, "y": 0.640 },
        { "name": "user11", scale: 1.12, "x": 0.620, "y": 0.150 },
        { "name": "user12", scale: 0.843, "x": 0.340, "y": -0.350 },
        { "name": "user13", scale: 1.234, "x": -0.800, "y": -0.150 },
        { "name": "user14", scale: 1.123, "x": 0.500, "y": -0.150 },
        { "name": "user15", scale: 1.745, "x": 0.200, "y": -0.550 },
        { "name": "user16", scale: 1.42, "x": 0.300, "y": 0.250 },
        { "name": "user17", scale: 1.342, "x": -0.300, "y": 0.400 },
        { "name": "user18", scale: 1.234, "x": 0.900, "y": -0.450 },
        { "name": "user19", scale: 1.62, "x": -0.2000, "y": 0.80 },
        { "name": "user20", scale: 1.42, "x": 0.700, "y": -0.350 },
        { "name": "user21", scale: 1.62, "x": -0.830, "y": 0.390 },
        { "name": "user22", scale: 1.23, "x": 0.670, "y": 0.650 },
        { "name": "armani", scale: 1.5, "x": -0.450, "y": -0.750 },
        { "name": "buffalu", scale: 1.1, "x": 0.050, "y": -0.750 },
        { "name": "fd_ripatel", scale: 0.89, "x": -0.650, "y": -0.650 },
        { "name": "fiskantes", scale: 1.24, "x": -0.950, "y": 0.050 },
        { "name": "mert", scale: 1.743, "x": -0.50, "y": 0.20 },
        { "name": "nicovrg", scale: 1.3, "x": 0.820, "y": 0.140 },
        { "name": "proph3t", scale: 1.7, "x": -0.1050, "y": -0.550 },
        { "name": "swaggy_marie", scale: 1.3, "x": -0.750, "y": 0.250 },
        { "name": "toly", scale: 1.5, "x": 0.500, "y": 0.400 },
        { "name": "tristan", scale: 1.4, "x": 0.400, "y": -0.730 }], [])
    const sortedFriends = useMemo(() => friends.sort((a, b) => a.scale - b.scale), [friends])

    useEffect(() => {
        if (!containerRef.current) return
        const containerRect = containerRef.current?.getBoundingClientRect();
        let percentage
        let pos = (containerRect.y - containerRect.height) / containerRect.height
        if (pos > 0)
            percentage = 0
        else
            percentage = Math.max(0, Math.min(100, Math.abs(pos * 100)));
        setAnimationPercentage(percentage)
    }, [windowScroll])

    return (
        <section className="flex flex-col w-full gap-12 py-44 items-center justify-center relative overflow-visible px-60" ref={containerRef}>
            <ThreeHeaders title="You can even invite your friends" subTitle="Set your challenge" paragraph="You can invite your friends, share your progress and see the feed of your friends's chalenges. " align="center" gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" />

            {sortedFriends.map(friend =>
                <Friend friend={friend.name} animationPercentage={animationPercentage} key={friend.name} {...friend} 
                // parallax={0}
                parallax={windowScroll.y - top + (rect?.height ? (rect.height / 2) : 0)}
                />
            )}
        </section>
    )
}