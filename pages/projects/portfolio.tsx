
import SharedNavbar from "../../components/projects/SharedNavbar"

import Project from "../../components/projects/Project"

const Portfolio = () => {
    return (
        <>

            <div className="flex justify-center">

                {/* Main Container */}
                <div className="bg-stone-900 h-fit w-6/12 portrait:w-screen">

                    <SharedNavbar />

                    <Project title='Portfolio' />



                    <div className="bg-stone-800 text-white rounded-3xl p-4 mt-12">

                        {/* Title */}
                        <h1 className="text-white w-max text-2xl p-4">Description</h1>

                        <div className="flex items-center">

                            <div className="p-4">

                            I built my portfolio site with a popular React framework called Next.js <br></br><br></br>
                            The process in building:

                            </div>

                            

                        </div>

                        </div>

                </div>
            
            </div>

        </>
    )
}

export default Portfolio