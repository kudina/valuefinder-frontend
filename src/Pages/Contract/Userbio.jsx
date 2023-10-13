import Header from "../../component/Header";
import { useGetCurrentUserQuery, useUpdateUserMutation, useContractRquestMutation } from "../../features/api/apiSlice";
import Inputform from "../../component/Input/Inputform";
import Textarea from '../../component/Input/Textarea';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Index = () => {
  const { data: currentUser, isSuccess } = useGetCurrentUserQuery();
  const [updateUser, data] = useUpdateUserMutation()
  const [contractRquest] = useContractRquestMutation()

  const location = useLocation();
const userdata = location.state;
console.log(userdata);

  const [msg, setMsg] = useState("")
  
  

  const handleSubmit = async ()=>{
   
    const payload = {
      freelancedata:userdata.item,
      data:userdata.postdata}
    const response = await  contractRquest(payload)
    console.log("this is response", response.data.msg)
    if(response.data.msg){
      setMsg('Contract request has been sent')
      return toast.success(`Contract request has been sent`, {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
     

    }else{
      toast.error("Something went wrong")
     
     
    
    }
   
    console.log("data", data)


  }

  return (
    <>
      <Header />
      <div className="bg-boxGrey h-screen w-screen">
        <div className=" w-1/2 mx-auto  p-5">
          <div className="mt-5  rounded-md">
          <div className="flex text-center items-center mb-3"> {msg}</div>
            <div className="bg-white flex justify-between p-5 rounded-md">

              
              <div className="flex  items-center gap-4">
                <div className="h-10 w-10 bg-green boder border-orange rounded-full "></div>
                <div>
                <div className="text-gray">
                  {userdata?.item.firstName} {userdata?.item.lastName}
                </div>
                <div className="text-gray text-[12px] text-greyBlack">
                  {currentUser?.specialty} 
                </div>
                </div>
                
              </div>
              <div className="flex  items-center gap-3">
                <button className="bg-green px-7 py-2 rounded-md text-white">
                  Chat {userdata.item.firstName} {userdata.item.lastName}
                </button>
                <button
                onClick={()=> handleSubmit() }
                 className="bg-green px-7 py-2 rounded-md text-white">
                 Contract {userdata.item.firstName} {userdata.item.lastName}
                </button>
              </div>
            </div>
            <div className="mt-4 font-semibold">Account Infomation</div>
          </div>
          

          <div className="mt-5 flex justify-between gap-10">
            <div className="flex-col w-full">
              <Inputform
                label="Email address"
                placeholder="Email address"
                disabled={true}
                value={userdata?.item.email}
                type="text"
              />
            </div>

            <div className="flex-col w-full">
              <Inputform
                label="Phone number"
                placeholder={userdata?.item.phoneNumber}
                disabled={true}
                value={userdata?.item.phoneNumber}
               
                type="text"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-between gap-10">
            <div className="flex-col w-full">
              <Inputform
                label="Specialty"
                placeholder={userdata?.item.specialty}

                disabled={true}
                value={userdata?.item.specialty}
                type="text"
              />
            </div>

            <div className="flex-col w-full">
              <Inputform
                label="Online Portfolio"
                placeholder={userdata?.item.portfolio}
                disabled={true}
                value={userdata?.item.portfolio}
               
                type="text"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-between gap-10">
            <div className="flex-col w-full">
              <Inputform
                label="Salary"
                placeholder={userdata?.item.salary}
                disabled={true}
                value={userdata?.item.salary}
                
                type="text"
              />
            </div>

            <div className="flex-col w-full">
              <Inputform
                label="Lcation"
                placeholder={userdata?.item.location}
                disabled={true}
                value={userdata?.item.location}
                
                type="text"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-between gap-10">
            <div className="flex-col w-full">
              <Inputform
                label="Address"
                placeholder={userdata?.item.location}
                disabled={true}
                value={userdata?.item.location}
                
                type="text"
              />
            </div>

            
          </div>

          <div className="mt-5 flex justify-between gap-10">
            <div className="flex-col w-full">
            <Textarea
                   label="Bio"
                   placeholder={userdata?.item.bio}
                   disabled={true}
                   value={userdata?.item.bio}
                   
                   type="text"
                />
            </div>

            
          </div>

          {/* <div className="flex  items-center mt-5">
                <button  className="bg-green px-7 py-2 rounded-md text-white">
                  Update profile
                </button>
              </div> */}


        </div>
      </div>
    </>
  );
};

export default Index;
