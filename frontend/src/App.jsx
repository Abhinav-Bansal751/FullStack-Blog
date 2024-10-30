import { Route, Router,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'


function App() {

  return (
    <>
     <div className="flex flex-col min-w-full">

  <Navbar />
  <Routes>
  <Route exact index element={<Home />} />
  </Routes>
  <Footer />
     </div>
    </>
  )
}

export default App
