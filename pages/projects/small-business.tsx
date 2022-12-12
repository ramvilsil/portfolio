import SharedNavbar from "../../components/SharedNavbar"
import Project from "../../components/Project"
import Footer from "../../components/Footer"


const SmallBusiness = () => {
    return (

        <>

            {/* Page */}
            <div className="flex justify-center text-white">

                {/* Main Container */}
                <div className="h-fit w-6/12 portrait:w-screen flex items-center flex-col">

                    {/* Navbar */}
                    <div className="sticky top-0 portrait:top-2 portrait:w-11/12 w-full">

                        <SharedNavbar />

                    </div>

                    {/* Imported Project Section */}
                    <Project title='Business' projectImage='/assets/business.png' projectLink="https://business-website-one.vercel.app" projectSourceLink="https://github.com/ramvilsil/business-webpage" techInfo="React JS"/>

                    {/* Description Section Container */}
                    <div className="bg-gradient-to-br from-stone-700 via-stone-800 to-stone-700 rounded-3xl p-8 mt-12 mb-16 w-11/12 shadow-lg shadow-black">

                        {/* Description Title */}
                        <h1 className="w-max text-3xl m-4 font-semibold">Description</h1>

                        {/* Description Text */}
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

                    {/* Footer */}
                    <div className="mb-16 w-11/12">

                        <Footer />

                    </div>

                </div>
            
            </div>

        </>
        
    )

}


export default SmallBusiness