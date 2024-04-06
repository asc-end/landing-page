"use client"

import { useWindowEvent } from '@/hooks/useWindowEvent';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Friend({ animationPercentage, friend, mousePos, x, y, scale, parallax }: { animationPercentage: number, friend: string, mousePos?: { x: number, y: number }, x: number, y: number, scale: number, parallax: number }) {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [windowHeight, setWindowHeight] = useState(0)

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
    function
     interpolate(x: number) {
        const maxPx = 2
        if (x <= 0.5) {
            return maxPx;
        } else if (x >= 1.5) {
            return 0;
        } else {
            // Calculate the interpolated value using linear interpolation formula
            return maxPx - ((x - 0.5) / (1.5 - 0.5)) * (maxPx - 0);
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
                scale: scale,
                zIndex: (scale - 1) * 10
            }}

            whileHover={{
                scale: scale + 0.4,
                transition: { duration: 0.3 },
            }}
        >

            <Image src={`/friends/${friend}.png`} alt="pfp" width={100} height={100} className="rounded-full w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20 " />
        </motion.div>
    );
}
