import Link from "next/link"


{/* Navbar for smooth scrolling on index page */}
const Navbar = () => {
    return (

        <>
            {/* Navbar container */}
            <div className="w-full h-16 justify-evenly portrait:rounded-3xl flex items-center bg-stone-900 text-md font-light text-white">

                {/* Navbar Links */}
                <Link href="/">

                    <div className="p-2 m-4 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">Home</div>

                </Link>
                
                <a href="#projects" className="p-2 m-4 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">Projects</a>

                <a href="#about" className="p-2 m-4 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">About</a>

                <a href="#contact" className="p-2 m-4 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">Contact</a>


            </div>

        </>

    )

}


export default Navbar