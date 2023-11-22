import React from 'react'

import heroBg from '../../assets/images/about_img2.jpg'
import check from '../../assets/images/check.png'

const Second_pane = () => {
  return (
    <div className='lg:px-40 lg:pt-20 p-5'>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

  <div class="bg-gray-200 p-4">
   
           <div>
             <h2 class="text-2xl  md:text-3xl md:text-2xl  lg:text-2xl font-semibold   font-Poppins  text-dark">Our Mission </h2>
              <p> Helping organizations and individuals get value for money spent on services
             rendered to them by artisan(s) and adequately compensating skilled person(s)
              for their craft(s) and time deployed in doing quality job within 24hours</p>
              </div>

              <div className='pt-5'>
             <h2 class="text-2xl  md:text-3xl md:text-2xl  lg:text-2xl font-semibold   font-Poppins  text-dark">Our Vision </h2>
              <p> To be the number one Online Freelancers Marketplace in Africa, by helping people get value for their money, time and crafts</p>
              </div>
      
 
             <div className='pt-10'>
              <h2 class="text-2xl  md:text-3xl md:text-2xl  lg:text-2xl font-semibold   font-Poppins  text-dark">What We Offer </h2>
             </div>



              <div class="flex pt-4 gap-3">

                 <div class="flex-none ...">
                    <img src={check}  className='w-8'/>
                  </div>

                  <div class="flex-1 w-64 ">
                    <h4 className=''> Only 15% commission charge </h4>
                  </div>
              </div>

              
              <div class="flex pt-2 gap-3">

                 <div class="flex-none ...">
                    <img src={check}  className='w-8'/>
                  </div>

                  <div class="flex-1 w-64 ">
                    <h4 className=''>Automated SMS alert to inform Freelancers on when their services are needed </h4>
                  </div>
              </div>


              <div class="flex pt-2 gap-3">

                  <div class="flex-none ...">
                    <img src={check}  className='w-8'/>
                  </div>

                  <div class="flex-1 w-64">
                    <h4 className=''>Opportunity to inspect offer before accepting to avoid being shortchanged</h4>
                  </div>
             </div>

             <div class="flex pt-2 gap-3">

              <div class="flex-none ...">
                <img src={check}  className='w-8'/>
              </div>

              <div class="flex-1 w-64 ">
                <h4 className=''>Instant crediting of Freelancers Wallet  upon completion of job and confirmation by Client</h4>
              </div>
           </div>


           <div class="flex pt-2 gap-3">

            <div class="flex-none ...">
              <img src={check}  className='w-8'/>
            </div>

            <div class="flex-1 w-64 ">
              <h4 className=''>Seamless withdrawal to local account, anytime</h4>
            </div>
         </div>

































  </div>

 
  <div class="bg-blue-200 p-4"
  
  style={{ 
    
    backgroundImage: `-webkit-linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${heroBg})`,
    
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '80px',
    
    height: '70vh',
  

}}
  >

   
  </div>
</div>
</div>

  )
}

export default Second_pane