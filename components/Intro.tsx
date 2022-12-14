

const Intro = () => {
    return (

        <>

            {/* Intro Container */}
            <div className="text-white">

                <div className="flex justify-start mb-6">

                    {/* Image Place */}
                    <div className='shadow-xl shadow-black bg-gradient-to-tr from-stone-600 via-stone-700 to-stone-600 w-16 h-16 rounded-full justify-center flex items-center border-2 border-sky-500 mr-4 text-6xl'></div>

                    {/* Name */}
                    <div className="flex flex-col justify-center opacity-80">

                        <h1 className="w-max text-4xl font-semibold">Ramon</h1>

                        <div className='text-lg'>Web Developer</div>

                    </div>


                </div>

                {/* Intro Text */}
                <div className="flex justify-start items-center opacity-80">

                    <div className='text-lg'>

                        Welcome to my online portfolio.
                        <br></br>
                        Here I'll share my projects as well as my tactics for becoming a better problem solver.

                    </div>

                </div>

            </div>

        </>

    )

}


export default Intro