import React from 'react'

const HomePosts = () => {
  return (
    <div className='w-[80%]  bg-slate-500'>
        <div className=' flex '>

            <div className='flex flex-col w-[90%]'>
            <h1 className='text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, nulla.  Heading here</h1>
            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis nisi fuga enim neque reiciendis necessitatibus, totam dignissimos ad dolor voluptatum.</p>
    </div>

            <div className='bg-red-400'>
            <img  className='w-1/2 h-5.5 ml-2 ' src='https://img.freepik.com/free-vector//data-security-technology-background-vector-blue-tone_53876-112201.jpg?t=st=1730310944~exp=1730314544~hmac=90b0aba220e37c84e2916da38b7debc46b41298973f9db8a27597cf636a79b11&w=1060'></img>
            </div>

        
    </div>
    </div>
  )
}

export default HomePosts