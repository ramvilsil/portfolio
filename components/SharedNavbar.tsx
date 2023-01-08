import Link from "next/link"


{/* Next Links Navbar*/ }
const SharedNavbar = () => {
    return (

        <>

            {/* Navbar container */}
            <div className="m-auto w-full h-16 justify-evenly portrait:rounded-3xl flex items-center bg-zinc-900 text-md font-light text-white landscape:shadow-md shadow-black">

                {/* Navbar Links */}
                <Link href="/">

                    <div className="m-6 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">Home</div>

                </Link>

                <Link href="/#projects">

                    <div className="m-6 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">Projects</div>

                </Link>

                <Link href="/#about">

                    <div className="m-6 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">About</div>

                </Link>

                <Link href="/#contact">

                    <div className="m-6 rounded-lg opacity-50 hover:opacity-100 portrait:m-2">Contact</div>

                </Link>

            </div>

        </>

    )

}


export default SharedNavbar