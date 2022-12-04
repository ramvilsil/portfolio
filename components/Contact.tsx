



const Contact = () => {
    return (
        <>
            {/* Contact Container */}
            <div id="contact" className="bg-stone-800 text-white rounded-3xl p-4">

                {/* Title */}
                <h1 className="w-max text-2xl p-6">Contact</h1>

                <div className="flex justify-evenly items-center">

                    <div className='col-span-3 w-full h-auto shadow-xl shadow-stone-900 rounded-xl lg:p-4'>

                        <div className='p-4'>

                            <form action='' method='POST' encType='multipart/form-data'>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='text-sm py-2'>Name</label>
                                        <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300 text-stone-900'
                                        type='text'
                                        name='name'
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm py-2'>
                                        Organization Name
                                        </label>
                                        <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300 text-stone-900'
                                        type='text'
                                        name='phone'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='text-sm py-2'>Email</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300 text-stone-900'
                                        type='email'
                                        name='email'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='text-sm py-2'>Subject</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300 text-stone-900'
                                        type='text'
                                        name='subject'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='text-sm py-2'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 border-gray-300 text-stone-900' 
                                        rows={10}
                                        name='message'
                                    ></textarea>
                                </div>

                                <button className='bg-white text-stone-900 w-full p-4 mt-4'>
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