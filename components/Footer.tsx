

const Footer = () => {
    return (

        <>

            {/* 1 Column Footer */}
            <footer className="flex flex-col justify-center items-center text-white font-light">

                {/* Row 1 - Horizontal Rule */}
                <hr className="w-11/12 mb-8 opacity-50"></hr>

                {/* Row 2 - Social Links */}
                <div>

                    <a href="https://github.com/ramvilsil" className="m-8 opacity-50 hover:opacity-100 hover:underline">GitHub</a>
                    <a href="https://www.linkedin.com/in/ramvilsil/" className="m-8 opacity-50 hover:opacity-100 hover:underline">LinkedIn</a>
                    <a href="https://ramvilsil.github.io/about/resume.pdf" className="m-8 opacity-50 hover:opacity-100 hover:underline">Resume</a>

                </div>

                {/* Row 3 - Tech Links */}
                <div className="mt-14 flex">

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

                {/* For portrait screens - Row 4 - Tech Links 2 */}
                <div className="mt-4 flex">

                    <div className="opacity-50 landscape:hidden">Deployed with&nbsp;</div>
                    <a href="https://vercel.com/" className="opacity-50 hover:opacity-100 hover:underline landscape:hidden">Vercel</a>

                </div>

            </footer>

        </>

    )

}


export default Footer