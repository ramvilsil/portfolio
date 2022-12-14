import Head from 'next/head'
import IndexNavbar from "../components/IndexNavbar"
import Intro from "../components/Intro"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


export default function Home() {
  return (

    <>

      <Head>

        <title>Ramon | Web Developer</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />

      </Head>

      <div className="flex justify-center">

        {/* Index Navbar */}
        <div className="fixed w-full z-50 top-0 portrait:hidden">

          <IndexNavbar />

        </div>

        {/* Main Container */}
        <div className="h-fit w-6/12 portrait:w-screen flex items-center flex-col">


          {/* Intro container with custom CSS class */}
          <div className="intro">

            <Intro />

          </div>

          {/* Mobile Index Navbar Container */}
          <div className="sticky top-0 portrait:top-2 portrait:w-11/12 w-full landscape:hidden">

            <IndexNavbar />

          </div>

          <div id="projects" className="mt-64 mb-12 w-11/12">

            <Projects />

          </div>

          <div id="about" className="mt-12 mb-12 w-11/12">

            <About />

          </div>

          <div id="contact" className="mt-12 mb-12 w-11/12">

            <Contact />

          </div>

          <div className="mb-16 w-11/12">

            <Footer />

          </div>

        </div>

      </div>

    </>

  )

}
