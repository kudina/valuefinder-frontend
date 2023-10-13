import React from 'react'

const Searchbar = () => {
  return (
    <div 
    className='rounded-[5px] border border-bcolor w-full p-3 bg-white flex gap-1'>
        <input 
                    //  onChange={(e) => {
                    //     setEmail(e.target.value);
                    //     setFeedBack("");
                    //   }}
                     placeholder="Search by, Country, Location, Salary, availabiilty or amy Job keyword... "
                     type="text"
                     className=" text-graytext text-[14px] w-full p-4 border mr-2 border-bcolor rounded-[5px]  h-[50px] focus:outline-none focus:border-gray-400 focus:ring-0"
                    />

                    <button className='md:text-[17px] text-[14px] text-white border-bcolor rounded-[5px]  px-4  w-[150px] h-[50px] bg-gradient-to-r from-orange to-green  text-center justify-between justify-items-center ' >
                        Find Jobs
                    </button>
    </div>
  )
}

export default Searchbar