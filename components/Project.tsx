import Image from "next/image"


const Project = ({ title, projectImage, projectSourceLink, projectLink, techInfo }: { title: string, projectImage: string, projectSourceLink: string, projectLink: string, techInfo: string }) => {
    return (

        <>

            {/* Project Section Container */}
            <div className="mt-32 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 text-white rounded-3xl p-8 portrait:p-4 w-11/12 shadow-lg shadow-black">

                {/* Project Title */}
                <h1 className="w-max text-3xl portrait:text-xl m-4 font-semibold portrait:m-auto portrait:mt-4">{title}<div className="text-lg font-normal portrait:hidden">with {techInfo}</div></h1>

                <div className="flex justify-evenly items-center portrait:flex-col m-4 portrait:mt-0">

                    {/* Project Image */}
                    <div className="p-4 flex flex-col items-center">

                        <Image className='bg-white rounded-3xl m-4 p-3' height={200} width={200} src={projectImage} alt='/' />

                    </div>

                    {/* View Buttons */}
                    <div className="flex portrait:flex-col text-center items-center">

                        <a href={projectLink} className="bg-gradient-to-br from-black via-neutral-900 to-neutral-900 w-18 h-10 p-2 m-4 rounded-xl hover:opacity-60 text-lg flex">View Live &nbsp;<svg className="translate-y-0.5" xmlns="http://www.w3.org/2000/svg" height={20} fill="white" viewBox="0 0 600 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg></a>

                        <a href={projectSourceLink} className="bg-gradient-to-br from-black via-neutral-900 to-neutral-900 w-18 h-10 p-2 m-4 rounded-xl hover:opacity-60 text-lg flex">View Source &nbsp;<svg className="translate-y-0.5" xmlns="http://www.w3.org/2000/svg" height={20} fill="white" viewBox="0 0 650 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg></a>

                    </div>

                </div>

            </div>

        </>

    )

}


export default Project