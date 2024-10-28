import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Confetti from 'react-confetti';
import { FaArchway, FaDiscord, FaTwitter } from "react-icons/fa";

export default function Hero() {
    const [mail, setMail] = useState<string>('')
    const [joined, setJoined] = useState<boolean>()
    const [error, setError] = useState<string | null>(null)
    const joinedRef = useRef<HTMLDivElement>(null)
    const [loading, setLoading] = useState(false)
    const [animate, setAnimate] = useState(false)
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    useEffect(() => {
        const joinedStatus = localStorage.getItem('joined');
        setJoined(joinedStatus === 'true');
    }, []);

    async function joinWaitlist() {
        if (!mail) {
            setError("Please enter an email address");
            return;
        }
        if (!isValidEmail(mail)) {
            setError("Please enter a valid email address");
            return;
        }
        setError(null);
        setLoading(true)
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: mail }),
            });
            if (response.ok) {
                setJoined(true);
                setAnimate(true)
                localStorage.setItem('joined', 'true');
            } else throw Error("Failed to join waitlist")
        } catch (error) {
            console.error('Error joining waitlist:', error);
            setError("Failed to join waitlist. Please try again.");
        }
        setLoading(false)
    }

    return (
        <section className="h-screen flex flex-col-reverse md:flex-row w-full gap-8 md:gap-12 items-center px-4 sm:px-6 lg:px-16 xl:px-32 relative py-20 md:py-0">
            {animate && <Confetti colors={['#7F00FE', '#070578', '#8D47FF', '#B86CF4']}
                width={windowSize.width} height={windowSize.height}
                confettiSource={{
                    x: 0,
                    y: 0,
                    w: windowSize.width,
                    h: windowSize.height
                }}
                onEnded={() => setAnimate(false)}
                recycle={false} />}
            <div className="flex-1 flex flex-col items-start justify-start  h-[310px] gap-8 md:gap-12 flex-grow min-w-60 max-w-2/3 max-w-[800px] z-10">
                <div>

                    <ThreeHeaders
                        subTitle="Ascend"
                        title="Hack your mind"
                        paragraph="A social network designed to help you build better habits through competition, social pressure, and monetary incentives."
                        gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" />
                </div>
                {joined !== undefined && <div ref={joinedRef}>
                    {joined == true ?
                        <div className="flex flex-col w-full gap-6" >
                            <p className=" italic">You&apos;ve successfully joined the waitlist!</p>
                            <div className="flex flex-wrap gap-2 sm:gap-4">
                                <a href="https://twitter.com/ascend_sh" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter size={30} className="text-white hover:text-white/50" />
                                </a>
                                <a href="https://discord.gg/ymVPRnpuqC" target="_blank" rel="noopener noreferrer">
                                    <FaDiscord size={30} className="text-white hover:text-white/50" />
                                </a>
                                <a href="https://warpcast.com/~/channel/ascend" target="_blank" rel="noopener noreferrer">
                                    <FaArchway size={30} className="text-white hover:text-white/50" />
                                </a>
                            </div>
                        </div>
                        :
                        <div className="flex flex-col w-full gap-2">
                            <p className={`pl-3 text-white/40 text-sm mt-2 h-5 ${error ? "opacity-100" : "opacity-0"}`}>{error}</p>
                            <div className="rounded-full bg-white/10 border border-white/10 flex flex-row min-w-[360px] max-w-[540px] focus-within:border-white/30">
                                <input
                                    value={mail}
                                    onChange={(e) => {
                                        setMail(e.target.value);
                                        setError(null);
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            joinWaitlist();
                                        }
                                    }}
                                    type="email"
                                    placeholder="Enter email here"
                                    className="bg-transparent outline-none border-transparent ring-transparent focus:ring-transparent px-4 text-sm flex-grow"
                                />
                                <button
                                    disabled={!mail || loading}
                                    onClick={joinWaitlist}
                                    className={`disabled:from-[#FFFFFF20] disabled:to-[#FFFFFF30] disabled:cursor-default text-white bg-gradient-to-r from-[#6663FF] to-[#7F00FE] rounded-full px-6 py-2 hover:opacity-80 transition-opacity cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? 'Joining...' : 'Join waitlist'}
                                </button>
                            </div>
                        </div>
                    }
                </div>}

            </div>
            <div className="flex-1 w-full -mb-20 md:mb-0 md:-mx-36 lg:-mx-36 lg:scale-125 pointer-events-none">
                <Image src="/shots.png" alt="phone mock up" width={1000} height={2000} className=" h-full object-cover" />
            </div>
            <div className="absolute inset-0 z-50 pointer-events-none">
                <Image src="/blob1.png" alt="blob" width={2000} height={1000} className="w-full object-contain" />
            </div>
        </section>
    )
}