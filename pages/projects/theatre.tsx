import SharedNavbar from "../../components/SharedNavbar"
import Project from "../../components/Project"
import Footer from "../../components/Footer"


const Theatre = () => {
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
                    <div className="landscape:hidden sticky top-0 portrait:top-2 portrait:w-11/12 w-full">

                        <SharedNavbar />

                    </div>

                    {/* Description Section Container */}
                    <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 rounded-3xl p-8 mb-16 w-11/12 shadow-lg shadow-black mt-32">

                        {/* Description Title */}
                        <h1 className="w-max text-3xl m-4 font-semibold">Description</h1>


                        {/* Description Text */}
                        <div className="flex items-center flex-col">

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

                            <a href='https://ramvilsil.github.io/summary-theatrecms/' className="bg-gradient-to-br from-black via-stone-900 to-stone-900 w-max p-3 m-4 rounded-xl hover:opacity-60">View Code Summary</a>

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

export default Theatre