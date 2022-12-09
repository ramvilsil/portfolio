

const Contact = () => {
    return (
        <>
            {/* Contact Container */}
            <div className="bg-gradient-to-br from-stone-700 via-stone-800 to-stone-700 text-white rounded-3xl p-8">

                {/* Title */}
                <h1 className="w-max text-3xl m-4 font-semibold">Contact</h1>

                <div className="flex justify-evenly items-center">

                    <div className='col-span-3 w-full h-auto rounded-xl lg:p-4'>

                        <div className='p-4'>

                            <form action='' method='POST' encType='multipart/form-data'>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='text-sm py-2'>Name</label>
                                        <input
                                        className='border-2 rounded-lg p-3 flextext-stone-900'
                                        type='text'
                                        name='name'
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm py-2'>
                                        Organization Name
                                        </label>
                                        <input
                                        className='border-2 rounded-lg p-3 flex text-stone-900'
                                        type='text'
                                        name='phone'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='text-sm py-2'>Email</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex text-stone-900'
                                        type='email'
                                        name='email'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='text-sm py-2'>Subject</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex text-stone-900'
                                        type='text'
                                        name='subject'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='text-sm py-2'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 text-stone-900' 
                                        rows={10}
                                        name='message'
                                    ></textarea>
                                </div>

                                <button className='bg-gradient-to-br from-black via-stone-900 to-stone-900 w-full p-4 mt-4 rounded-2xl hover:opacity-60 '>
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