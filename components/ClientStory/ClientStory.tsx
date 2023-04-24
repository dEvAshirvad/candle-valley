import Image from "next/image"
import clt from "../../public/testimonial.jpg"

function ClientStory() {
    return (
        <section className=" py-20">
            <div className="container flex items-stretch gap-10">
                <div className="w-1/2 overflow-hidden">
                    <Image src={clt} alt="" className="object-contain scale-125 object-center w-full aspect-[16/15] "></Image>
                </div>
                <div className="w-1/2">
                    <h4 className="font-semibold">The 7th Event</h4>
                    <h1 className="font-bold text-3xl mb-10 leading-snug">The First Candle Light of a young couple</h1>
                </div>
            </div>
        </section>
    )
}

export default ClientStory