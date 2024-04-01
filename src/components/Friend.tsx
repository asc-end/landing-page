"use client"

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

export default function Friend({ animationPercentage, friend, mousePos, x, y, scale, parallax }: { animationPercentage: number, friend: string, mousePos?: { x: number, y: number }, x: number, y: number, scale: number, parallax: number }) {
    const width = useMemo(() => typeof window !== "undefined" ? x * window.innerWidth / 2 : 0, [])
    const height = useMemo(() => typeof window !== "undefined" ? y * window.innerHeight / 2 : 0, [])


    const variants = {
        explode: {
            scale: scale,
            x: width,
            y: height,
            zIndex: scale,
            opacity: 1,
            transition: {
                duration: 0.9,
                // repeat: Infinity
            },
        },
        initial: {
            scale: 0,
            opacity: 0,
            x: 0,
            y: 0,

        },
    }
    function interpolate(x: number) {
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
    // 0.5 -> 10
    // 1.5 => 0
    return (
        // <AnimatePresence>
        <motion.div
            className={`absolute mx-auto my-auto`}
            // variants={variants}

            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                filter: `blur(${interpolate(scale)}px)`,
                x: width,
                y: height - (parallax  * scale) + window.innerHeight,
                scale: scale
                // y: height - parallax * scale,
                // zIndex: scale
            }}

            whileHover={{
                scale: scale + 0.4,
                transition: { duration: 0.3 },
            }}
            animate={animationPercentage > 0 ? "explode" : "initial"}
            transition={{ type: 'spring', duration: 1, bounce: 0 }}
        >
            <motion.div style={{
                transform: `translateY(${- parallax * scale - (window.innerHeight / 3.5)}px)`
            }}>
                <Image src={`/friends/${friend}.png`} alt="pfp" width={100} height={100} className="rounded-full" />
            </motion.div>
        </motion.div>
    );
}
