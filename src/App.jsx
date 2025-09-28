import React from 'react'
import Navbar from './Components/Navbar'
import './index.css'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Components/Footer'

function App() {
  return(
    <div className='w-full oveflow-hidden'>
    <ToastContainer />  
    <Header />
    <About />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
    </div>
  )
}

export default App