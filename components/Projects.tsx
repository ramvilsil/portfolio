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
                <h1 className="text-white w-max rounded-lg text-3xl m-4 mb-12 font-semibold">Projects<div className="text-lg font-normal portrait:hidden">What I've worked on recently.</div></h1>

                <div className="flex justify-evenly items-center flex-col ">

                    {/* Wide Screens -  Row 1 */}
                    <div className="flex portrait:flex-col">

                        {/* Wide Screens -  Column 1 */}
                        <div className="w-72 h-72 text-white m-4 flex flex-col items-center">

                            <div className="text-lg">Portfolio</div>

                            <Image className='bg-white rounded-lg m-2 p-4' height={150} src={Project1Thumb} alt='/'/>

                            <Link href='projects/portfolio'>

                                <div className="bg-gradient-to-br from-black via-stone-900 to-stone-900 p-2 pt-2 pb-2 m-4 rounded-xl hover:opacity-60">Learn More</div>

                            </Link>

                        </div>

                        {/* Wide Screens -  Column 2 */}
                        <div className="w-72 h-72 text-white m-4 flex flex-col items-center">

                            <div className="text-lg">Small Business</div>

                            <Image className='bg-white rounded-lg m-2 p-4' height={150} src={Project2Thumb} alt='/'/>

                            <Link href='projects/small-business'>

                                <div className="bg-gradient-to-br from-black via-stone-900 to-stone-900 p-2 pt-2 pb-2 m-4 rounded-xl hover:opacity-60">Learn More</div>

                            </Link>

                        </div>

                    </div>

                    {/* Wide Screens -  Row 2 */}
                    <div className="flex portrait:flex-col">

                        {/* Wide Screens -  Column 2 */}
                        <div className="w-72 h-72 text-white m-4 flex flex-col items-center">

                            <div className="text-lg">ChunkyApp</div>

                            <div className='bg-white rounded-lg m-2 p-4 h-36 w-36 text-red-900 text-3xl'>---</div>

                            <Link href='/'>

                                <div className="bg-gradient-to-br from-black via-stone-900 to-stone-900 p-2 pt-2 pb-2 m-4 rounded-xl hover:opacity-60">Learn More</div>

                            </Link>

                        </div>

                        {/* Wide Screens -  Column 2 */}
                        <div className="w-72 h-72 text-white m-4 flex flex-col items-center">

                            <div className="text-lg">Theatre</div>

                            <div className='bg-white rounded-lg m-2 p-4 h-36 w-36 text-red-900 text-3xl'>---</div>

                            <Link href='projects/theatre'>

                                <div className="bg-gradient-to-br from-black via-stone-900 to-stone-900 p-2 pt-2 pb-2 m-4 rounded-xl hover:opacity-60">Learn More</div>

                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}


export default Projects