

const About = () => {
    return (

        <>

            {/* About Container */}
            <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 text-white rounded-3xl p-8 portrait:p-4 shadow-lg shadow-black">

                {/* About Title */}
                <h1 className="w-max text-3xl m-4 font-semibold portrait:text-2xl">About<div className="text-lg font-normal portrait:hidden">What I'm up to.</div></h1>

                {/* About Text */}
                <div className="p-4 font-light">

                    I've always enjoyed programming as a whole, not just web development.
                    Prior to getting into web development, I had knowledge of Python and JavaScript programming from high school.
                    In the summer of 2022, I began self-teaching, and in the fall, I enrolled in a web development bootcamp.

                    <br></br> <br></br>
                    One of the many reasons I love what I do is that I find it amazing that
                    a piece of software I helped build has the potential to reach the hands of people all around the world.

                </div>

            </div>

        </>

    )

}


export default About