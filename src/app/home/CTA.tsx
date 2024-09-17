import { EmailInput } from "@/components/EmailInput";
import { FaTwitter, FaDiscord, FaBroadcastTower, FaArchway } from 'react-icons/fa';

export default function CTA() {
    return (
        <section className="flex w-full simple-padding">
            <div className="flex flex-col w-full py-36 px-4 gap-8 items-center bg-gradient-to-t from-[#7F00FE] via-[#070578] to-transparent rounded-md">
                <div className="flex flex-col items-center gap-2">
                    <h1 className=" text-5xl md:text-6xl lg:text-7xl xl:text-8xl">ASCEND </h1>
                    <p className="text-center">Give us some love, feedback, and grow with us</p>
                </div>
                <div>

                <div className="flex gap-4">
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
                {/* <EmailInput /> */}
            </div>
        </section>
    )
}