
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

                    
                        {/* later to center the intro in the middle of the page */}
                        <div className="">

                            <Intro />

                        </div>

                    
                    </div>

                    {/* Navbar Container */}
                    <div className="mb-24 text-center sticky top-0">

                        <Navbar />

                    </div>

                    <div className="mt-32 mb-24">

                        <Projects />

                    </div>

                    <div className="mt-32 mb-24">

                        <About />

                    </div>

                    <div className="mt-32 mb-16">

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