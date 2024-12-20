import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (

    <>
<div className='flex  flex-col md:flex-row  justify-between items-center '>
<h1 className='font-bold text-lg md:text-xl mb-4 md:mb-0'><Link to='/'>Blog Market</Link></h1>
<div className='flex justify-center items-center'> 
<h3 className="hover:underline hover:text-blue-500">
            <Link to="/login">Login</Link>
</h3>
</div>
</div>

    <div className=' w-full  h-[70vh] flex justify-center items-center '>

    <div className=' flex flex-col justify-center items-center w-[80%] space-y-4 '>

        <h1 className='font-semibold text-xl'>Create an Account</h1>
        <input  className =' w-1/3 px-4 mt-2 p-2 border-black border-2' type='text' placeholder='Enter Your Username'></input>
        <input  className ='w-1/3 px-4 mt-2 p-2 border-black border-2' type='text' placeholder='Enter Your Email'></input>
        <input  className ='w-1/3 px-4 mt-2 p-2 border-black border-2' type='text' placeholder='Enter Your Password'></input>
        <button className='w-1/3 text-white bg-black px-2 py-4 mt-3 rounded-md'>Register</button>

        <div className='flex justify-center items-center space-x-3'>
            <p className='text-gray-600'>Already have an account?</p>
            <p className='underline hover:text-blue-500 cursor-pointer'><Link to='/login'>Login</Link></p>
        </div>
    </div>
</div>
    </>
  )
}

export default Register