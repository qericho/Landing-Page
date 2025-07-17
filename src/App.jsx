import Hero from "./components/Hero"
import LogoBar from "./components/LogoBar"
import Navbar from "./components/Navbar"
import Features from "./components/Features"

const App = () => {
  return (
    <div className="container mx-auto px-3 md:px-0">
      <Navbar/>
      <Hero/>
      <LogoBar/>
      <Features/>
    </div>
  )
}

export default App