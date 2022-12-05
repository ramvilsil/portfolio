import Link from "next/link"



const Navbar = () => {
    return (
        <>
            <div className="m-auto w-max rounded-2xl flex justify-center items-center bg-stone-900  ">

                <Link href="/">
                    <div className="text-white p-2 m-4 rounded-lg hover:bg-stone-800">Home</div>
                </Link>
                
                <a href="#projects" className="text-white p-2 m-4 rounded-lg hover:bg-stone-800">Projects</a>
                <a href="#about" className="text-white p-2 m-4 rounded-lg hover:bg-stone-800">About</a>
                <a href="#contact" className="text-white p-2 m-4 rounded-lg hover:bg-stone-800">Contact</a>


            </div>
        </>
    )
}


export default Navbar