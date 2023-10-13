import React, {useState, useEffect} from "react";
import { FaDraftingCompass } from "react-icons/fa";
import { MdVerified, MdOutlineLocationOn } from "react-icons/md";
import { PiCurrencyNgnDuotone } from "react-icons/pi";
import { CgWorkAlt } from "react-icons/Cg";
import { GrStatusGood } from "react-icons/Gr";
import { useGetPostsQuery, useApplyJobMutation, useGetCurrentUserQuery, useContractRquestMutation,  } from "../../features/api/apiSlice";
import TimeAgo from 'react-timeago'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link , useNavigation} from "react-router-dom";


const Jobpost = () => {
  const navigate = useNavigation()
 const { data: Data, isError }= useGetPostsQuery()
 const [ applyJob, { isLoading: isChecking }] = useApplyJobMutation();

 const {data:user} = useGetCurrentUserQuery()


 

 const successCallback = (position) => {
  console.log(position);
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

console.log("location", GeolocationPosition.latitude)





 const handleApplication = async (data)=>{
  const id = {
    data
  }
  if(user.bio && user.phoneNumber && user.specialty && user.salary && user.address === ""){
    return   toast.warn(`Your Profile is not complete please update your profile to start applying for jobs`, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      })
  }
 const response = await applyJob(id)
  console.log("response", response.data);
  if(response.data.msg){
    toast.success(`${response.data.msg}`)
  }
  
  
 }



 const Post = Data?.data.filter(i => i.stage == "created")



// const Post = [
//   {
//     id:'1',
//     title: 'Web Developer',
//     companyName:'Nike',
//     location :'Lagos Nigeria ',
//     salaryRange:"10k - 25K",
//     description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod nobis delectus voluptatum doloremque? I",
//     requiredExperence: [
//       {
//         name: "HTML",

//       },
//       {
//         name: "CSS"
//       },
//       {
//         name: "JavaScript"
//         },
        
//     ],
//     skills:[
//       {name :"React"},
//       {name :"Node.js"}
//     ],
//     salaryType: 'Hourly',
//     jobType: "full-time",
//     estTime:"3 - 4 months",
//     paymentStatus: "verified",
    
  
//   },

  
//   {
//     id:'2',
//     title: 'UI/UX Designer',
//     companyName:'Nike',
//     location :'Lagos Nigeria ',
//     salaryRange:"10k - 25K",
//     description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod nobis delectus voluptatum doloremque? I",
//     requiredExperence: [
//       {
//         name: "HTML",

//       },
//       {
//         name: "CSS"
//       },
//       {
//         name: "JavaScript"
//         },
        
//     ],
//     skills:[
//       {name :"React"},
//       {name :"Node.js"}
//     ],
//     salaryType: 'Hourly',
//     jobType: "full-time",
//     estTime:"3 - 4 months",
//     paymentStatus: "verified"
  
//   },
//   {
//     id:'1',
//     title: 'Backend dev',
//     companyName:'Nike',
//     location :'Lagos Nigeria ',
//     salaryRange:"10k - 25K",
//     description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod nobis delectus voluptatum doloremque? I",
//     requiredExperence: [
//       {
//         name: "HTML",

//       },
//       {
//         name: "CSS"
//       },
//       {
//         name: "JavaScript"
//         },
        
//     ],
//     skills:[
//       {name :"React"},
//       {name :"Node.js"}
//     ],
//     salaryType: 'Hourly',
//     jobType: "full-time",
//     estTime:"3 - 4 months",
//     paymentStatus: "verified"
  
//   },
  
// ]

  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState("")
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
const More = (isVisible)=>{
  const toggleVisibility = () => {

    setIsVisible(!isVisible);
  };
  return(
    <>

<div className="rounded-[5px] border border-bcolor w-full p-3 bg-white flex mt-3 flex-col mb-5">
<ToastContainer />
      <div className="rounded-[5px] border border-bcolor w-full p-3 bg-postbg ">
        <div className="flex flex-row  items-center gap-4">
          <div className="bg-gradient-to-r from-orange to-green  w-[60px] h-[60px] rounded-[5px] border border-bcolor item-center flex justify-center flex-col ">
            <div className="flex justify-around">
              <FaDraftingCompass className="text-white text-[30px] px-1 md:px-0 " />
            </div>
          </div>
          <div>
            <div className="text-blacktext lg:text-[16px] font-[500] text-[12px]">
             {data?.title}
            </div>
            <div className="text-graytext text-[14px] md:flex gap-3 xs:flex-col">
            
                <div className="text-graytext text-[14px] flex"><MdOutlineLocationOn className="text-[16px] text-green" /> {data?.location}</div>
                <div className="text-graytext text-[14px]">Duration: {data?.estTime}</div>
                <div className="text-graytext text-[14px]">
                <TimeAgo date={data?.timestamps.createdAt}/>
                  </div>
              
            </div>
          </div>
        </div>

        <div className="mt-4 md:flex gap-3 xs:flex-col">
          <div className=" rounded-[5px] border border-bcolor p-3  px-6 flex items-center mt-2 ">
            <div className="p-4 bg-bcolor rounded-full mr-2">
            <PiCurrencyNgnDuotone/>
            </div>
            <div className="flex-col">
             <div className="text-[12px] font-semibold"> {data?.salaryRange}/{data?.salaryType}</div>
             <div className="text-[10px] text-gray font-semibold"> Avg. {data?.salary}</div>
            </div>

          </div>

          <div className=" rounded-[5px] border border-bcolor p-3  px-6 flex items-center mt-2 ">
            <div className="p-4 bg-bcolor rounded-full mr-2">
            <CgWorkAlt/>
            </div>
            <div className="flex-col">
             <div className="text-[12px] font-semibold"> {data?.salaryType}</div>
             <div className="text-[10px] text-gray font-semibold"> {data?.jobType}</div>
            </div>

          </div>
          
        </div>


        <div className="text-blacktext lg:text-[16px] font-[500] text-[12px] mt-3">
              About Job
            </div>

        <div className="mt-2 text-[15px] text-graytext ">
          {data.description}
        </div>


        <div className="text-blacktext lg:text-[16px] font-[500] text-[12px] mt-3">
              Required Experence: 
        </div>
        <div className="">
          {
            data?.requiredExperence.map((i)=>{
              return(
                <div className="flex gap-2 item-center jusstify-center mt-2">
            <GrStatusGood className="mt-1"/>
            <div className="text-graytext text-[14px]" >{i?.name}</div>
          </div>
              )
            })
          }

          

          
          
        </div>

        {/* <div className="mt-4 md:flex gap-3  flex-wrap">
          {
            data?.skills.map((s)=>{
              return(
                <div className="w-auto p-1 px-4 text-[14px] rounded-[15px] bg-bcolor text-graytext text-center mt-2">
            {s?.name}
          </div>
              )
            })
          }
          
        </div> */}

        <div className="mt-4  md:flex md:justify-between xs:flex-col ">
          <div className="flex gap-3 items-center">
            <MdVerified className="text-[16px] text-green" />
            <div className="text-graytext text-[14px]">Payment {
              !data.paymentStatus ? <span>Unverified</span> : <span>Verified</span>
           
            
            }</div>
            <MdOutlineLocationOn className="text-[16px] text-green" />
            <div className="text-graytext text-[14px]">{data?.location}</div>
            
          </div>

          <div className="flex gap-2">
          <button onClick={toggleVisibility} className="md:text-[17px] mt-3 w-full h-[45px]  text-[14px] text-white border-bcolor rounded-[5px]  px-4  md:w-[200px] md:h-[45px] bg-gradient-to-r from-orange to-green  text-center justify-between justify-items-center ">
              Find more jobs
            </button>
            <button 
            onClick={()=>{handleApplication(data._id)}}
              className="md:text-[17px] mt-3 w-full h-[45px]  text-[14px] text-white border-bcolor rounded-[5px]  px-4  md:w-[200px] md:h-[45px] bg-gradient-to-r from-orange to-green  text-center justify-between justify-items-center ">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}


  return (

    <>

{isVisible?  
<More/>


:

   <>
   {
    Post?.map((item)=>{

      return(
        <div className="rounded-[5px] border border-bcolor w-full p-3 bg-white flex mt-3 flex-col mb-5">
        <div className="rounded-[5px] border border-bcolor w-full p-3 bg-postbg ">
          <div className="flex flex-row  items-center gap-4">
            <div className="bg-gradient-to-r from-orange to-green  w-[60px] h-[60px] rounded-[5px] border border-bcolor item-center flex justify-center flex-col ">
              <div className="flex justify-around">
                <FaDraftingCompass className="text-white text-[30px] px-1 md:px-0 " />
              </div>
            </div>
            <div>
              <div className="text-blacktext lg:text-[16px] font-[500] text-[12px]">
                {item.title}
              </div>
              <div className="text-graytext text-[14px]">
                {item.salaryType} : {item.salaryRange} - {item.jobType} - Est. Time {item.estTime}
              </div>
            </div>
          </div>
  
          <div className="mt-3 text-[15px] text-blacktext ">
            {item.description}
          </div>
  
          {/* <div className="mt-4 md:flex gap-3  flex-wrap">
           {
            item.requiredExperence.map((item)=>{
              return(
                <div className="w-auto p-1 px-4 text-[14px] rounded-[15px] bg-bcolor text-graytext text-center mt-2">
                  {item.name}
              </div>
              )
            })
           }
            
          </div> */}
  
          <div className="mt-4  md:flex md:justify-between xs:flex-col ">
            <div className="flex gap-3 items-center">
              <MdVerified className="text-[16px] text-green" />
              <div className="text-graytext text-[14px]">Payment {
                 !data.paymentStatus ? <span>Unverified</span> : <span>Verified</span>
              }
              
              </div>
              <MdOutlineLocationOn className="text-[16px] text-green" />
              <div className="text-graytext text-[14px]">{item.location}</div>
            </div>
  
            <div className="">
              <button onClick={()=>{
                 setIsVisible(!isVisible);
                 setData(item)
              }} className="md:text-[17px] mt-3 w-full h-[45px]  text-[14px] text-white border-bcolor rounded-[5px]  px-4  md:w-[150px] md:h-[45px] bg-gradient-to-r from-orange to-green  text-center justify-between justify-items-center ">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
      )

    })
   }
   </>

  }


    </>
   
  );
};

export default Jobpost;
