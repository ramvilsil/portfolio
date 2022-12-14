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
                    <div className="landscape:hidden sticky top-0 portrait:top-2 portrait:w-11/12 w-full">

                        <SharedNavbar />

                    </div>

                    {/* Imported Project Section */}
                    <Project title='Portfolio' projectImage='/assets/favicon.png' projectLink="https://rxvs.dev" projectSourceLink="https://github.com/ramvilsil/portfolio" techInfo="Next.js / TypeScript React / Tailwind CSS" />

                    {/* Description Section Container */}
                    <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 rounded-3xl p-8 mt-12 mb-16 w-11/12 shadow-lg shadow-black">

                        {/* Description Title */}
                        <h1 className="w-max text-3xl m-4 font-semibold">Description</h1>

                        {/* Description Text */}
                        <div className="flex items-center">

                            <div className="p-4 font-light">

                                Why I built this project - To improve my front end skills, mobile responsivness,
                                practice positioning elements, gain better familiarity wtih the technologies I used


                                <br></br><br></br>

                                What I enjoyed - Tailwind CSS makes it much easier to apply styling. In turn I spend less time on the css syntax
                                and more on the actual styling, makes for a better site. Working on the front end I find that it's more effective
                                than BootStrap.

                                <br></br><br></br>

                                Inspiration for this project -

                                <ul className="list-disc">

                                    <li><a className="hover:underline" href="https://portfolio-next-mumef3aki-fireclint.vercel.app/">portfolio-next-mumef3aki-fireclint.vercel.app</a></li>

                                    <li><a className="hover:underline" href="https://delba.dev/">delba.dev</a></li>

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