import Link from "next/link"
import Image from "next/image"
import Project1Thumb from '../public/assets/favicon.png'
import Project2Thumb from '../public/assets/business.png'


const Projects = () => {
    return (
        <>

            {/* Projects Container */}
            <div className="bg-gradient-to-br from-stone-700 via-stone-800 to-stone-700 rounded-3xl p-8">

                {/* Title */}
                <h1 className="text-white w-max rounded-lg text-3xl m-4 mb-12 font-semibold">Projects</h1>


                {/* Might be better to switch to grid instead of flex to add more rows */}
                <div className="flex justify-evenly items-center flex-col ">

                    <div className="flex portrait:flex-col">

                        <Link href='projects/portfolio'>

                            <div className="w-72 h-96 text-white rounded-2xl p-4 flex flex-col items-center hover:bg-gradient-to-br from-black via-stone-900 to-stone-900 ">

                                <div className="text-lg">1 | Portfolio</div>

                                <Image className='bg-white rounded-lg m-4 p-4' height={200} src={Project1Thumb} alt='/'/>

                                <div className="text-center rounded-lg m-8">
                                    Next.js, TypeScript React, Tailwind CSS
                                </div>

                            </div>

                        </Link>

                        <Link href='projects/small-business'>

                            <div className="w-72 h-96 text-white rounded-2xl p-4 flex flex-col items-center hover:bg-gradient-to-br from-black via-stone-900 to-stone-900 ">

                                <div className="text-lg">2 | Small Business Page</div>

                                <Image className='bg-white rounded-lg m-4 p-4' height={200} src={Project2Thumb} alt='/'/>

                                <div className="text-center rounded-lg m-8">
                                    React, Custom CSS
                                </div>

                            </div>

                        </Link>

                    </div>

                    <div className="flex portrait:flex-col">

                        <Link href='projects/portfolio'>

                            <div className="w-72 h-96 text-white rounded-2xl p-4 flex flex-col items-center hover:bg-gradient-to-br from-black via-stone-900 to-stone-900 ">

                                <div className="text-lg">3 | ChunkyApp</div>

                                <div className="text-3xl">ChunkyApp</div>

                                <div className="text-center rounded-lg m-8">
                                    Info
                                </div>

                            </div>

                        </Link>

                        <Link href='projects/theatre'>

                            <div className="w-72 h-96 text-white rounded-2xl p-4 flex flex-col items-center hover:bg-gradient-to-br from-black via-stone-900 to-stone-900 ">

                                <div className="text-lg">4 | Theatre</div>

                                <div className="text-3xl">Theatre</div>

                                <div className="text-center rounded-lg m-8">
                                    Info
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