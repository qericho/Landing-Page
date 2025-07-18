import Hero from "./components/Hero"
import LogoBar from "./components/LogoBar"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import Metrix from "./components/Metrix"
import Cta from "./components/Cta"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="container mx-auto px-3 md:px-0">
      <Navbar/>
      <Hero/>
      <LogoBar/>
      <Features/>
      <div className="flex xl:flex-col flex-col-reverse">
        <Metrix/>
        <Cta/>
      </div>
      <Testimonials/>
      <Pricing/>
      <Contact/>
    </div>
  )
}

export default App