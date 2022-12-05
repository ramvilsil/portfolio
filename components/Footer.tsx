

const Footer = () => {
    return (
        <>

            <footer className="flex flex-col justify-center items-center text-white">

                <hr className="text-white w-11/12 mb-8 opacity-50"></hr>

                <div>
                    
                    <a href="https://github.com/ramvilsil" className="p-4 m-4 opacity-50 hover:opacity-100 hover:underline">GitHub</a>
                    <a href="https://www.linkedin.com/in/ramvilsil/" className="p-4 m-4 opacity-50 hover:opacity-100 hover:underline">LinkedIn</a>

                </div>

                <div className="mt-8 flex portrait:text-sm">
                    <div className="opacity-50">Built with</div>
                    <div>&nbsp;</div>
                    <a href="https://nextjs.org/" className="opacity-50 hover:opacity-100 hover:underline">Next.js</a>
                    <div className="opacity-50">,&nbsp;</div>
                    <a href="https://reactjs.org/" className="opacity-50 hover:opacity-100 hover:underline">TypeScript React</a>

                    <div className="opacity-50">&nbsp;•&nbsp;Deployed with&nbsp;</div>
                    <a href="https://vercel.com/" className="opacity-50 hover:opacity-100 hover:underline">Vercel</a>

                </div>

            </footer>
        
        </>
    )
}


export default Footer