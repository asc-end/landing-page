type EmailInput = {
    className?: string
}
export function EmailInput(props: EmailInput) {
    const {className} = props

    return (
        <div className={"flex sm:gap-3 flex-col w-full sm:flex-row sm:w-fit" + " " + className}>
            <input
                type="email"
                placeholder="Enter your email"
                className="text-white bg-[#1B014F] rounded-full px-8 py-2.5 w-full sm:w-80 md:w-96 h-full focus:outline-none focus:ring-2 focus:ring-[##69FEFF] focus:shadow-md focus:shadow-[##69FEFF] focus:placeholder:text-white/70 placeholder:text-white/50 mb-3 sm:mb-0"
            />
            <button className="bg-white text-black rounded-full px-8 py-2.5 hover:opacity-80 transition-opacity cursor-pointer w-full sm:w-auto">
                Subscribe
            </button>
        </div>
    )
}