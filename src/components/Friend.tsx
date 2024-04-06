"use client"

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export default function Friend({ animationPercentage, friend, mousePos, x, y, scale, parallax }: { animationPercentage: number, friend: string, mousePos?: { x: number, y: number }, x: number, y: number, scale: number, parallax: number }) {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [windowHeight, setWindowHeight] = useState(0)
    
    function setPlace(){
        setHeight(y * window.innerHeight / 2)
        setWidth(x * window.innerWidth / 2)
        setWindowHeight(window.innerHeight)
    }

    useEffect(() => {
        if(typeof window == "undefined") return
        setPlace()
        window.addEventListener('resize', setPlace)
        return () => {
            window.removeEventListener('resize', setPlace);
          }
    }, [])

    // const variants = {
    //     explode: {
    //         scale: scale,
    //         x: width,
    //         y: height,
    //         zIndex: scale,
    //         opacity: 1,
    //         transition: {
    //             duration: 0.9,
    //             // repeat: Infinity
    //         },
    //     },
    //     initial: {
    //         scale: 0,
    //         opacity: 0,
    //         x: 0,
    //         y: 0,

    //     },
    // }
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

    console.log(parallax)
    // 0.5 -> 10
    // 1.5 => 0
    const zindex = (scale - 1) * 10
    return (
        // <AnimatePresence>
        <motion.div
            className={`absolute mx-auto my-auto`}
            // variants={variants}

            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                // filter: `blur(${interpolate(scale)}px)`,
                // transform: `translateY(${- parallax * scale - (windowHeight / 3.5)}px)`,

                x: width,
                y: height - (parallax  *  scale / 4),
                scale: scale,
                zIndex: zindex
                // y: height - parallax * scale,
                // zIndex: scale
            }}

            whileHover={{
                scale: scale + 0.4,
                transition: { duration: 0.3 },
            }}
            // animate={animationPercentage > 0 ? "explode" : "initial"}
            // transition={{ type: 'spring', duration: 1, bounce: 0 }}
        >

                <Image src={`/friends/${friend}.png`} alt="pfp" width={100} height={100} className="rounded-full w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20 " />
        </motion.div>
    );
}
