import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Lock() {
    return (
        <section className=" flex flex-col items-center justify-center py-32 lg:py-46 gap-24">
            <div className="">
                <ThreeHeaders title="Stake to hold yourself accountable." subTitle="Stake" paragraph="" align="center" gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" />
            </div>

            <motion.div
                className="relative flex items-center justify-center w-full"
                animate={{ y: [0, -40, 15, 10, -20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
            >
                <div className="absolute inset-0 top-72 flex items-center justify-center -z-40">
                    <div className="rounded-full w-3/4 h-full bg-black/60 blur-3xl" />
                </div>
                {/* <Image src={"/lock_bg.png"} alt="lock" width={2000} height={1000} className="blur-3xl opacity-50 object-contain absolute inset-0 -z-40 -right-20 -left-20" /> */}
                <Image src={"/untitled-copy.png"} alt="lootbox" width={700} height={300} className=" h-full object-contain " quality={100} />
            </motion.div>
        </section>
    )
}