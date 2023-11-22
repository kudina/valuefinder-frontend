import React from 'react'
import check_white from '../../assets/images/check_white.png'
const Fourth_pane = () => {
  return (

    <div className='lg:px-40 lg:pt-20 p-5 mt-12 text-white' style={{backgroundColor:'#9ccf32'}}> 
         <div className='text-white'>
              
  <h2 class="text-3xl  md:text-3xl md:text-2xl  lg:text-3xl font-semibold text-white  font-Poppins text-dark">How Valuefinders Work  </h2>
            </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">

                <div class="p-4">
                    <h2 class="text-2xl font-semibold text-white mb-4">Client</h2>
                    

                    <div class="flex pt-4 gap-3">
                        <div class="flex-none ...">
                        <img src={check_white}  className='w-8'/>
                        </div>

                        <div class="flex-1 w-64 ">
                        <h4 className='text-white'> Sign up on our website and select the category you want to belong  </h4>
                        </div>
                  </div>


                  <div class="flex pt-4 gap-3">
                        <div class="flex-none ...">
                        <img src={check_white}  className='w-8'/>
                        </div>

                        <div class="flex-1 w-64 ">
                        <h4 className='text-white'> Complete the account opening process by filling every field </h4>
                        </div>
                  </div>


                  <div class="flex pt-4 gap-3">
                        <div class="flex-none ...">
                        <img src={check_white}  className='w-8'/>
                        </div>

                        <div class="flex-1 w-64 ">
                        <h4 className='text-white'>Fund your Wallet from your local account as a Client to enable you hire talents at any point </h4>
                        </div>
                  </div>



              



                  <div class="flex pt-4 gap-3">
                        <div class="flex-none ...">
                        <img src={check_white}  className='w-8'/>
                        </div>

                        <div class="flex-1 w-64 ">
                        <h4 className='text-white'> Click the CONFIRM button upon completion of your job by Freelancer  </h4>
                        </div>
                  </div>



                </div>

                
                <div class="p-4">
                    <h2 class="text-2xl text-white font-semibold mb-4">Freelancer</h2>


                    <div class="flex pt-4 gap-3">
                        <div class="flex-none ...">
                        <img src={check_white}  className='w-8'/>
                        </div>

                        <div class="flex-1 w-64 ">
                        <h4 className='text-white'> Sign up on our website and select the Freelancer's category in the form  </h4>
                        </div>
                  </div>


                  <div class="flex pt-4 gap-3">
                        <div class="flex-none ...">
                        <img src={check_white}  className='w-8'/>
                        </div>

                        <div class="flex-1 w-64 ">
                        <h4 className='text-white'> Complete the account opening process by filling every field  </h4>
                        </div>
                  </div>



                  <div class="flex pt-4 gap-3">
                        <div class="flex-none ...">
                        <img src={check_white}  className='w-8'/>
                        </div>

                        <div class="flex-1 w-64 ">
                        <h4 className='text-white'> Be detailed in your skill description to enable clients locate you during their search  </h4>
                        </div>
                  </div>




                  <div class="flex pt-4 gap-3">
                        <div class="flex-none ...">
                        <img src={check_white}  className='w-8'/>
                        </div>

                        <div class="flex-1 w-64 ">
                        <h4 className='text-white'> Click ACCEPT or INSPECT OFFER when there is need for you to ascertain the work to be done </h4>
                        </div>
                  </div>




                  <div class="flex pt-4 gap-3">
                        <div class="flex-none ...">
                        <img src={check_white}  className='w-8'/>
                        </div>

                        <div class="flex-1 w-64 ">
                        <h4 className='text-white'> Click EXECUTED BUTTON upon completion of task and your wallet will be automatically credited  </h4>
                        </div>
                  </div>



                  <div class="flex pt-4 gap-3">
                        <div class="flex-none ...">
                        <img src={check_white}  className='w-8'/>
                        </div>

                        <div class="flex-1 w-64 ">
                        <h4 className='text-white'> You can instantly withdraw from your wallet to your local account  </h4>
                        </div>
                  </div>






                </div>
                </div>
        
  </div>
  )
}

export default Fourth_pane