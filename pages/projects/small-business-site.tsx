
import Project from "../../components/projects/Project"
import SharedNavbar from "../../components/projects/SharedNavbar"

const BusinessSite = () => {
    return (
        <>


            <div className="flex justify-center">

                {/* Main Container */}
                <div className="bg-stone-900 h-fit w-6/12 portrait:w-screen">

                    <SharedNavbar />

                    <Project title='Small Business Site' />

                </div>
            
            </div>

        </>
    )
}

export default BusinessSite