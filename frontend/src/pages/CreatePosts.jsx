import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CreatePosts = () => {
    return (
    <div>
    <Navbar />
    <div className='flex flex-col gap-2 mt-6'>
        <h1 className='font-bold  text-left text-2xl'>Create a Post</h1>
        <input placeholder='Enter Post Title' type='text' className='py-1 outline-none'></input>
        <input type='file' className='mt-2 mb-4'></input>
        <textarea cols={30} rows={15} placeholder='Enter post description'/>
        <button className='bg-black text-white py-3 mt-4 '>Create</button>
    </div>
    <Footer />
  </div>
  )
}

export default CreatePosts