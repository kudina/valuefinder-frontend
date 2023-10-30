import React from 'react'
import Layout from '../../../component/Layout'

import  heroBg from '../../../assets/images/hero3.png'

const Fourth_pane = () => {
  return (
    <Layout >
            <div className='lg:px-40 lg:pt-20'>
     <div class="bg-blue-300 flex gap-3 flex-col md:flex-row">
          <div class="w-full md:w-2/3 p-4  " style={{backgroundColor:'#e5e5e5'}}>

            
            <h1 className='text-4xl px-7 md:text-4xl lg:text-4xl font-semibold   font-Poppins'>A whole world of freelance talent at your fingertips</h1>
            
             <div className='pt-7 p-6'>
             <h3 className='text-2xl px-1 md:text-2xl lg:text-2xl font-semibold font-Poppins '>Utmost Proximity Consideration</h3>
            <p>Check any pro's work samples, client reviews, and Identity verification</p>
             </div>


             <div className='pt-2 p-6'>
             <h3 className='text-2xl px-1 md:text-2xl lg:text-2xl font-semibold font-Poppins '>Timely Remuneration</h3>
            <p>Check any pro's work samples, client reviews, and Identity verification</p>
             </div>


             <div className='pt-2 p-6'>
             <h3 className='text-2xl px-1 md:text-2xl lg:text-2xl font-semibold font-Poppins '>No Cost until you hire</h3>
            <p>Check any pro's work samples, client reviews, and Identity verification</p>
             </div>


             <div className='pt-2 p-6'>
             <h3 className='text-2xl px-1 md:text-2xl lg:text-2xl font-semibold font-Poppins '>Safe and Secure</h3>
            <p>Check any pro's work samples, client reviews, and Identity verification</p>
             </div>




            </div>

          
          <div class="w-full md:w-1/3 p-4 w-32 h-32 bg-blue-300 rounded-tr-lg"
          
          style={{ 
    
            backgroundImage: ` url(${heroBg})`,
            
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            paddingBottom: '80px',
            paddingTop:'60px',
            height: '70vh',
          
        
        }}
          
          
          
          
          >
            
          </div>
      </div>
      </div>
     
    </Layout>
  )
}

export default Fourth_pane