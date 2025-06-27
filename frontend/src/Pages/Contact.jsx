import React from 'react'
import Navbar from '../Components/Navbar'

import axios from 'axios'
import { useState } from 'react'

const Home = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handelSubmit = (e) => {
    e.preventDefault()

    const result = axios.post("http://localhost:8082/user/contact", { name, phone, email })
      .then(result => {
        alert(` Thank you ${name}, we'll get back to you soon!`)

        setName("")
        setPhone("")
        setEmail("")

      })
      .catch(error => {
        console.error("Submission error:", error);
        alert(" Something went wrong. Please try again.");
      });




  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-900  flex items-center  justify-center p-2">

        <div className="bg-gray-800  text-white rounded-lg  p-10 max-w-md ">

          <h1 className="text-3xl text-center text-blue-500 font-bold">Contact Us</h1>
          <p className="text-center text-md font-momo">Feel free to reach out for any web development inquiries!</p>

          <form
            onSubmit={handelSubmit}
            className="space-y-6 mt-8">

            <input type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              className="w-full py-3 px-4 text-white border-2 outline-none rounded-lg"
              placeholder="Enter your name"
            ></input>

            <input type="number"
              name="number"
              value={phone}
              onChange={(e) => setPhone(e.target.phone)}
              className="w-full py-3 px-4 text-white border-2 outline-none rounded-lg"
              placeholder="Enter your phone number "
            ></input>

            <input type="text"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full py-3 px-4 text-white border-2 outline-none rounded-lg"
              placeholder="Enter your email"
            ></input>

            <button type="submit"
              className="w-full py-3 px-4 text-white font-bold outline-none rounded-lg  text-xl font-mono bg-blue-500 hover:bg-blue-700 cursor-pointer transition duration-300 mt-5"
            >Submit</button>



          </form>
        </div>
      </div>


    </>
  )
}

export default Home