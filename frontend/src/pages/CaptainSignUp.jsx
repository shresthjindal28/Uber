import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({})
   
  
  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      fullname:{
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />


        <form action="" onSubmit={(e)=>{
            submitHandler()
        }}>
          <h3 className="text-xl font-medium mb-4">What's your name</h3>
          <div className="flex gap-5 ">
            <input
              required
              className="bg-[#eeeeee] mb-7 w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              placeholder="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] mb-7 w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              placeholder="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <h3 className="text-xl font-medium mb-4">What's your email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <h3 className="text-lg font-medium mb-2">Enter Password</h3>


          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have a Account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>

      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
        Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignUp
