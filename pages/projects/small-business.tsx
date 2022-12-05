import SharedNavbar from "../../components/projects/SharedNavbar"
import Project from "../../components/projects/Project"
import Footer from "../../components/Footer"


const SmallBusiness = () => {
    return (
        <>

            <div className="flex justify-center">

                {/* Main Container */}
                <div className="bg-stone-900 h-fit w-6/12 portrait:w-screen">

                    <div className="sticky top-1">

                        <SharedNavbar />

                    </div>

                    <Project title='Business' projectImage='/assets/business.png' projectLink="https://business-website-one.vercel.app" projectSourceLink="https://github.com/ramvilsil/business-webpage" />



                    <div className="bg-stone-800 text-white rounded-3xl p-4 mt-12 mb-16">

                        {/* Title */}
                        <h1 className="text-white w-max text-2xl p-4">Description</h1>

                        <div className="flex items-center">

                            <div className="p-4">

                            Built with <br></br><br></br>
                            The process in building:

                            </div>

                        </div>

                    </div>

                    <div className="mb-16">

                        <Footer />

                    </div>

                </div>
            
            </div>

        </>
    )
}

export default SmallBusiness