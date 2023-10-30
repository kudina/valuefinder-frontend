import React from 'react'
import '../../../index.css';

import { Link } from 'react-router-dom';
import { GrPersonalComputer} from "react-icons/Gr";
import { BsArrowRight} from "react-icons/Bs";
import intro_img from '../../../assets/images/bg.png'



const First_Pane = () => {
  return (
    <div >
        <div className='bg-green '>
            <div className=' lg:px-20 lg:pt-20'>
            <div class="flex flex-wrap">
            <div class="w-full md:w-1/2  pt-5">
                <div class="p-4">
                  <h2 class="text-4xl  md:text-9xl lg:text-7xl font-semibold   font-Poppins  text-white">Find the Best Job </h2>
                  <h2 className='text-4xl  md:text-2xl lg:text-7xl  font-Poppins  text-white'>Offers</h2>
                  <p className='text-[20px] pt-6 text-white font-GeorgiaRegular'>
                  We can connect you with our extensive network of companies or <br/>
            freelancers who are looking for people like you
                  </p>
                </div>


                <div class="flex flex-col md:flex-row pt-10 lg:px-5 gap-5 mx-6 md:mx-0 mb-20">
                  <div class="w-full md:w-1/2 ">

                  <div className='py-3 px-5 border border-white rounded-[5px] bg-white hover:text-white ' >
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

                  </div>








                  <div class="w-full md:w-1/2">
                  <div className='py-3 px-5 border border-white rounded-[5px]  hover:text-white' >
              <div className='p-2'>
              <GrPersonalComputer className=' text-[25px]'/>
              </div>
  
              <div className='text-white mt-2 text-[18px] font-GeorgiaRegular font-semibold '>
                As a Company
              </div>
              <div className='mt-3 text-[18px] mb-2 text-white'>
                Find the best freelancers with
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
                  
         





            </div>

            <div class="w-full  md:w-1/2 px-4 sm:mt-9 ">
                <div class="bt-0 flex justify-center">
                  <img src={intro_img} alt="Your Image" class="w-[80%] sm:mt-4 " />
                </div>
           </div>


              </div>
            </div>
        </div>
    </div>
  )
}

export default First_Pane