import Footer from "./../components/Footer"


const Other = () => {
    return (

        <>

            {/* Page */}
            <div className="flex justify-center text-white">

                {/* Main Container */}
                <div className="h-fit w-6/12 portrait:w-screen flex items-center flex-col">

                    {/* Description Section Container */}
                    <div className="rounded-3xl p-8 mt-72 mb-16 w-11/12">

                        {/* Description Title */}
                        <h1 className="w-max text-3xl font-semibold m-auto">Unlisted Content</h1>

                        {/* Description Text */}
                        <div className="flex items-center">

                            <div className="p-4 font-light m-auto">

                                {/* Description text here */}

                                Built a graphics card bitcoin mining rig, I learned a lot. --Images here--

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

export default Other