"use client"

import { useWindowEvent } from '@/hooks/useWindowEvent';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface FriendProps {
    animationPercentage: number;
    friend: string;
    x: number;
    y: number;
    scale: number;
    parallax: number;
}

export default function Friend(props: FriendProps) {
    const { animationPercentage, friend, x, y, scale, parallax } = props
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [isExploded, setIsExploded] = useState(false);

    const updateDimensions = useCallback(() => {
        if (typeof window === 'undefined') return;
        setDimensions({
            width: x * window.innerWidth / 2,
            height: y * window.innerHeight / 2
        });
    }, [x, y]);

    useWindowEvent('resize', updateDimensions);

    useEffect(() => {
        updateDimensions();
    }, [updateDimensions]);


    const [randomX, randomY] = useMemo(() => {
        return [Math.random() * 100, Math.random() * 60]
    }, [])

    return (
        <motion.div
            className='w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20'
            style={{
                // position: 'absolute',
                top: 0,
                left: 0,
                // top: '50%',
                // left: '50%',
                // x: randomX,
                y: (parallax * -scale) + randomY ,
                zIndex: (1 - scale) * 10
            }}
            // variants={explosionVariants}
            initial="initial"
            animate={isExploded ? "exploded" : "initial"}
            onClick={() => setIsExploded(true)}
        >
            <Image
                src={`/friends/${friend}.png`}
                alt={`${friend}'s profile picture`}
                width={100}
                height={100}
                className="rounded-full object-contain cursor-pointer"
                style={{
                    transform: `scale(${scale})`,
                    width: '100%',
                    height: '100%'
                }}
            />
        </motion.div>
    );
}