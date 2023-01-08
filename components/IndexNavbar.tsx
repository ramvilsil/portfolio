import Link from "next/link"


{/* Navbar for smooth scrolling on index page */ }
const Navbar = () => {
    return (

        <>
            {/* Navbar container */}
            <div className="w-full h-16 justify-evenly portrait:rounded-3xl flex items-center bg-zinc-900 text-md font-light text-white landscape:shadow-md shadow-black">

                {/* Navbar Links */}
                <Link href="/">

                    <div className="m-6 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">Home</div>

                </Link>

                <a href="#projects" className="m-6 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">Projects</a>

                <a href="#about" className="m-6 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">About</a>

                <a href="#contact" className="m-6 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">Contact</a>


            </div>

        </>

    )

}


export default Navbar