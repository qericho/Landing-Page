import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="container mx-auto px-3 md:px-0">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App