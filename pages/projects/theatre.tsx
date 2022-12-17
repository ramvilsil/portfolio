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
                    <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 rounded-3xl p-8 portrait:p-4 mb-16 w-11/12 shadow-lg shadow-black mt-32">

                        {/* Description Title */}
                        <h1 className="w-max text-3xl portrait:text-2xl m-4 font-semibold">Theatre CMS<div className="text-lg font-normal portrait:hidden">with ASP.NET MVC / Entity Framework <br></br> BootStrap / jQuery / and more</div></h1>

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

                            <a href='https://ramvilsil.github.io/summary-theatrecms' className="bg-gradient-to-br from-black via-neutral-900 to-neutral-900 w-max p-2 m-4 rounded-xl hover:opacity-60 text-lg flex">View Code Summary &nbsp;<svg className="translate-y-1" xmlns="http://www.w3.org/2000/svg" height={20} fill="white" viewBox="0 0 600 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg></a>

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