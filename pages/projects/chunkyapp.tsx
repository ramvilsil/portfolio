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
                    <Project title='ChunkyApp Web App' projectImage='/assets/ChunkyApp.png' projectLink="https://github.com/ramvilsil/" projectSourceLink="https://github.com/ramvilsil/" techInfo='ASP.NET MVC' />

                    {/* Description Section Container */}
                    <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 rounded-3xl p-8 portrait:p-4 mt-12 mb-16 w-11/12 shadow-lg shadow-black">

                        {/* Description Title */}
                        <h1 className="w-max text-3xl portrait:text-2xl m-4 font-semibold">Description</h1>

                        {/* Description Text */}
                        <div className="flex items-center">

                            <div className="p-4 font-light">

                                {/* Description text here */}

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec posuere mi ut dapibus aliquam. In hac habitasse platea dictumst.
                                Sed porta metus ac sapien tempus, ut ultrices lacus fermentum.
                                Donec tincidunt luctus magna, a vestibulum ante. Quisque et efficitur mauris.
                                Ut ut faucibus urna, quis rhoncus sem. Suspendisse porta felis tempus
                                leo scelerisque volutpat. Phasellus vel mauris non quam blandit tempus id in mi.
                                Nam hendrerit magna quis neque dictum posuere. Vestibulum sed fringilla nisi.

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

export default ChunkyApp