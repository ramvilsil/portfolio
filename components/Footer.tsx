

const Footer = () => {
    return (
        <>

            <footer className="flex flex-col justify-center items-center text-white">

                <hr className="text-white w-11/12 mb-8 opacity-50"></hr>

                <div>
                    
                    <a href="https://github.com/ramvilsil" className="p-4 m-4 opacity-50 hover:opacity-100 hover:underline">GitHub</a>
                    <a href="https://www.linkedin.com/in/ramvilsil/" className="p-4 m-4 opacity-50 hover:opacity-100 hover:underline">LinkedIn</a>

                </div>

                <div className="mt-10 flex">
                    <div className="opacity-50">Built with</div>
                    <div>&nbsp;</div>
                    <a href="https://nextjs.org/" className="opacity-50 hover:opacity-100 hover:underline">Next.js</a>
                    <div className="opacity-50">,&nbsp;</div>
                    <a href="https://reactjs.org/" className="opacity-50 hover:opacity-100 hover:underline">TypeScript React</a>
                    <div className="opacity-50">,&nbsp;</div>
                    <a href="https://tailwindcss.com/" className="opacity-50 hover:opacity-100 hover:underline">Tailwind CSS</a>

                    <div className="opacity-50 portrait:hidden">&nbsp;•&nbsp;Deployed with&nbsp;</div>
                    <a href="https://vercel.com/" className="opacity-50 hover:opacity-100 hover:underline portrait:hidden">Vercel</a>

                </div>

                <div className="mt-4 flex">
                    <div className="opacity-50 landscape:hidden">Deployed with&nbsp;</div>
                        <a href="https://vercel.com/" className="opacity-50 hover:opacity-100 hover:underline landscape:hidden">Vercel</a>
                </div>

            </footer>
        
        </>
    )
}


export default Footer