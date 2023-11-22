import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className=' lg:pt-20 p-5 '>

      <div className="pb-8" style={{backgroundColor:'#2D3F01', height:'auto', borderRadius:'5px'}}>
            
      <div class="uk-grid" data-uk-grid>

  <div class="uk-width-1-3@s ">

            <div class="vertical-menu p-9">
            <a href="#" class="active">About Us</a>
            <a href="#" class="active">Feedback</a>

          </div>

  <div className='p-9'>
    <div className=' '><h3 className='text-2xl  md:text-2xl lg:text-2xl font-semibold   font-Poppins  text-dark text-white'>Follow us</h3></div>
    <a href="https://twitter.com/Valuefinders11" style={{color:'#9CCF32'}} class="uk-icon-button uk-margin-small-right" uk-icon="twitter"></a>
    <a href="https://web.facebook.com/valuefinders.org" style={{color:'#9CCF32'}} class="uk-icon-button  uk-margin-small-right" uk-icon="facebook"></a>
    <a href="https://www.instagram.com/valuefindersorg/?igshid=NGVhN2U2NjQ0Yg%3D%3D" style={{color:'#9CCF32'}} class="uk-icon-button  uk-margin-small-right" uk-icon="instagram"></a>
    <a href="https://www.linkedin.com/in/valuefinders-org-organization-ab423224a/" style={{color:'#9CCF32'}} class="uk-icon-button" uk-icon="linkedin"></a>
</div>
  </div>



  <div class="uk-width-1-3@s">

        <div class="vertical-menu p-9">
        <a href="#" class="active">Trust, Safety & Security </a>
        <a href="#" class="active">Help & Support </a>

      </div> 
  </div>




  <div class="uk-width-1-3@s">

  <div class="vertical-menu p-9">
        <a href="#" class="active">Terms of Service </a>
        <a href="#" class="active">Privacy Policy  </a>

      </div> 
  </div>

  </div>
   

  
    <div style={{borderTop:'2px solid #fff', margin:'40px'}} >
        <p className='text-white text-center p-4'>© 2023 Valuefinders® Global Inc. </p>
    </div>




    </div>
    </div>
  )
}

export default Footer