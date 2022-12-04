
import Navbar from "./Navbar"
import Projects from "./Projects"

import Intro from "./Intro"

import About from "./About"
import Contact from "./Contact"

import Footer from "./Footer"


const Main = () => {
    return (
        <>  

            {/* later to implement grid for left, main, right containers? */}

            <div className="flex justify-center">

                {/* Main Container */}
                <div className="bg-stone-900 h-fit w-6/12 portrait:w-screen">

                    <div className="intro">

                        <Intro />

                    </div>

                    {/* Navbar Container */}
                    <div className="sticky top-1">

                        <Navbar />

                    </div>

                    <div id="projects" className="mt-32 mb-24">

                        <Projects />

                    </div>

                    <div id="about" className="mt-32 mb-24">

                        <About />

                    </div>

                    <div id="contact" className="mt-32 mb-16">

                        <Contact />

                    </div>

                    <div className="">

                        <Footer />

                    </div>

                </div>
            
            </div>  
                       
        </>
    )
}



export default Main