import Image from "next/image"


const Project = ({ title, projectImage, projectSourceLink, projectLink, techInfo }: { title: string, projectImage: string, projectSourceLink: string, projectLink: string, techInfo: string }) => {
    return (

        <>

            {/* Project Section Container */}
            <div className="mt-32 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 text-white rounded-3xl p-8 w-11/12 shadow-lg shadow-black">

                {/* Project Title */}
                <h1 className="w-max text-3xl portrait:text-xl m-4 font-semibold portrait:m-auto portrait:mt-4">{title}<div className="text-lg font-normal portrait:hidden">with {techInfo}</div></h1>

                <div className="flex justify-evenly items-center portrait:flex-col m-4 portrait:mt-0">

                    {/* Project Image */}
                    <div className="p-4 flex flex-col items-center">

                        <Image className='bg-white rounded-lg m-4 p-4' height={200} width={200} src={projectImage} alt='/' />

                    </div>

                    {/* View Buttons */}
                    <div className="flex portrait:flex-col text-center items-center">

                        <a href={projectLink} className="bg-gradient-to-br from-black via-neutral-900 to-neutral-900 w-max p-3 m-4 rounded-xl hover:opacity-60">View Deployed App</a>

                        <a href={projectSourceLink} className="bg-gradient-to-br from-black via-neutral-900 to-neutral-900 w-max p-3 m-4 rounded-xl hover:opacity-60">View Source</a>

                    </div>

                </div>

            </div>

        </>

    )

}


export default Project