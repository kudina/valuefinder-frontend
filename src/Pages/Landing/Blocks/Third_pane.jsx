import React from 'react'
import Layout from '../../../component/Layout'
import  heroBg from '../../../assets/images/heroBg.png'

const Third_pane = () => {
  return (
    <Layout >
      <div className='lg:px-40 lg:pt-20'>
      <div className="bg-image bg-cover bg-center " 
      
     
      style={{ 
    
        backgroundImage: `-webkit-linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBg})`,
        
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingBottom: '80px',
        paddingTop:'60px',
        height: '70vh',
        backgroundAttachment:'fixed',
    
    }}>
       <div class="flex flex-col md:flex-row md:space-x-4 p-4">
  <div class="w-full md:w-2/5 bg-blue-300 p-4 text-center md:text-left">
    <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-Poppins pt-4 md:pt-0">
      Find Your Desired Skill, just a few clicks away
    </h1>
    <p class="text-white pt-4">
      Work with the largest network of independent professionals and get things done - from quick turnarounds to big transformations
    </p>
  </div>
  <div class="w-3/10 bg-green-300 p-4"></div>
  <div class="w-3/10 bg-red-300 p-4"></div>
</div>



    </div>

    <div class="mt-[-3rem] w-full flex justify-center">
  <div class="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-3  gap-4 mx-4 md:mx-0">

    <div class="bg-gray-200 bg-green  shadow-lg p-5 mb-4 md:mb-0 rounded-lg border-4 flex flex-col justify-center text-center">
      <h4 class="text-white text-2xl md:text-3xl font-semibold">Post a job request & wait</h4>
      <p class="text-white text-sm md:text-base">Skill Market Place</p>
    </div>


    <div class="bg-gray-200 bg-green shadow-lg p-5 mb-4 md:mb-0 rounded-lg border-4 flex flex-col justify-center text-center">
      <h4 class="text-white text-2xl md:text-3xl font-semibold">Receive offers from talents</h4>
      <p class="text-white text-sm md:text-base">Skill Market Place</p>
    </div>

    <div class="bg-gray-200 bg-green shadow-lg p-5 rounded-lg border-4 flex flex-col justify-center text-center">
      <h4 class="text-white text-2xl md:text-3xl font-semibold">Interview & Engage</h4>
      <p class="text-white text-sm md:text-base">Skill Market Place</p>
    </div>

    
  </div>
</div>





         </div>
        </Layout>
  )
}

export default Third_pane