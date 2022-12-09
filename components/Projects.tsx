import Link from "next/link"
import Image from "next/image"
import Project1Thumb from '../public/assets/favicon.png'
import Project2Thumb from '../public/assets/business.png'


const Projects = () => {
    return (
        <>

            {/* Projects Container */}
            <div className="bg-gradient-to-br from-stone-700 via-stone-800 to-stone-700 rounded-3xl p-8 shadow-lg shadow-black">

                {/* Title */}
                <h1 className="text-white w-max rounded-lg text-3xl m-4 mb-12 font-semibold">Projects<div className="text-lg font-normal portrait:hidden">What I've worked on recently</div></h1>


                {/* Might be better to switch to grid instead of flex to add more rows */}
                <div className="flex justify-evenly items-center flex-col ">

                    <div className="flex portrait:flex-col">

                        <Link href='projects/portfolio'>

                            <div className="w-72 h-72 text-white rounded-2xl p-4 flex flex-col items-center hover:bg-gradient-to-br from-black via-stone-900 to-stone-900 m-2">

                                <div className="text-lg">Portfolio</div>

                                <Image className='bg-white rounded-lg m-2 p-4' height={100} src={Project1Thumb} alt='/'/>

                                <div className="text-center rounded-lg m-8 font-light">
                                    Next.js, TypeScript React, Tailwind CSS
                                </div>

                            </div>

                        </Link>

                        <hr className="hidden portrait:flex m-4"></hr>

                        <Link href='projects/small-business'>

                            <div className="w-72 h-72 text-white rounded-2xl p-4 flex flex-col items-center hover:bg-gradient-to-br from-black via-stone-900 to-stone-900 m-2">

                                <div className="text-lg">Small Business Page</div>

                                <Image className='bg-white rounded-lg m-2 p-4' height={100} src={Project2Thumb} alt='/'/>

                                <div className="text-center rounded-lg m-8 font-light">
                                    React, Custom CSS
                                </div>

                            </div>

                        </Link>

                    </div>

                    <div className="flex portrait:flex-col">

                        <hr className="hidden portrait:flex m-4"></hr>

                        <Link href='projects/portfolio'>

                            <div className="w-72 h-72 text-white rounded-2xl p-4 flex flex-col items-center hover:bg-gradient-to-br from-black via-stone-900 to-stone-900 m-2">

                                <div className="text-lg">ChunkyApp</div>

                                <div className='bg-white rounded-lg m-2 p-4 h-24 w-24 text-red-900 text-3xl'>---</div>

                                <div className="text-center rounded-lg m-8 font-light">
                                    React, Tailwind CSS
                                </div>

                            </div>

                        </Link>

                        <hr className="hidden portrait:flex m-4"></hr>

                        <Link href='projects/theatre'>

                            <div className="w-72 h-72 text-white rounded-2xl p-4 flex flex-col items-center hover:bg-gradient-to-br from-black via-stone-900 to-stone-900 m-2">

                                <div className="text-lg">Theatre</div>

                                <div className='bg-white rounded-lg m-2 p-4 h-24 w-24 text-red-900 text-3xl'>---</div>

                                <div className="text-center rounded-lg m-8 font-light">
                                    ASP.NET MVC, BootStrap, jQuery
                                </div>

                            </div>

                        </Link>

                    </div>

                </div>

            </div>

        </>
    )
}


export default Projects