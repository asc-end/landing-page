"use client"

import { useWindowEvent } from '@/hooks/useWindowEvent';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Friend({ animationPercentage, friend, mousePos, x, y, scale, parallax }: { animationPercentage: number, friend: string, mousePos?: { x: number, y: number }, x: number, y: number, scale: number, parallax: number }) {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [windowHeight, setWindowHeight] = useState(0)
    const [isExploded, setIsExploded] = useState(false)

    function setPlace() {
        if (typeof window == "undefined") return
        setHeight(y * window.innerHeight / 2)
        setWidth(x * window.innerWidth / 2)
        setWindowHeight(window.innerHeight)
    }

    useWindowEvent("resize", setPlace)

    useEffect(() => {
        setPlace()
    }, [])

    const explosionVariants = {
        initial: { scale: scale },
        exploded: {
            scale: scale * 2,
            opacity: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    return (
        <motion.div
            className={`absolute mx-auto my-auto`}
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                x: width,
                y: height - (parallax * scale / 4),
                zIndex: (scale - 1) * 10
                // zIndex: -30
            }}
            variants={explosionVariants}
            initial="initial"
            animate={isExploded ? "exploded" : "initial"}
            onClick={() => setIsExploded(true)}
        >
            <Image 
                src={`/friends/${friend}.png`} 
                alt="pfp" 
                width={100} 
                height={100} 
                className="rounded-full w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20"
            />
        </motion.div>
    );
}
