import './App.css'

//components

import  {Navbar}  from './components/navbar/navbar'
import Start from './components/Start/start'
import AboutMe from './components/about/about'
import Education from './components/Education/education'
import Line from './components/line/line'
import Skills from './components/skills/skills'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import UpButton from './components/upButton/upButton'


function App() {


  return (
    <>
    <Navbar/>
    <UpButton/>
    <div className="contenido">
      <Start/>
      <AboutMe/>
      <Line/>
      <Education/>
      <Line/>
      <Skills/>
      <Line/>
      <Portfolio/>
      <Line/>
      <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default App
