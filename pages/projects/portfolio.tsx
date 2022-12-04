
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

                </div>
            
            </div>

        </>
    )
}

export default Portfolio