import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";

export default function Lock() {
    return (
        <section className="section flex-col py-20 lg:py-32">
            <div className="flex-1">
                <ThreeHeaders title="Stake to hold yourself accountable." subTitle="Stake" paragraph="" align="center" gradient="bg-gradient-to-tr from-[#8D47FF] to-[#fbf5ff] bg-clip-text text-transparent" />
            </div>
            <div className="flex-1"></div>
            <Image src={"/lock.png"} alt="lock" width={2000} height={800} className=" absolute inset-0 w-screen -z-30 top-0 mt-40 lg:-mt-20 bottom-0 " />
            <div className="absolute inset-0 w-screen -z-30 top-0 mt-40 lg:-mt-20 bottom-0 flex items-end justify-center">
                <div className="flex flex-row gap-20 bg-white/10 border border-white/10 rounded-lg p-12">
                    <div className="bg-white/10 border border-white/10 rounded-lg p-4 h-fit">
                        <h1 className="h-fit">******</h1>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <p className=" aspect-square w-5 text-center text-lg">1</p>
                            <p className=" aspect-square w-5 text-center text-lg">2</p>
                            <p className=" aspect-square w-5 text-center text-lg">3</p>
                        </div>
                        <div className="flex flex-row">
                            <p className=" aspect-square w-5 text-center text-lg">4</p>
                            <p className=" aspect-square w-5 text-center text-lg">5</p>
                            <p className=" aspect-square w-5 text-center text-lg">6</p>
                        </div>
                        <div className="flex flex-row">
                            <p className=" aspect-square w-5 text-center text-lg">7</p>
                            <p className=" aspect-square w-5 text-center text-lg">8</p>
                            <p className=" aspect-square w-5 text-center text-lg">9</p>
                        </div>
                        <div className="flex flex-row">
                            <p className=" aspect-square w-5 text-center text-lg">{`<`}</p>
                            <p className=" aspect-square w-5 text-center text-lg">0</p>
                            <p className=" aspect-square w-5 text-center text-lg">{`>`}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}