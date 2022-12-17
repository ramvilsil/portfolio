

const Contact = () => {
    return (

        <>

            {/* Contact Section Container */}
            <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 text-white rounded-3xl p-8 portrait:p-4 shadow-lg shadow-black">

                {/* Contact Title */}
                <h1 className="w-max text-3xl m-4 font-semibold portrait:text-2xl">Contact<div className="text-lg font-normal portrait:hidden">Feel free to get in touch.</div></h1>

                {/* Contact Form Container */}
                <div className="flex justify-evenly items-center">

                    <div className='col-span-3 w-full h-auto'>

                        <div className='p-4'>

                            <form action='https://formspree.io/f/myyvrvkq' method='POST' encType='multipart/form-data'>

                                <div className='flex flex-col py-2'>
                                    <label className='text-sm py-2 font-light'>Name</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex text-black'
                                        type='text'
                                        name='name' required
                                    />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='text-sm py-2 font-light'>Email</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex text-black'
                                        type='email'
                                        name='email' required
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='text-sm py-2 font-light'>Subject</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex text-blac'
                                        type='text'
                                        name='subject'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='text-sm py-2 font-light'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 text-black resize-none'
                                        rows={10}
                                        name='message' required
                                    ></textarea>
                                </div>

                                <button className='font-medium bg-gradient-to-br from-black via-neutral-900 to-neutral-900 w-full p-4 mt-4 rounded-2xl hover:opacity-60 '>
                                    Send Message
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}


export default Contact