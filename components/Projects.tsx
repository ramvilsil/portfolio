
import Link from "next/link"

import Image from "next/image"

import PortfolioThumb from '../public/assets/favicon.png'

const Projects = () => {
    return (
        <>
            {/* Projects Container */}
            <div className="bg-stone-800  rounded-3xl p-8">

                {/* Title */}
                <h1 className="text-white w-max rounded-lg text-2xl m-4">Projects</h1>

                <div className="flex justify-evenly items-center portrait:flex-col ">



                    <Link href='projects/portfolio'>
                        <div className="bg-stone-800  text-white rounded-lg p-4 flex flex-col items-center hover:bg-stone-900">

                            <div className="text-lg">Portfolio</div>

                            <Image className='bg-white rounded-lg m-4 p-4' height={250} objectFit='cover' src={PortfolioThumb} alt='/'/>

                            <div className="text-center rounded-lg m-8">My personal website I built 
                            with the React framework Next.js, and styled with Tailwind CSS</div>



                        </div>
                    </Link>

                    {/*
                    <Link href='projects/small-business-site'>
                        <div className="bg-stone-800 rounded-lg p-4 flex flex-col items-center hover:bg-stone-900">


                            <Image className='bg-white rounded-lg m-4 p-4' height={250} objectFit='cover' src={PortfolioThumb} alt='/'/>

                            <div className="text-white rounded-lg m-4 p-4">Business site: I built throughout feknlsgklsnfglsknf
                            snjgsfklsfk</div>



                        </div>
                    </Link>
                    */}

                    

                </div>

            </div>

        
        </>
    )
}


export default Projects