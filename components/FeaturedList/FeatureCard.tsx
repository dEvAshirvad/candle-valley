import Image from "next/image"
import bg2 from "../../public/bg2.jpg"

function FeatureCard() {
    return (
        <li className="min-w-[320px] aspect-[1/.5] border-2 border-black flex flex-col justify-stretch p-5">
            <div className="w-full aspect-video mb-5">
                <Image src={bg2} alt="" className="" />
            </div>
            <div className="flex items-center justify-between mb-3">
                <h2 className=" font-bold text-xl">Turkish Chai</h2>
                <h2 className=" font-bold text-base">45 Rupees</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi placeat fuga ea nihil ut omnis vero vitae reiciendis</p>
        </li>
    )
}

export default FeatureCard