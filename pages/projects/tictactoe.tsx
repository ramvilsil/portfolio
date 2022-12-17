import SharedNavbar from "../../components/SharedNavbar"
import Project from "../../components/Project"
import Footer from "../../components/Footer"


const TicTacToe = () => {
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
                    <Project title='Tic Tac Toe Web App' projectImage='/assets/tictactoe.png' projectLink="https://ramvilsil.github.io/tictactoe/" projectSourceLink="https://github.com/ramvilsil/tictactoe" techInfo="HTML / CSS / JavaScript" />

                    {/* Description Section Container */}
                    <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 rounded-3xl p-8 portrait:p-4 mt-12 mb-16 w-11/12 shadow-lg shadow-black">

                        {/* Description Title */}
                        <h1 className="w-max text-3xl portrait:text-2xl m-4 font-semibold">Description</h1>

                        {/* Description Text */}
                        <div className="flex items-center">

                            <div className="p-4 font-light">
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


export default TicTacToe