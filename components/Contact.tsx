

const Contact = () => {
    return (

        <>

            {/* Contact Section Container */}
            <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-700 text-white rounded-3xl p-8 portrait:p-4 shadow-lg shadow-black">

                {/* Contact Title */}
                <h1 className="w-max text-3xl m-4 font-semibold portrait:text-2xl">Contact<div className="text-lg font-normal portrait:hidden">Let's get in touch.</div></h1>

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
                                        className='border-2 rounded-lg p-3 flex text-black'
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

                                <button className='bg-gradient-to-br from-black via-neutral-900 to-neutral-900 w-full p-4 mt-4 rounded-2xl hover:opacity-60 flex justify-center'>Send Message &nbsp; <svg xmlns="http://www.w3.org/2000/svg" height={20} fill='white' viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg></button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}


export default Contact