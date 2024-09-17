"use client"

import Friend from "@/components/Friend";
import ThreeHeaders from "@/components/ThreeHeaders";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Friends() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scroll, scrollTo] = useWindowScroll()
    const [animationPercentage, setAnimationPercentage] = useState(0)

    const friends = useMemo(() => [
        { "name": "user1", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user2", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user3", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user4", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user5", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user6", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user7", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user8", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user9", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user10", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user11", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user12", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user13", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user14", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user15", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user16", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user17", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user18", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user19", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user20", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user21", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "user22", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "armani", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "buffalu", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "fd_ripatel", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "fiskantes", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "mert", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "nicovrg", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "proph3t", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "swaggy_marie", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "toly", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 },
        { "name": "tristan", scale: 1 + Math.random() * 0.5, "x": Math.random() * 2 - 1, "y": Math.random() * 2 - 1 }
    ].map(friend => ({
        ...friend,
        initialY: friend.y,
        initialScale: friend.scale
    })), [])

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
            <ThreeHeaders 
                title="You can even invite your friends"
                subTitle="Set your challenge"
                paragraph="You can invite your friends, share your progress and see the feed of your friends's chalenges."
                align="center"
                gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" />
            {sortedFriends.map(friend =>
                <Friend friend={friend.name} animationPercentage={animationPercentage} key={friend.name} {...friend}
                    parallax={parallax}
                />
            )}
        </section>
    )
}