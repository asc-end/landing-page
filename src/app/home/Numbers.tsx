export default function Numbers() {
    return (
        <section className="flex flex-col w-full gap-12 py-12 items-center bg-black/20 backdrop-blur-sm -mt-72">
            <h2 className="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent">internet says it takes</h2>
            <div className="flex-1 flex flex-row items-start justify-center h-full gap-20">
                <div className="flex flex-col w-80">
                    <h1>21 days</h1>
                    <p>to make a simple a habit</p>
                </div>
                <div className="flex flex-col w-80">
                    <h1>90 days</h1>
                    <p>to make it a permanent lifestyle change</p>
                </div>
            </div>
        </section>
    )
}