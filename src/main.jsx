import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header/header.jsx'
import Contact from './Components/Contact/contact.jsx'
import Home from './Components/Home/home.jsx'
import About from './Components/About/about.jsx'
import Services from './Components/Services/services.jsx'
import Project from './Components/Project/project.jsx'
import Portfolio from './Components/Portfolio/portfolio.jsx'
import Skills from './Components/Skills/skills.jsx'
import Review from './Components/Review/review.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Portfolio/>
    <Skills/>
    <Project/>
    <Review/>
    <Contact/>
  </StrictMode>,
)
