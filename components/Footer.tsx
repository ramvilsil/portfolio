


const Footer = () => {
    return (
        <>
            <footer className="flex flex-col justify-center items-center text-white">

                <div>
                    <a href="https://github.com/ramvilsil" className="p-4 m-4 hover:underline">GitHub</a>
                    <a href="https://www.linkedin.com/in/ramvilsil/" className="p-4 m-4 hover:underline">LinkedIn</a>

                </div>

                <div className="mt-16 mb-16 flex portrait:text-sm">
                    <div className="">Built with</div>
                    <div>&nbsp;</div>
                    <a href="https://nextjs.org/" className=" hover:underline">Next.js</a>
                    <div>,&nbsp;</div>
                    <a href="https://reactjs.org/" className=" hover:underline">TypeScript React</a>

                    <div className="">&nbsp;•&nbsp;Deployed with&nbsp;</div>
                    <a href="https://vercel.com/" className=" hover:underline">Vercel</a>

                </div>
                


            </footer>
        
        </>
    )
}


export default Footer