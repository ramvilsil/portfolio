
import Link from "next/link"

import Image from "next/image"

import PortfolioThumb from '../../public/assets/favicon.png'

const Project = ({ title } : { title : string}) => {
    return (
        <>
            {/* Projects Container */}
            <div className="bg-stone-800 text-white rounded-3xl p-4">

                {/* Title */}
                <h1 className="w-max rounded-lg text-2xl p-6">{title}</h1>

                <div className="flex justify-evenly items-center portrait:flex-col ">

                    <div className="bg-stone-800 rounded-lg p-4 flex flex-col items-center">

                        <Image className='bg-white rounded-lg m-4 p-4' height={250} objectFit='cover' src={PortfolioThumb} alt='/'/>

                        <div className="rounded-lg m-4 p-4">Description here</div>

                    </div>   

                    {/* buttons */}
                    <div>
                        <div className="bg-stone-800 rounded-lg p-4 flex flex-col items-center">

                            <a href="https://github.com/ramvilsil/portfolio" className="bg-stone-400 p-4 rounded-3xl hover:opacity-50">Source</a>

                        </div>

                        <div className="bg-stone-800 rounded-lg p-4 flex flex-col items-center">

                            <a href="https://github.com/ramvilsil/portfolio" className="bg-stone-400 p-4 rounded-3xl hover:opacity-50">Demo</a>

                        </div>  

                    </div>
                                

                </div>

            </div>

        
        </>
    )
}


export default Project