
import Link from "next/link"

import Image from "next/image"

import PortfolioThumb from '../../public/assets/favicon.png'

const Project = ({ title } : { title : string}) => {
    return (
        <>
            {/* Projects Container */}
            <div className="bg-stone-800 text-white rounded-3xl p-4">

                {/* Title */}
                <h1 className="text-2xl m-6">{title}</h1>

                <div className="flex justify-evenly items-center flex-col m-4">

                    <div className="bg-stone-800 rounded-lg p-4 flex flex-col items-center">

                        <Image className='bg-white rounded-lg m-4 p-4' height={250} objectFit='cover' src={PortfolioThumb} alt='/'/>


                    </div>   

                    {/* buttons */}
                    <div className="portrait:flex portrait:flex-col text-center">

                            <a href="https://github.com/ramvilsil/portfolio" className="bg-stone-900 p-4 m-4 rounded-xl hover:opacity-60">View Source</a>



                            <a href="https://rxvs.dev" className="bg-stone-900 p-4 m-3 rounded-xl hover:opacity-60">View Deployed App</a>


                    </div>
                                

                </div>

            </div>

        
        </>
    )
}


export default Project