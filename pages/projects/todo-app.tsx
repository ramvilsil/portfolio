import SharedNavbar from "../../components/SharedNavbar"
import Project from "../../components/Project"
import Footer from "../../components/Footer"


const ChunkyApp = () => {
    return (

        <>

            {/* Page */}
            <div className="flex justify-center text-white">

                {/* Navbar */}
                <div className="fixed w-full z-50 top-0 portrait:hidden">

                    <SharedNavbar />

                </div>

                {/* Main Container */}
                <div className="h-fit w-6/12 portrait:w-screen flex items-center flex-col">

                    {/* Mobile Navbar */}
                    <div className="landscape:hidden z-50 sticky top-0 portrait:top-2 portrait:w-11/12 w-full">

                        <SharedNavbar />

                    </div>

                    {/* Imported Project Section */}
                    <Project title='To-Do Web App' projectImage='/assets/todo.png' projectLink="https://ramvilsil.github.io/todo-app/" projectSourceLink="https://github.com/ramvilsil/todo-app" techInfo='HTML / CSS / JavaScript' />

                    {/* Footer */}
                    <div className="mt-16 mb-16 w-11/12">

                        <Footer />

                    </div>

                </div>

            </div>

        </>

    )

}

export default ChunkyApp