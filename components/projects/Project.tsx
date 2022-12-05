import Image from "next/image"


const Project = ({title, projectImage, projectSourceLink, projectLink} : {title : string, projectImage : string, projectSourceLink : string, projectLink :  string})=> {
    return (
        <>

            {/* Project Display Container */}
            <div className="bg-stone-800 text-white rounded-3xl p-4">

                {/* Title */}
                <h1 className="text-2xl m-6">{title}</h1>

                <div className="flex justify-evenly items-center flex-col m-4">

                    <div className="p-4 flex flex-col items-center">

                        <Image className='bg-white rounded-lg m-4 p-4' height={250} width={250} src={projectImage} alt='/'/>

                    </div>   

                    {/* View Buttons */}
                    <div className="portrait:flex portrait:flex-col text-center">

                            <a href={projectSourceLink} className="bg-stone-900 p-4 m-4 rounded-xl hover:opacity-60">View Source</a>

                            <a href={projectLink} className="bg-stone-900 p-4 m-3 rounded-xl hover:opacity-60">View Deployed App</a>

                    </div>
                                
                </div>

            </div>

        </>
    )
}


export default Project