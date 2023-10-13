import Header from "../../component/Header";
import { useGetCurrentUserQuery, useUpdateUserMutation } from "../../features/api/apiSlice";
import Inputform from "../../component/Input/Inputform";
import Textarea from '../../component/Input/Textarea';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
const Index = () => {
  const { data: currentUser, isSuccess } = useGetCurrentUserQuery();
  const [updateUser, data] = useUpdateUserMutation()

  const [firstName, setFirstName] = useState(currentUser.firstName)
  const [lastName, setLastName] = useState(currentUser.lastName)
  const [email, setEmail] = useState(currentUser.email)
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber)
  const [specialty, setSpecialty] = useState(currentUser.specialty)
  const [onlinePortfolio, setOnlinePortfolio] = useState(currentUser.onlinePortfolio)
  const [salary, setSalary] = useState(currentUser.salary)
  const [state, setState] = useState("")
  const [address, setAddress] = useState(currentUser.address)
  const [bio, setBio] = useState(currentUser.bio)
  const [msg, setMsg] = useState()

  const handleSubmit = async ()=>{
    const payload = {
        firstName,
        lastName,
        email,
        phoneNumber,
        specialty,
        onlinePortfolio,
        salary,
        state,
        address,
        bio        
    }
   const update = await updateUser(payload)
   if(update){
    setMsg(data.data.msg)
   // console.log("data", data.data.msg)
   }
    


  }
  

  return (
    <>
      <Header />
      <div className="bg-boxGrey h-screen w-screen">
        <div className=" w-1/2 mx-auto  p-5">
          <div className="mt-5  rounded-md">
            {
              msg? <div className="mb-4 bg-white flex gap-2"><div className="h-6 w-2 bg-green"></div> <div className="">{msg}</div></div>  : null
            }
            <div className="bg-white flex justify-between p-5 rounded-md">
              <div className="flex  items-center gap-4">
                <div className="h-10 w-10 bg-green boder border-orange rounded-full "></div>
                <div>
                <div className="text-gray">
                  {currentUser?.firstName} {currentUser?.lastName}
                </div>
                <div className="text-gray text-[12px] text-greyBlack">
                  {currentUser?.specialty} 
                </div>
                </div>
                
              </div>
              <div className="flex  items-center">
                <button className="bg-green px-7 py-2 rounded-md text-white">
                  Edit
                </button>
              </div>
            </div>
            <div className="mt-4 font-semibold">Account Infomation</div>
          </div>
          

          <div className="mt-5 flex justify-between gap-10">
            <div className="flex-col w-full">
              <Inputform
              disabled="true"
                label="Email address"
                value={currentUser?.email}
                placeholder={currentUser?.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
              />
            </div>

            <div className="flex-col w-full">
              <Inputform
               disabled="true"
                label="Phone number"
                value={currentUser?.phoneNumber}
                placeholder={currentUser?.phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                type="text"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-between gap-10">
            <div className="flex-col w-full">
              <Inputform
                label="Specialty"
                
                placeholder={currentUser.specialty}
                onChange={(e) => {
                  setSpecialty(e.target.value);
                }}
                type="text"
              />
            </div>

            <div className="flex-col w-full">
              <Inputform
                label="Online Portfolio"
                placeholder="Online Portfolio"
                onChange={(e) => {
                  setOnlinePortfolio(e.target.value);
                }}
                type="text"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-between gap-10">
            <div className="flex-col w-full">
              <Inputform
                label="Salary"
                placeholder={currentUser.salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                type="text"
              />
            </div>

            <div className="flex-col w-full">
              <Inputform
                label="Location"
                placeholder={currentUser.location}
                onChange={(e) => {
                  setState(e.target.value);
                }}
                type="text"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-between gap-10">
            <div className="flex-col w-full">
              <Inputform
                label="Address"
                placeholder={currentUser.address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                type="text"
              />
            </div>

            
          </div>

          <div className="mt-5 flex justify-between gap-10">
            <div className="flex-col w-full">
            <Textarea
                   label="Bio"
                   placeholder={currentUser.bio}
                   onChange={ (e) => {setBio(e.target.value)}}
                   type="text"
                />
            </div>

            
          </div>

          <div className="flex  items-center mt-5">
                <button onClick={()=> handleSubmit() } className="bg-green px-7 py-2 rounded-md text-white">
                  Update profile
                </button>
              </div>


        </div>
      </div>
    </>
  );
};

export default Index;
