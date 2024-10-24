"use client"

import Friend from "@/components/Friend";
import ThreeHeaders from "@/components/ThreeHeaders";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Friends() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scroll, scrollTo] = useWindowScroll()
    const [animationPercentage, setAnimationPercentage] = useState(0)

    function randomNormal(mean = 0, stdDev = 1) {
        let u = 0, v = 0;
        while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
        while (v === 0) v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        const skewedZ = z > 0 ? z * 1.5 : z * 0.5; // Skewing the distribution to have more values on the top
        return mean + stdDev * skewedZ;
    }

    const perlinNoise = (x: number) => {
        // Simple Perlin noise function approximation
        return (Math.sin(x) + 1) / 2; // Normalize to [0, 1]
    };

    const friends = useMemo(() => {
        const generateFriend = (name: string, index: number) => {
            const yPosition = 1 - (index / friendNames.length);
            const xPosition = Math.random();
            const size = 6 + ((1 - yPosition) * 10); // Smaller at the top, larger at the bottom
            const opacity = 0.5 + ((1 - yPosition) * 1); // More transparent at the top
            const scale = size / 10; // Adjust scale based on size
            return { name, x: xPosition, y: yPosition, scale, opacity, initialY: 0, initialScale: 1 };
        };

        const friendNames = [
            "user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8", "user9", "user10",
            "user11", "user12", "user13", "user14", "user15", "user16", "user17", "user18", "user19", "user20",
            "user21", "user22", "armani", "buffalu", "fd_ripatel", "fiskantes", "mert", "nicovrg", "proph3t",
            "swaggy_marie", "toly", "tristan"
        ];

        return friendNames.map((name, index) => generateFriend(name, index));
    }, []);

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
    }, [scroll])


    const parallax = useMemo(() => {
        if (typeof window === 'undefined' || !containerRef.current) return 0
        return - containerRef.current.getBoundingClientRect().top
    }, [scroll]);

    return (
        <section className="section py-64 pt-12 sm:py-64 md:py-64 lg:py-96 lg:pt-32 items-center overflow-visible relative" ref={containerRef}>
            <div className="p-3 rounded-md backdrop-blur-md">
                <ThreeHeaders
                    title="The more, the merrier"
                    subTitle="Invite your friends"
                    paragraph="You can invite your friends, share your progress and see the feed of your friends's chalenges."
                    align="center"
                    gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" />
            </div>

            <div className="absolute inset-0 -z-40 flex items-center justify-center">
                <div className="relative w-full h-full  lg:mx-24">
                    {sortedFriends.map((friend, index) => {
                        return (
                            <div
                                key={friend.name}
                                className="absolute"
                                style={{
                                    left: `${friend.x * 100}%`,
                                    bottom: `${friend.y * 100}%`,
                                    // transform: `translate(-50%, 50%)`,
                                    // width: `${friend.scale * 60}px`,
                                    // height: `${friend.scale * 60}px`,
                                    opacity: friend.opacity,
                                }}
                            >
                                <Friend
                                    friend={friend.name}
                                    animationPercentage={0}
                                    x={0}
                                    y={0}
                                    scale={friend.scale} // Adjust scale based on size
                                    parallax={parallax}

                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}