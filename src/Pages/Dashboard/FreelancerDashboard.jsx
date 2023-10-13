import React,{useEffect, useState} from 'react'
import Header from '../../component/Header'
import Filter from '../../component/Filter'
import Searchbar from '../../component/Searchbar'
import Jobpost from '../../component/Post/Jobpost'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetCurrentUserQuery } from '../../features/api/apiSlice'

const FreelancerDashboard = () => {
 
  return (
    <div className='bg-newbg'>
      <Header/>
      <div className=' mt-5 ml-2s mr-2 md:ml-[150px] md:mr-[150px] md:flex ' >
          <div className='md:w-[25%]  p-3 w-full'>
            <Filter/>
          </div>

          <div className='md:w-[75%] p-3 w-full'>
            <Searchbar/>
           <Jobpost/>
            
          </div>
      </div>
    </div>
  )
}

export default FreelancerDashboard