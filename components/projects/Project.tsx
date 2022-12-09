import Image from "next/image"


const Project = ({title, projectImage, projectSourceLink, projectLink} : {title : string, projectImage : string, projectSourceLink : string, projectLink :  string})=> {
    return (
        <>

            {/* Project Display Container */}
            <div className="mt-20 bg-gradient-to-br from-stone-700 via-stone-800 to-stone-700 text-white rounded-3xl p-8 w-11/12 shadow-lg shadow-black">

                {/* Title */}
                <h1 className="w-max text-3xl m-4 font-semibold">{title}</h1>

                <div className="flex justify-evenly items-center flex-col m-4">

                    <div className="p-4 flex flex-col items-center">

                        <Image className='bg-white rounded-lg m-4 p-4' height={250} width={250} src={projectImage} alt='/'/>

                    </div>   

                    {/* View Buttons */}
                    <div className="portrait:flex portrait:flex-col text-center">

                            <a href={projectSourceLink} className="bg-gradient-to-br from-black via-stone-900 to-stone-900 p-4 m-4 rounded-xl hover:opacity-60">View Source</a>

                            <a href={projectLink} className="bg-gradient-to-br from-black via-stone-900 to-stone-900 p-4 m-4 rounded-xl hover:opacity-60">View Deployed App</a>

                    </div>
                                
                </div>

            </div>

        </>
    )
}


export default Project