import Link from "next/link"
import Image from "next/image"
import Project1Thumb from '../public/assets/favicon.png'
import Project2Thumb from '../public/assets/business.png'
import Project3Thumb from '../public/assets/TheatreFavicon.png'

const Projects = () => {
    return (

        <>

            {/* Project Section Container */}
            <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 rounded-3xl p-8 shadow-lg shadow-black text-white">

                {/* Title */}
                <h1 className="w-max rounded-lg text-3xl m-4 mb-12 font-semibold">Projects<div className="text-lg font-normal portrait:hidden">What I've worked on recently.</div></h1>

                {/* Projects Container */}
                <div className="flex justify-evenly items-center flex-col ">

                    {/* Row 1 on landscape screens */}
                    <div className="flex portrait:flex-col">

                        {/* Column 1 on landscape screens */}
                        <div className="w-72 h-72 m-2 flex flex-col items-center">

                            {/* Project Name */}
                            <div className="text-lg">Portfolio</div>

                            {/* Project Image */}
                            <Image className='bg-white rounded-lg m-2 p-4' height={150} src={Project1Thumb} alt='/' />

                            {/* Project Button */}
                            <Link href='projects/portfolio'>

                                <div className="bg-gradient-to-br from-black via-stone-900 to-stone-900 p-2 m-4 rounded-xl hover:opacity-60">Learn More</div>

                            </Link>

                        </div>

                        {/* Column 2 on landscape screens */}
                        <div className="w-72 h-72 m-2 flex flex-col items-center">

                            {/* Project Name */}
                            <div className="text-lg">Small Business</div>

                            {/* Project Image */}
                            <Image className='bg-white rounded-lg m-2 p-4' height={150} src={Project2Thumb} alt='/' />

                            {/* Project Button */}
                            <Link href='projects/small-business'>

                                <div className="bg-gradient-to-br from-black via-stone-900 to-stone-900 p-2 m-4 rounded-xl hover:opacity-60">Learn More</div>

                            </Link>

                        </div>

                    </div>

                    {/* Row 2 on landscape screens */}
                    <div className="flex portrait:flex-col">

                        {/* Column 1 on landscape screens */}
                        <div className="w-72 h-72 m-2 flex flex-col items-center">

                            {/* Project Name */}
                            <div className="text-lg">ChunkyApp</div>

                            {/* Project Image */}
                            <div className='bg-white rounded-lg m-2 p-4 h-36 w-36 text-red-900 text-3xl'>---</div>

                            {/* Project Button */}
                            <Link href='projects/app'>

                                <div className="bg-gradient-to-br from-black via-stone-900 to-stone-900 p-2 m-4 rounded-xl hover:opacity-60">Learn More</div>

                            </Link>

                        </div>

                        {/* Column 2 on landscape screens */}
                        <div className="w-72 h-72 m-2 flex flex-col items-center">

                            {/* Project Name */}
                            <div className="text-lg">Theatre CMS</div>

                            {/* Project Image */}
                            <div className='bg-white rounded-lg m-2 p-4 h-36 w-36 flex items-center justify-center'>

                                <Image height={20} src={Project3Thumb} alt='/' />

                            </div>


                            {/* Project Button */}
                            <Link href='projects/theatre'>

                                <div className="bg-gradient-to-br from-black via-stone-900 to-stone-900 p-2 m-4 rounded-xl hover:opacity-60">Learn More</div>

                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}


export default Projects