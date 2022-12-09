import Link from "next/link"

{/* Navbar with next Links*/}
const SharedNavbar = () => {
    return (
        <>
            <div className="m-auto w-full h-16 justify-evenly portrait:rounded-3xl flex items-center bg-stone-900 text-md">

                <Link href="/">
                    <div className="text-white p-2 m-4 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">Home</div>
                </Link>

                <Link href="/#projects">
                    <div className="text-white p-2 m-4 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">Projects</div>
                </Link>
                
                <Link href="/#about">
                    <div className="text-white p-2 m-4 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">About</div>
                </Link>

                <Link href="/#contact">
                    <div className="text-white p-2 m-4 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">Contact</div>
                </Link>

            </div>
            
        </>
    )
}


export default SharedNavbar