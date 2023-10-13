import React from 'react'
import MainNav from '../../component/MainNav'
import { GrPersonalComputer} from "react-icons/Gr";
import { BsArrowRight} from "react-icons/Bs";
import Bg from '../../assets/images/bg.png'

import 'reactjs-popup/dist/index.css';
import '../../index.css'
import { Link } from 'react-router-dom';



const Index = () => {


  return (
    <div className='text-white font-Poppins'>
      <div className='bg-green h-screen'>
         <MainNav/>
        <div className='flex justify-between px-[150px]'>

        <div className='mt-[100px] leading-tight w-full' >
         <div className='flex gap-3'>
         <div className='text-[90px] font-Poppins'>Find the </div>
          <div className='text-[90px] font-Poppins font-semibold'>Best</div><br/>
         </div>

          <div className='flex gap-3'>
          <div className='text-[90px] font-Poppins font-semibold '>Job</div>
          <div className='text-[90px] font-Poppins '> Offers </div>
          </div>
          <div className='mt-5'>
            <span className='text-[20px] font-GeorgiaRegular'>We can connect you with our extensive network of companies or <br/>
            freelancers who are looking for people like you</span>
          </div>

          <div className=' flex gap-10 mt-[50px] '> 
            <div className='py-3 px-5 border border-white rounded-[5px] bg-white hover:text-white' >
              <div className='p-2'>
              <GrPersonalComputer className='text-white text-[25px]'/>
              </div>

              <div className='text-black mt-2 text-[18px] font-GeorgiaRegular font-semibold '>
                As a Freelancers
              </div>
              <div className='mt-3 text-[18px] mb-2 text-greyBlack'>
                Get an opportunity to work <br/>
                with big companies or individuals 
              </div>

              <div className='mt-5 mb-2 w-full justify-end flex '>
                <button  className='bg-green p-1 rounded-full flex gap-5 items-center cursor-pointer'>
                  <div className='ml-3 text-[18px] font-semibold leading-4'>Get Started</div>
                  <div className='p-2 bg-black rounded-full'>
                  <BsArrowRight className='text-white text-[25px]'/>
                  </div>
                </button>
              </div>

            </div>

            <div className='py-3 px-5 border border-white rounded-[5px]  hover:text-white' >
              <div className='p-2'>
              <GrPersonalComputer className=' text-[25px]'/>
              </div>

              <div className='text-white mt-2 text-[18px] font-GeorgiaRegular font-semibold '>
                As a Company
              </div>
              <div className='mt-3 text-[18px] mb-2 text-white'>
                Find the best <br/>freelancers with
                 impressive portfolios
              </div>

              <div className='mt-5 mb-2 w-full justify-end flex '>
                <Link to="/login" className='bg-white p-1 rounded-full flex gap-5 items-center cursor-pointer'>
                  <div  className='ml-3 text-[18px] font-semibold leading-4 text-green'>Get Started</div>
                  <div className='p-2 bg-green rounded-full'>
                  <BsArrowRight className='text-white text-[25px]'/>
                  </div>
                </Link>
              </div>

            </div>


          </div>
         

         </div>


         <div className='  w-[85%] '>
        
          <img src={Bg} className=""  />
         </div>

        </div>
      </div>
     


    </div>
  )
}

export default Index