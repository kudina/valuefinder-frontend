import React from 'react'
import team1 from '../../assets/images/team1.png'

import team3 from '../../assets/images/team3.png'

import team4 from '../../assets/images/team4.png'
import team5 from '../../assets/images/team5.png'
import team6 from '../../assets/images/team6.png'
import team7 from '../../assets/images/team7.png'
import team8 from '../../assets/images/team8.png'
import team9 from '../../assets/images/team9.png'

const Third_pane = () => {
  return (
    <div className='lg:px-40 lg:pt-20 p-5'>
        <div>
         
    <h2 class="text-4xl  md:text-5xl text-center lg:text-5xl font-semibold   font-Poppins  text-dark ">Meet the Team </h2>
        </div>
        

       {/*******first row***********/}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-9 ">
       
      <div class="bg-white p-4  text-center rounded-lg shadow-md">
        <img src= {team1} className='px-10'/>
            <p class="font-bold text-lg mb-2 pt-0">Alhaja Nafisat Anifowose</p>
            <p>Head of  Board of Directors</p>
        </div>



      
        <div class="bg-white p-4  text-center rounded-lg shadow-md">
        <img src= {team3} className='px-10'/>
            <p class="font-bold text-lg mb-2 pt-0">Nathan Yann </p>
            <p>Head of Strategies</p>
        </div>

       
        <div class="bg-white p-4  text-center rounded-lg shadow-md">
        <img src= {team4} className='px-10'/>
            <p class="font-bold text-lg mb-2 pt-0">Christine Williams</p>
            <p>Head of Marketing</p>
        </div>

       
        <div class="bg-white p-4  text-center rounded-lg shadow-md">
        <img src= {team5} className='px-10'/>
            <p class="font-bold text-lg mb-2 pt-0">Mr. Azoji Clement </p>
            <p>Head of Logistic</p>
        </div>
    </div>


   {/*******seconds row***********/}
   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-9 ">
       
       <div class="bg-white p-4  text-center rounded-lg shadow-md">
         <img src= {team6} className='px-10'/>
             <p class="font-bold text-lg mb-2 pt-0">Mr. Ariku Olujuwon</p>
             <p>Head of Operations</p>
         </div>
 
 
 
       
         <div class="bg-white p-4  text-center rounded-lg shadow-md">
         <img src= {team7} className='px-10'/>
             <p class="font-bold text-lg mb-2 pt-0">Uhembe Nelson</p>
             <p>Fullstack Developer</p>
         </div>
 
        
         <div class="bg-white p-4  text-center rounded-lg shadow-md">
         <img src= {team8} className='px-10'/>
             <p class="font-bold text-lg mb-2 pt-0">Ogbonna Michael </p>
             <p>UI/UX Designer & Frontend Developer</p>
         </div>
 
        
         <div class="bg-white p-4  text-center rounded-lg shadow-md">
         <img src= {team9} className='px-10'/>
             <p class="font-bold text-lg mb-2 pt-0">Mr. Kelvin Davies </p>
             <p>Head of Accounts</p>
         </div>
     </div>








</div>
  )
}

export default Third_pane