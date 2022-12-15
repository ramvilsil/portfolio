import SharedNavbar from "../../components/SharedNavbar"
import Project from "../../components/Project"
import Footer from "../../components/Footer"


const SmallBusiness = () => {
    return (

        <>

            {/* Page */}
            <div className="flex justify-center text-white">

                <div className="fixed w-full z-50 top-0 portrait:hidden">

                    <SharedNavbar />

                </div>

                {/* Main Container */}
                <div className="h-fit w-6/12 portrait:w-screen flex items-center flex-col">

                    {/* Navbar */}
                    <div className="landscape:hidden sticky top-0 portrait:top-2 portrait:w-11/12 w-full">

                        <SharedNavbar />

                    </div>

                    {/* Imported Project Section */}
                    <Project title='Small Business Web Page' projectImage='/assets/business.png' projectLink="https://business-website-one.vercel.app" projectSourceLink="https://github.com/ramvilsil/business-webpage" techInfo="React" />

                    {/* Description Section Container */}
                    <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 rounded-3xl p-8 mt-12 mb-16 w-11/12 shadow-lg shadow-black">

                        {/* Description Title */}
                        <h1 className="w-max text-3xl m-4 font-semibold">Description</h1>

                        {/* Description Text */}
                        <div className="flex items-center">

                            <div className="p-4 font-light">

                                This is simply a web page built with React components and no CSS frameworks.
                                It has a navbar, a home section, an about section, a contact section, and a
                                footer section. To allow the navbar content to fit more appropriately on mobile
                                devices, the navbar is able to display with a hamburger icon.

                                <br></br><br></br>

                                I built this project to improve my front-end skills.
                                My goals for this project were to figure out how to create
                                a hamburger icon, practice positioning elements, and become
                                familiar with JavaScript React. Ultimately it enabled me to
                                strengthen my skills for my portfolio site.

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