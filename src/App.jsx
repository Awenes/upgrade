import './App.css'
import Chart from './components/Chart/Chart'
import Hero from './components/Hero/Hero'
import Featured from './components/Featured/Featured'
import Value from './components/Value/Value'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'

function App() {

  return (
    <div className='app-wrap'>
      <Hero />
      <Chart />
      <Featured />
      <Value />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
