import SharedNavbar from "../../components/projects/SharedNavbar"
import Project from "../../components/projects/Project"
import Footer from "../../components/Footer"


const SmallBusiness = () => {
    return (
        <>

            <div className="flex justify-center">

                {/* Main Container */}
                <div className="h-fit w-6/12 portrait:w-screen flex items-center flex-col">

                    <div className="sticky top-0 portrait:top-2 portrait:w-11/12 w-full">

                        <SharedNavbar />

                    </div>

                    <Project title='Business' projectImage='/assets/business.png' projectLink="https://business-website-one.vercel.app" projectSourceLink="https://github.com/ramvilsil/business-webpage" techInfo="React JS"/>



                    <div className="bg-gradient-to-br from-stone-700 via-stone-800 to-stone-700 text-white rounded-3xl p-8 mt-12 mb-16 w-11/12 shadow-lg shadow-black">

                        {/* Title */}
                        <h1 className="w-max text-3xl m-4 font-semibold">Description</h1>

                        <div className="flex items-center">

                            <div className="p-4 font-light">

                            Why I built this project - Improve front end skills, mobile responsivness, learn how to create a 
                            hamburger icon, practice positioning elements, gain familiarity wtih React 

                            <br></br><br></br>

                            What I enjoyed - Helped ready me to improve my portfolio site

                            <br></br><br></br>

                            Inspiration for this project - Creating a simple mobile responsive webpage, 
                            with a navbar, home, about, contact, and footer                            

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

export default SmallBusiness