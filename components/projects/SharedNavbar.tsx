import Link from "next/link"

{/* Navbar with next Links*/}
const SharedNavbar = () => {
    return (
        <>
            <div className="m-auto rounded-2xl flex justify-center items-center bg-stone-900  ">

                <Link href="/">
                    <div className="text-white p-2 m-4 rounded-lg hover:bg-stone-800">Home</div>
                </Link>

                <Link href="/#projects">
                    <div className="text-white p-2 m-4 rounded-lg hover:bg-stone-800">Projects</div>
                </Link>
                
                <Link href="/#about">
                    <div className="text-white p-2 m-4 rounded-lg hover:bg-stone-800">About</div>
                </Link>

                <Link href="/#contact">
                    <div className="text-white p-2 m-4 rounded-lg hover:bg-stone-800">Contact</div>
                </Link>

            </div>
            
        </>
    )
}


export default SharedNavbar