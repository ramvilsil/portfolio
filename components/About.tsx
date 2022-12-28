

const About = () => {
    return (

        <>

            {/* About Container */}
            <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 text-white rounded-3xl p-8 portrait:p-4 shadow-lg shadow-black">

                {/* About Title */}
                <h1 className="w-max text-3xl m-4 font-semibold portrait:text-2xl">About<div className="text-lg font-normal portrait:hidden">What I do.</div></h1>

                {/* About Text */}
                <div className="p-4 font-light">

                    I'm a dedicated developer with full-stack expertise.

                    I work mostly with the programming languages C# and JavaScript/TypeScript.
                    ASP.NET MVC is the main framework I use for web applications,
                    but I'm always open to adopting other technologies.
                    <br></br>
                    <br></br>
                    I've always enjoyed developing different sorts of programs,
                    not just web-based ones. I began programming in middle school, developing Python applications.
                    One of the reasons I enjoy programming is knowing that a piece
                    of software I helped create has the potential to reach the hands of individuals all around the world.


                </div>

            </div>

        </>

    )

}


export default About