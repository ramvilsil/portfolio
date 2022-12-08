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
      
      
      {/* later to implement grid for left, main, right containers? */}
      <div className="flex justify-center">

        {/* Main Container */}
        <div className="h-fit w-6/12 portrait:w-screen">

          {/* Intro container with custom CSS class */}
          <div className="intro">

              <Intro />

          </div>

          {/* Index Navbar Container */}
          <div className="sticky top-2">

              <IndexNavbar />

          </div>

          <div id="projects" className="mt-32 mb-24">

              <Projects />

          </div>

          <div id="about" className="mt-32 mb-24">

              <About />

          </div>

          <div id="contact" className="mt-32 mb-16">

              <Contact />

          </div>

          <div className="mb-16">

              <Footer />

          </div>

        </div>

      </div>  
      
    </>

  )

}
