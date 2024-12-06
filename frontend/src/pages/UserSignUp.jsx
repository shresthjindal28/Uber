import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
   
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserDataContext)
  
  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }
    
    const response = await axios.post(`http://localhost:4000/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
    setfirstName('')
    setlastName('')
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
          alt=""
        />

        <form action="" onSubmit={(e) => {
            submitHandler(e)
        }}>
          <h3 className="text-xl font-medium mb-4">What's your name</h3>
          <div className="flex gap-5 ">
            <input
              required
              className="bg-[#eeeeee] mb-7 w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              placeholder="firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] mb-7 w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              placeholder="lastName"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
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
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have a Account?{" "}
          <Link to="/login" className="text-blue-600">
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

export default UserSignUp
