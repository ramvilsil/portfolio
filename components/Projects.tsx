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
            <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 rounded-3xl p-8 portrait:p-4 shadow-lg shadow-black text-white">

                {/* Title */}
                <h1 className="w-max rounded-lg text-3xl m-4 mb-12 font-semibold portrait:text-2xl">Projects<div className="text-lg font-normal portrait:hidden">What I've worked on recently.</div></h1>

                {/* Projects Container */}
                <div className="flex justify-evenly items-center flex-col ">

                    {/* Row 1 on landscape screens */}
                    <div className="flex portrait:flex-col">

                        {/* Column 1 on landscape screens */}
                        <div className="w-72 h-72 flex flex-col items-center">

                            {/* Project Button */}
                            <Link href='projects/portfolio'>

                                {/* Project Image */}
                                <Image className='bg-white rounded-3xl m-2 p-2 hover:opacity-60' height={150} src={Project1Thumb} alt='/' />

                            </Link>

                            {/* Project Name */}
                            <div className="text-lg">Portfolio Website</div>

                        </div>

                        {/* Column 2 on landscape screens */}
                        <div className="w-72 h-72 flex flex-col items-center">

                            <Link href='projects/small-business'>

                                {/* Project Image */}
                                <Image className='bg-white rounded-3xl m-2 p-2 hover:opacity-60' height={150} src={Project2Thumb} alt='/' />

                            </Link>

                            {/* Project Name */}
                            <div className="text-lg">Small Business Web Page</div>

                        </div>

                    </div>

                    {/* Row 2 on landscape screens */}
                    <div className="flex portrait:flex-col">

                        {/* Column 1 on landscape screens */}
                        <div className="w-72 h-72 flex flex-col items-center">

                            <Link href='projects/theatre'>

                                {/* Project Image */}
                                <Image className='bg-white rounded-3xl m-2 p-2 hover:opacity-60' height={150} src={Project4Thumb} alt='/' />

                            </Link>

                            {/* Project Name */}
                            <div className="text-lg">Theatre CMS</div>

                        </div>

                        {/* Column 2 on landscape screens */}
                        <div className="w-72 h-72 flex flex-col items-center">

                            <Link href='projects/tictactoe'>

                                {/* Project Image */}
                                <Image className='bg-white rounded-3xl m-2 p-2 hover:opacity-60' height={150} src={Project6Thumb} alt='/' />

                            </Link>

                            {/* Project Name */}
                            <div className="text-lg">Tic Tac Toe Web App</div>

                        </div>

                    </div>

                    {/* Row 2 on landscape screens */}
                    <div className="flex portrait:flex-col">

                        {/* Column 1 on landscape screens */}
                        <div className="w-72 h-72 flex flex-col items-center">

                            <Link href='projects/calculator'>

                                {/* Project Image */}
                                <Image className='bg-white rounded-3xl m-2 p-2 hover:opacity-60' height={150} src={Project5Thumb} alt='/' />

                            </Link>

                            {/* Project Name */}
                            <div className="text-lg">Calculator Web App</div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}


export default Projects