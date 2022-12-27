import SharedNavbar from "../../components/SharedNavbar"
import Project from "../../components/Project"
import Footer from "../../components/Footer"


const Portfolio = () => {
    return (

        <>

            {/* Page */}
            <div className="flex justify-center text-white">

                {/* Navbar */}
                <div className="fixed w-full z-50 top-0 portrait:hidden">

                    <SharedNavbar />

                </div>

                {/* Main Container */}
                <div className="h-fit w-6/12 portrait:w-screen flex items-center flex-col">

                    {/* Mobile Navbar */}
                    <div className="landscape:hidden z-50 sticky top-0 portrait:top-2 portrait:w-10/12 w-full">

                        <SharedNavbar />

                    </div>

                    {/* Imported Project Section */}
                    <Project title='Portfolio Website' projectImage='/assets/R-favicon.gif' projectLink="https://rxvs.dev" projectSourceLink="https://github.com/ramvilsil/portfolio" techInfo="Next.js / TypeScript React / Tailwind CSS" />

                    {/* Description Section Container */}
                    <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 rounded-3xl p-8 portrait:p-4 mt-12 mb-16 w-11/12 shadow-lg shadow-black">

                        {/* Description Title */}
                        <h1 className="w-max text-3xl portrait:text-2xl m-4 font-semibold">Description</h1>

                        {/* Description Text */}
                        <div className="flex items-center">

                            <div className="p-4 font-light">

                                I created this portfolio website to showcase my work, but in the process,
                                I improved my front end abilities like element positioning and mobile responsiveness.
                                I also became more familiar with the technologies I applied.


                                <br></br><br></br>

                                I appreciated how the Tailwind CSS framework accelerates styling while retaining a lot
                                of the customizability that plain CSS provides. As a result, I spent less effort on CSS
                                syntax and more time on actual styling, resulting in a better-looking site. While working
                                on various projects, I've bounced between Tailwind, plain CSS, and Bootstrap and I'd say
                                I prefer Tailwind over both others. It's due to the fact that you don't have to leave
                                the HTML page with Tailwind. The main disadvantage of Tailwind is that the HTML classes
                                can get quite lengthy and often disorganized, making it difficult to pinpoint where there
                                may be conflicting styling classes.

                                <br></br><br></br>

                                I had initially created my portfolio website with plain HTML, CSS, and JavaScript,
                                but I found it too boring and wanted to play around with other technologies.
                                <br></br><br></br>

                                <div className="text-center">Check out <a className="underline hover:opacity-70" href="https://ramvilsil.github.io/beginner-portfolio/">my first portfolio website</a>.</div>

                                <br></br>

                                Seeking to create a better portfolio website, I explored around and found inspiration from a few sites.

                                <br></br><br></br>
                                Here are their links. See if you can spot similarities with my site!

                                <br></br><br></br>

                                <ul className="list-disc ml-6">

                                    <li className="mb-2"><a className="underline hover:opacity-70" href="https://portfolio-next-mumef3aki-fireclint.vercel.app/">portfolio-next-mumef3aki-fireclint.vercel.app</a></li>

                                    <li className="mb-2"><a className="underline hover:opacity-70" href="https://delba.dev/">delba.dev</a></li>

                                    <li><a className="underline hover:opacity-70" href="https://www.danielcranney.com/">danielcranney.com</a></li>

                                </ul>

                            </div>

                        </div>

                    </div>

                    {/* Footer */}
                    <div className="mb-16 w-11/12">

                        <Footer />

                    </div>

                </div>

            </div>

        </>

    )

}


export default Portfolio