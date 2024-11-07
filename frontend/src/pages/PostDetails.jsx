import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-between py-4'>
        <h1 className='text-2xl font-semibold '>
          10 uses of artifical intelligence in day to day life
          </h1>
      <div className='flex   gap-2'>
        <p className='cursor-pointer hover:text-blue-500'><BiEdit/></p>
        <p className='cursor-pointer hover:text-blue-500'><MdDelete/></p>
      </div>
    </div>
      <div className=' flex gap-2 justify-end mb-4'>
        {/* <p>11/07/24</p> */}
        <p>{new Date(Date.now()).toLocaleString()}</p>
      </div>

      <div className=' flex justify-start max-w-8xl mx-auto my-8   '>
        <img src='https://www.bleepstatic.com/content/hl-images/2024/08/12/thumb/170x170_north-korean-hackers.jpg'
       className="w-48 h-64 object-contain  object-left-bottom  rounded-lg mr-6"></img>
      <p className='flex justify-center items-center mx-auto mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur obcaecati doloremque quaerat recusandae, quod, id in ut explicabo qui pariatur ratione labore? Voluptatum, vitae alias tempore repellendus accusamus nesciunt libero!
      Accusamus nihil doloremque perspiciatis at cupiditate, itaque quo, odio minima praesentium dolores eveniet neque delectus! Vitae maxime illum suscipit re
      Accusamus nihil doloremque perspiciatis at cupiditate, itaque quo, odio minima praesentium dolores eveniet neque delectus! Vitae maxime illum suscipit re
      Accusamus nihil doloremque perspiciatis at cupiditate, itaque quo, odio mi
      </p>
      
      </div>
      
      <Footer />

    </div>
  )
}

export default PostDetails