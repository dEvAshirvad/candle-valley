import Link from "next/link"

function Header() {
    return (
        <header className="border-b-2 border-white fixed top-0 w-full z-50 text-white ">
            <div className="">
                <nav className="flex items-stretch justify-between">
                    <h1 className=" text-3xl font-bold py-10 pl-16">Candle Valley</h1>
                    <ul className="flex items-stretch">
                        <Link href={""} className=" text-lg font-semibold px-16 border-x-2 border-white flex items-center justify-center">Explore</Link>
                        <Link href={""} className=" text-lg font-semibold px-16 border-r-2 border-white flex items-center justify-center">Cart</Link>
                        <Link href={""} className=" text-lg font-semibold px-16 flex items-center justify-center">SignIn</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header