import SharedNavbar from "../../components/SharedNavbar"
import Project from "../../components/Project"
import Footer from "../../components/Footer"


const Calculator = () => {
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
                    <div className="landscape:hidden z-50 sticky top-0 portrait:top-2 portrait:w-10/12 w-full">

                        <SharedNavbar />

                    </div>

                    {/* Imported Project Section */}
                    <Project title='Calculator Web App' projectImage='/assets/calc-project.png' projectLink="https://ramvilsil.github.io/calculator/" projectSourceLink="https://github.com/ramvilsil/calculator" techInfo="HTML / CSS / JavaScript" />

                    {/* Description Section Container */}
                    <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 rounded-3xl p-8 portrait:p-4 mt-12 mb-16 w-11/12 shadow-lg shadow-black">

                        {/* Description Title */}
                        <h1 className="w-max text-3xl portrait:text-2xl m-4 font-semibold">Description</h1>

                        {/* Description Text */}
                        <div className="flex items-center">

                            <div className="p-4 font-light">

                                The user is to interact with the digital calculator
                                as designed by clicking on responsive elements.
                                The calculator will display the results of basic
                                mathematical calculations upon valid input from the user.

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


export default Calculator