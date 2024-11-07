import { Route, Router,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './components/Login'
import Register from './components/Register'
import PostDetails from './pages/postDetails'
import CreatePosts from './pages/CreatePosts'


function App() {

  return (
    <>
     <div className="flex flex-col min-w-full">

  <Routes>
  <Route exact index element={<Home />} />
  <Route exact path='/login' element={<Login />} />
  <Route exact path='/register' element={<Register />} />
  <Route exact path='/posts/post/:id' element={<PostDetails />} />
  <Route exact path='/write' element={<CreatePosts />} />
  </Routes>
  
     </div>
    </>
  )
}

export default App
