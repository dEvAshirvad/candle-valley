import Image from "next/image"
import stryImg from "../../public/stry2.webp"

function Story() {
    return (
        <section className="flex items-stretch bg-[#fff7f1]">
            <Image src={stryImg} alt="" className="w-[50%] aspect-[16/9] object-cover stryImg p-5" />
            <div className="p-4 w-1/2 flex items-center justify-center">
                <div className="w-1/2">
                    <h5 className="font-semibold mb-2">The Story</h5>
                    <h1 className="font-bold text-3xl mb-4 leading-none">In the Dark Nights of Valley.. <br /> <span className=" text-xl">(Where it all begins)</span></h1>
                    <p className="leading-tight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae labore eos quibusdam molestias ab aperiam, illum, corporis illo aliquam dolorem commodi unde corrupti facilis! Temporibus sunt eligendi eos rerum alias.</p>
                </div>
            </div>
        </section>
    )
}

export default Story

// #F8EFE9, #5D8189, #EADAD6, #9D8B7D, #4F234F

// --chinese-violet: #785F6Eff;
// --desert-sand: #E5C9B0ff;
// --champagne-pink: #EADAD6ff;
// --seashell: #F8EFE9ff;
// --slate-gray: #5D8189ff;