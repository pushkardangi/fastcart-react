
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-blue-100 flex justify-between items-center p-4">

      <div className="text-teal-500 font-semibold text-2xl">
        <a href="/">FastCart</a>
      </div>

      <div className="w-full hidden md:flex items-center md:w-2/3 lg:w-2/4 xl:w-2/5">
        <input
          type="text"
          className="border border-gray-300 rounded-l-lg p-2 w-full"
          placeholder="I'm searching for..."
        />
        <div className="bg-yellow-300 hover:bg-yellow-400 border-y border-yellow-400 p-2 rounded-r-lg">
          Search
        </div>
      </div>

      <div className="bg-teal-500 hover:bg-teal-600 font-semibold px-4 py-1 text-lg text-white rounded">
        <a href="/">Cart - 09</a>
      </div>

    </div>
  )
}

export default Navbar
