import Image from "next/image"


const Intro = () => {
    return (

        <>

            {/* Intro Container */}
            <div className="text-white">

                <div className="flex justify-start mb-6">

                    {/* Image Place */}
                    <div className='shadow-xl shadow-black bg-gradient-to-br from-indigo-100 to-transparent w-16 h-16 rounded-full justify-center flex items-center mr-4'>

                        <img className="w-14 h-14 rounded-full" src="https://media.licdn.com/dms/image/D5603AQGa7Dgb4YwKjg/profile-displayphoto-shrink_100_100/0/1672078313516?e=1677715200&v=beta&t=5yZlaL3lt91uOguhmCYxN307aGsCUOkmkUwxVDPcFWk"></img>

                    </div>

                    {/* Name */}
                    <div className="flex flex-col justify-center opacity-80">

                        <h1 className="w-max text-4xl font-semibold ">Ramon</h1>

                        <div className='text-lg'>Web Developer</div>

                    </div>

                </div>

                {/* Intro Text */}
                <div className="flex justify-start items-center opacity-80">

                    <div className='text-lg'>

                        Welcome to my online portfolio.
                        <br></br>
                        Here I'll share my projects and experiences as a developer.

                    </div>

                </div>

            </div>

        </>

    )

}


export default Intro