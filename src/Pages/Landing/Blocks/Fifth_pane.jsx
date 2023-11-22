import React from 'react'
import Layout from '../../../component/Layout'
import manBg from '../../../assets/images/hero4.png'

const Fifth_pane = () => {
  return (
      <Layout >
        <div className='lg:px-40 lg:pt-10'>
        <div class="flex flex-wrap gap-0">
  <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-0">
         <div
         
         style={{ 
    
            backgroundImage: ` url(${manBg})`,
            
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            paddingBottom: '80px',
            paddingTop:'60px',
            height: '70vh',
          
        
        }}
         >

         </div>
  </div>
  <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-0">
    <div style={{backgroundColor:'#FFE030',padding:'30px',height: '70vh',}}>
       <h6 className='text-white'>FOR TALENT</h6>
       <h1 className='text-4xl  md:text-4xl lg:text-4xl font-semibold pt-9 text-white font-Poppins'>Find Great Work</h1>
       <p className='text-white pt-7'>Meet clients you're excited to work with and take your career  or business to new heights</p>


       <div class="flex flex-wrap pt-9 text-white ">
  <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 pr-14">
    <p>Find opportunities for every stage of your freelance career</p>
  </div>
  <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 pr-14">
    <p>Control when, where and how you work</p>
  </div>
</div>


<button class="mt-20  hover:bg-blue-600 text-black font-bold py-2 px-4 rounded-full " style={{background:'#ffffff'}}>
  Find Opportunities
</button>
          
    </div>
  </div>
</div>
</div>
    </Layout>
  )
}

export default Fifth_pane