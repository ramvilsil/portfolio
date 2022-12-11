import SharedNavbar from "../../components/projects/SharedNavbar"
import Project from "../../components/projects/Project"
import Footer from "../../components/Footer"


const Portfolio = () => {
    return (
        <>

            <div className="flex justify-center">

                {/* Main Container */}
                <div className="h-fit w-6/12 portrait:w-screen flex items-center flex-col">

                    <div className="sticky top-0 portrait:top-2 portrait:w-11/12 w-full">

                        <SharedNavbar />

                    </div>

                    <Project title='Portfolio' projectImage='/assets/favicon.png' projectLink="https://rxvs.dev" projectSourceLink="https://github.com/ramvilsil/portfolio" techInfo="Next.js / TypeScript React / Tailwind CSS"/>



                    <div className="bg-gradient-to-br from-stone-700 via-stone-800 to-stone-700 text-white rounded-3xl p-8 mt-12 mb-16 w-11/12 shadow-lg shadow-black">

                        {/* Title */}
                        <h1 className="w-max text-3xl m-4 font-semibold">Description</h1>

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

                    <div className="mb-16 w-11/12"> 

                        <Footer />

                    </div>

                </div>
            
            </div>

        </>
    )
}

export default Portfolio