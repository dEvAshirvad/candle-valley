import Image from "next/image"
import bg1 from "../../public/bg1.jpg"

function Hero() {
    return (
        <section className="h-screen flex items-end p-16 relative text-white overflow-hidden">
            <div className=" z-10">
                <h1 className=" text-6xl w-fit font-extrabold bg-black leading-tight px-10 py-4 mb-2">
                    Natural Candles🕯️
                </h1>
                <h1 className=" text-6xl font-extrabold w-fit bg-black leading-tight px-10 py-4">
                    Straight from Valley.🌄
                </h1>
            </div>
            <Image src={bg1} alt="" className="absolute w-full top-0 left-0 h-full heroImg object-right object-cover " />
        </section>
    )
}

export default Hero