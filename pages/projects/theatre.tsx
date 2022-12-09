import SharedNavbar from "../../components/projects/SharedNavbar"
import Project from "../../components/projects/Project"
import Footer from "../../components/Footer"


const Theatre = () => {
    return (
        <>

            <div className="flex justify-center">

                {/* Main Container */}
                <div className="h-fit w-6/12 portrait:w-screen portrait:flex items-center flex-col">

                    <div className="sticky top-0 portrait:top-2 portrait:w-11/12">

                        <SharedNavbar />

                    </div>

                    <Project title='Theatre' projectImage='/assets/favicon.png' projectLink="https://github.com/ramvilsil/" projectSourceLink="https://github.com/ramvilsil/"/>



                    <div className="bg-gradient-to-br from-stone-700 via-stone-800 to-stone-700 text-white rounded-3xl p-8 mt-12 mb-16 portrait:w-11/12">

                        {/* Title */}
                        <h1 className="w-max text-3xl m-4 font-semibold">Description</h1>

                        <div className="flex items-center">

                            <div className="p-4">

                            {/* Description text here */}
                            

                            </div>

                        </div>

                    </div>

                    <div className="mb-16 portrait:w-11/12">

                        <Footer />

                    </div>

                </div>
            
            </div>

        </>

    )
    
}

export default Theatre