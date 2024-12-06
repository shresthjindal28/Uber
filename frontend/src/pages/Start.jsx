import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='h-screen'>
      <div className=" bg-cover bg-center bg-[url(https://img.freepik.com/premium-photo/traffic-light-that-has-word-stop-it_662214-516515.jpg?w=360)] pt-8 flex justify-between flex-col w-full h-[75vh]">
        <img className='w-24 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      </div>
        <div className="bg-white pb-7 py-5 px-5 ">
            <h1 className='text-2xl font-bold '>Get Started with Uber</h1>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-8' >Continue</Link>
        </div>
    </div>
  )
}

export default Start