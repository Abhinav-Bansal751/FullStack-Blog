import { Route, Router,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './components/Login'
import Register from './components/Register'


function App() {

  return (
    <>
     <div className="flex flex-col min-w-full">

  <Routes>
  <Route exact index element={<Home />} />
  <Route exact path='/login' element={<Login />} />
  <Route exact path='/register' element={<Register />} />
  </Routes>
  <Footer />
     </div>
    </>
  )
}

export default App
