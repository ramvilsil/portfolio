import Link from "next/link"
import Image from "next/image"
import Project1Thumb from '../public/assets/R-favicon.png'
import Project2Thumb from '../public/assets/business.png'
import Project3Thumb from '../public/assets/ChunkyApp.png'
import Project4Thumb from '../public/assets/theatre.png'
import Project5Thumb from '../public/assets/calc-project.png'
import Project6Thumb from '../public/assets/tictactoe.png'

const Projects = () => {
    return (

        <>

            {/* Project Section Container */}
            <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 rounded-3xl p-8 shadow-lg shadow-black text-white">

                {/* Title */}
                <h1 className="w-max rounded-lg text-3xl m-4 mb-12 font-semibold portrait:m-auto portrait:mb-12 portrait:mt-4">Projects<div className="text-lg font-normal portrait:hidden">What I've worked on recently.</div></h1>

                {/* Projects Container */}
                <div className="flex justify-evenly items-center flex-col ">

                    {/* Row 1 on landscape screens */}
                    <div className="flex portrait:flex-col">

                        {/* Column 1 on landscape screens */}
                        <div className="w-72 h-72 m-2 flex flex-col items-center">

                            {/* Project Name */}
                            <div className="text-lg">Portfolio Website</div>

                            {/* Project Image */}
                            <Image className='bg-white rounded-lg m-2 p-4' height={150} src={Project1Thumb} alt='/' />

                            {/* Project Button */}
                            <Link href='projects/portfolio'>

                                <div className="bg-gradient-to-br from-black via-neutral-900 to-neutral-900 p-2 m-4 rounded-xl italic hover:opacity-60">Visit Project &rarr;</div>

                            </Link>

                        </div>

                        {/* Column 2 on landscape screens */}
                        <div className="w-72 h-72 m-2 flex flex-col items-center">

                            {/* Project Name */}
                            <div className="text-lg">Small Business Web Page</div>

                            {/* Project Image */}
                            <Image className='bg-white rounded-lg m-2 p-4' height={150} src={Project2Thumb} alt='/' />

                            {/* Project Button */}
                            <Link href='projects/small-business'>

                                <div className="bg-gradient-to-br from-black via-neutral-900 to-neutral-900 p-2 m-4 rounded-xl italic hover:opacity-60">Visit Project &rarr;</div>

                            </Link>

                        </div>

                    </div>

                    {/* Row 2 on landscape screens */}
                    <div className="flex portrait:flex-col">

                        {/* Column 1 on landscape screens */}
                        <div className="w-72 h-72 m-2 flex flex-col items-center">

                            {/* Project Name */}
                            <div className="text-lg">ChunkyApp Web App</div>

                            {/* Project Image */}
                            <Image className='bg-white rounded-lg m-2 p-4' height={150} src={Project3Thumb} alt='/' />

                            {/* Project Button */}
                            <Link href='projects/chunkyapp'>

                                <div className="bg-gradient-to-br from-black via-neutral-900 to-neutral-900 p-2 m-4 rounded-xl italic hover:opacity-60">Visit Project &rarr;</div>

                            </Link>

                        </div>

                        {/* Column 2 on landscape screens */}
                        <div className="w-72 h-72 m-2 flex flex-col items-center">

                            {/* Project Name */}
                            <div className="text-lg">Theatre CMS</div>

                            {/* Project Image */}
                            <Image className='bg-white rounded-lg m-2 p-4' height={150} src={Project4Thumb} alt='/' />


                            {/* Project Button */}
                            <Link href='projects/theatre'>

                                <div className="bg-gradient-to-br from-black via-neutral-900 to-neutral-900 p-2 m-4 rounded-xl italic hover:opacity-60">Visit Project &rarr;</div>

                            </Link>

                        </div>

                    </div>

                    {/* Row 2 on landscape screens */}
                    <div className="flex portrait:flex-col">

                        {/* Column 1 on landscape screens */}
                        <div className="w-72 h-72 m-2 flex flex-col items-center">

                            {/* Project Name */}
                            <div className="text-lg">Calculator Web App</div>

                            {/* Project Image */}
                            <Image className='bg-white rounded-lg m-2 p-4' height={150} src={Project5Thumb} alt='/' />

                            {/* Project Button */}
                            <Link href='projects/calculator'>

                                <div className="bg-gradient-to-br from-black via-neutral-900 to-neutral-900 p-2 m-4 rounded-xl italic hover:opacity-60">Visit Project &rarr;</div>

                            </Link>

                        </div>

                        {/* Column 2 on landscape screens */}
                        <div className="w-72 h-72 m-2 flex flex-col items-center">

                            {/* Project Name */}
                            <div className="text-lg">Tic Tac Toe Web App</div>

                            {/* Project Image */}
                            <Image className='bg-white rounded-lg m-2 p-4' height={150} src={Project6Thumb} alt='/' />

                            {/* Project Button */}
                            <Link href='projects/tictactoe'>

                                <div className="bg-gradient-to-br from-black via-neutral-900 to-neutral-900 p-2 m-4 rounded-xl italic hover:opacity-60">Visit Project &rarr;</div>

                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}


export default Projects