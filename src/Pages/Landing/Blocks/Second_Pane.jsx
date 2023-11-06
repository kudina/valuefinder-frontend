import React from 'react'
import Layout from '../../../component/Layout'
import artisan from '../../../assets/images/artisan.png'
import writing from '../../../assets/images/writing.png'
import design from '../../../assets/images/design.png'
import music from '../../../assets/images/music.png'
import beauty from '../../../assets/images/beauty.png'
import logistics from '../../../assets/images/logistics.png'
import professionalService from '../../../assets/images/professionalService.png'









const Second_Pane = () => {
  return (
    <Layout >
      <div className='lg:px-40 lg:pt-20'>
      <h1 className='text-4xl font-bold text-black sm:p-0 p-8'>Browse Skill by Category</h1>

      {/*First row***/}

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 
      sm:p-0 lg:pt-12 ">

    

      <div >
      <div class="bg-white shadow-lg p-5 mb-9 border-10 flex flex-col items-center justify-center h-44">
         
         <img src={artisan} className='w-[30%]'/> 
         <h2 class="text-1xl font-bold">Programming & Tech</h2>
        

      </div>
       </div>




       <div  className='sm:mt-16'>
       <div class="bg-white shadow-lg p-5 mb-9 border-10 flex flex-col items-center justify-center h-44">
         
         <img src={writing} className='w-[30%]'/> 
         <h2 class="text-1xl font-bold">Writing & Translation</h2>
      

      </div>
      </div>


      <div >
      <div class="bg-white shadow-lg p-5 mb-9 border-10 flex flex-col items-center justify-center h-44">
         
         <img src={design}  className='w-[30%]'/> 
         <h2 class="text-1xl font-bold">Graphics & Design</h2>
        

      </div>
      </div>



      <div >
      <div class="bg-white shadow-lg p-5 mb-9 border-10 flex flex-col items-center justify-center h-44">
         
         <img src={music}  className='w-[30%]'/> 
         <h2 class="text-1xl font-bold">Music & Entertainment</h2>
       

      </div>
      </div>



      <div >
       <div class="bg-white shadow-lg p-5 mb-9 border-10 flex flex-col items-center justify-center h-44">
         
         <img src={beauty}  className='w-[30%]'/> 
         <h2 class="text-1xl font-bold">Beauty & Lifestyle</h2>
        

      </div>
      </div>

 </div>





 
      {/*Second  row***/}
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 
      sm:p-0 lg:pt-2 ">

    

      <div >
      <div class="bg-white shadow-lg p-5 mb-9 border-10 flex flex-col items-center justify-center h-44">
         
         <img src={logistics} className='w-[30%]'/> 
         <h2 class="text-1xl font-bold">Transport & Logistics</h2>
        

      </div>
       </div>




       <div >
       <div class="bg-white shadow-lg p-5 mb-9 border-10 flex flex-col items-center justify-center h-44">
         
         <img src={professionalService} className='w-[30%]'/> 
         <h2 class="text-1xl font-bold">Professional Advice</h2>
      

      </div>
      </div>


      <div >
      <div class="bg-white shadow-lg p-5 mb-9 border-10 flex flex-col items-center justify-center h-44">
         
         <img src={artisan}  className='w-[30%]'/> 
         <h2 class="text-1xl font-bold">Artisans</h2>
        

      </div>
      </div>



      <div >
      <div class="bg-white shadow-lg p-5 mb-9 border-10 flex flex-col items-center justify-center h-44">
         
         <img src={artisan}  className='w-[30%]'/> 
         <h2 class="text-1xl font-bold">General Service</h2>
       

      </div>
      </div>



      <div >
       <div class="bg-white shadow-lg p-5 mb-9 border-10 flex flex-col items-center justify-center h-44">
         
         <img src={logistics}  className='w-[30%]'/> 
         <h2 class="text-1xl font-bold">Food & Catering</h2>
        

      </div>
      </div>

 </div>







      </div>
      

        
        </Layout>
  )
}

export default Second_Pane