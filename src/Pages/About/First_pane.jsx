import React from 'react'
import heroBg from '../../assets/images/about_img.jpg'

const First_pane = () => {
  return (

    <div>   <div className='bg-image bg-cover bg-center pt-16'
    

    style={{ 
    
        backgroundImage: `-webkit-linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${heroBg})`,
        
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingBottom: '80px',
        paddingTop: '80px',
        height: '80vh',
        backgroundAttachment:'fixed',
    
    }}
    
    >
       



    </div>




    <div className='lg:px-40 lg:pt-20 p-5 ' style={{backgroundColor:'#F6F6F6', color:'#575755'}}>
        
    <h2 class="text-4xl  md:text-9xl lg:text-7xl font-semibold   font-Poppins  text-dark ">About Valuefinders </h2>
    <p className='font-semibold pt-9 text-dark'>Growing up in a third world country as a teenage orphan, 
    I had no choice than doing every menial job I could get and learning every available skill
     that would help me survive, ranging from weeding compounds to hawking and so on... Somehow,
      the people who watched me grow into a man have come to develop so much trust and confidence
       in me to deliver on my promises and as such will seek my opinion on a whole lot of things...</p>



       <div class="md:flex gap-5 pt-6">
            <div class="md:w-1/2"> 
           <p className='font-semibold pt-5 text-dark'>
           Nowadays, I get minimum of five calls a week from family and close friends,
            either asking me for the contact of an expert in some industry or lobbying
             me to recommend them to people I know who need their services. Either ways,
              there is an indication of a strong desire to get value for money or skill
               by these people and I have been severally compensated for helping out.
           </p>


           <p className='font-semibold pt-5 text-dark'>A lot of people said I was crazy when I spoke to  them about expanding this
             solution mechanism beyond my circle, because I have some multi-million dollar
              companies to contend with. 

            However, I figured these companies seem to focus only on people who can work 
            remotely, thereby leaving ccrftsmenen like Barbers, Plumbers, Makeup artists, 
            etc helplessly out of this rewarding scheme</p>
            </div>





        <div class="md:w-1/2">
        <p className='font-semibold pt-5 text-dark'>
        Artisans with limited education and exposure  on the 
        other hand seem not to believe in the possibility of 
        earning legitimately from the internet, despite investing
         in smart phones and internet connection
           </p>


           <p className='font-semibold pt-5 text-dark'>A lot of people said I was crazy when I spoke to  them about expanding this
             solution mechanism beyond my circle, because I have some multi-million dollar
              companies to contend with. </p>

            <p className='font-semibold pt-5 text-dark'>Often times, people prefer to work with someone recommended by a
                trusted person or source, because a certain level of competence
                 and satisfaction is seemingly assured and as such makes operations smooth.</p>
        </div>






</div>


     
<div class="md:flex pt-10 gap-5">
  <div class="md:w-1/2"> 
  <p className='font-semibold'>
To this end, Valuefinders, an all encompassing online freelancers marketplace is 
created to help remote and nearby skilled persons be found by organizations and
 individuals in need of their services</p> 
  </div>


 


</div>







    </div>


  




    </div>
 
    



  )
}

export default First_pane