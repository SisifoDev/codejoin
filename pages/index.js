import Head from 'next/head'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <title>CodeJoin App</title>
        <meta name="description" content="My React App designed in Next Js" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap" rel="stylesheet" />
      </Head>

      <header>
        <NavBar />
        <Hero />
      </header>

      <main >
        <Services />
      </main>

      <Footer />
    </div>
  )
}
