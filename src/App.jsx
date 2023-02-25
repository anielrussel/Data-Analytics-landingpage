import React from 'react'
import Analytics from './components/Analytics'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Subscription from './components/Subscription'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Subscription />
      <Footer />
    </div>
  )
}

export default App
