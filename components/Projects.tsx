import Link from "next/link"
import Image from "next/image"
import Project1Thumb from '../public/assets/favicon.png'
import Project2Thumb from '../public/assets/business.png'


const Projects = () => {
    return (
        <>

            {/* Projects Container */}
            <div className="bg-stone-800 rounded-3xl p-8">

                {/* Title */}
                <h1 className="text-white w-max rounded-lg text-2xl m-4">Projects</h1>


                {/* Might be better to switch to grid instead of flex to add more rows */}
                <div className="flex justify-evenly items-center portrait:flex-col ">

                    <Link href='projects/portfolio'>

                        <div className="bg-stone-800 w-72 h-96 text-white rounded-2xl p-4 flex flex-col items-center hover:bg-stone-900">

                            <div className="text-lg">Portfolio</div>

                            <Image className='bg-white rounded-lg m-4 p-4' height={200} objectFit='cover' src={Project1Thumb} alt='/'/>

                            <div className="text-center rounded-lg m-8">
                                Next.js, TypeScript React, Tailwind CSS
                            </div>

                        </div>

                    </Link>

                    <Link href='projects/small-business'>

                        <div className="bg-stone-800 w-72 h-96 text-white rounded-2xl p-4 flex flex-col items-center hover:bg-stone-900">

                            <div className="text-lg">Business Site</div>

                            <Image className='bg-white rounded-lg m-4 p-4' height={200} objectFit='cover' src={Project2Thumb} alt='/'/>

                            <div className="text-center rounded-lg m-8">
                                React, Custom CSS
                            </div>

                        </div>

                    </Link>

                </div>

            </div>

        </>
    )
}


export default Projects