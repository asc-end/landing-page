export default function Numbers() {
    return (
        <section className="section flex-col py-12 bg-black/20 backdrop-blur-sm">
            <h2 className="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent">internet says it takes</h2>
            <div className="flex-1 flex flex-row flex-wrap items-start justify-center h-full gap-20">
                <div className="flex flex-col w-40 md:w-80 items-center gap-2">
                    <h1>21 days</h1>
                    <p className="text-center">to get used to a simple a habit</p>
                </div>
                <div className="flex flex-col w-40 md:w-80 items-center gap-2">
                    <h1>90 days</h1>
                    <p className="text-center">to make it a permanent change</p>
                </div>
            </div>
        </section>
    )
}