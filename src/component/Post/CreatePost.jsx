import Inputform from '../../component/Input/Inputform';
import Selectform from '../../component/Input/Selectform';
import Textarea from '../../component/Input/Textarea'
import { useState } from 'react';
import {  useCreateJobMutation, useGetCurrentUserQuery, useUpdateUserMutation} from '../../features/api/apiSlice';
import { usePaystackPayment } from 'react-paystack';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
  
} from '@chakra-ui/react'


const Index =()=>{
  const { isOpen, onOpen, onClose: close} = useDisclosure()

  const { data: currentUser, isSuccess } = useGetCurrentUserQuery();
    const [title, setTitle] = useState("")
    const [jobType, setJobType] = useState("")
    const [description, setDescription] = useState("")
    const [requiredExperence, setrRequiredExperence] = useState({name:'react native'})
    const [salaryType, setSalaryType] = useState("")
    const [estTime, setEstTime] = useState("")
    const [salaryRange, setSalaryRange] = useState("")
    const [salary, setSalary] = useState("")
    const [feedBack, setFeedBack] = useState("")
    const [showFeedBack, setShowFeedBack] = useState(false)
    const [location, setLocation] = useState("")
    const [msg, setMsg] = useState("")
    const [fund, setFund] = useState("")
    const [showpayment, setShowpayment] = useState()
    const [amount, setAmount] = useState("")

    useEffect(()=>{
      currentUser
    },[currentUser])

    console.log("users", currentUser)

    const [createJob, { isLoading: isChecking }] = useCreateJobMutation();
    const [updateUser, data] = useUpdateUserMutation()

    const config = {
      reference: (new Date()).getTime().toString(),
      email: currentUser?.email,
      amount: amount*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: 'pk_test_c4e303ebadc4a0e125660450fc5c599a953fabab',
  };
  // you can call this function anything
  const onSuccess = (reference) => {
    const payload ={
      balance: parseInt(currentUser.balance) + parseInt(amount)
    }
    updateUser(payload)
    if(data){
     // alert("you wallet was funded")
      currentUser()
    }
  
    // Implementation for whatever you want to do with reference and after success call.
  
    console.log(reference);
  };
  
  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }
  
  const initializePayment = usePaystackPayment(config);
  const intrest = parseInt(salary)
  console.log("in", intrest)

    const handleSubmit = async ()=>{

      



      setMsg("")
        const postpayload ={
            title,
            jobType,
            description,
            requiredExperence,
            salaryType,
            estTime,
            salaryRange,
            salary,
            location
        }

        
        try {
          if(intrest > currentUser.balance){
            setMsg("")
            setShowFeedBack(true);
            setShowpayment(true)
            return  setFund(`Insufficient balance, please fund your account with the amount that corresponds with your budget`)
          }
          if(!title){
            return setMsg("Please enter a valid Title")
          }
          if(!jobType){
            return setMsg('Please select Job Type')
          }
          if(!description){
            return setMsg('Please add Description ')
          }
          if(!salaryType){
            return setMsg("Please enter a valid Title")
          }
          if(!estTime){
            return setMsg('Please Add Estimated Time to complete this task')
          }
         
          if(!salary){
            return setMsg("Please enter a budget for your project")
          }

          const payload ={
            balance: parseInt(currentUser.balance) - intrest
          }
          updateUser(payload)
          if(data){
            const response = await createJob(postpayload);
            toast(`${response.data.msg || response?.error?.data?.msg }`)
            // setFeedBack(response?.data?.msg || response?.error?.data?.msg);
            setShowFeedBack(true);
            setTimeout(() => {
              setShowFeedBack(false);
            }, 5000);

          }

            
          } catch (error) {
            console.log(error);
            if (error?.status === 400) {
              setFeedBack("There was a network error. Please try again later");
              setShowFeedBack(true);
              setTimeout(() => {
                setShowFeedBack(false);
              }, 5000);
            }
          }


    }
       
 

    const Salaryoptions = [
        {value:'FullTime', title:'Full Time'},
        {value:'PartTime', title:'Part Time'}
    ]
    const Jobtype = [
        {value:'Remote', title:'Remote'},
        {value:'Onsite', title:'Onsite'}
    ]
    const DD = [
        {value:'less than a day', title:'Less than a day'},
        {value:'1 day', title:'1 Day'},
        {value:'few days', title:'Few Days'},
        {value:'1 month', title:'1 Month'},
        {value:'2 - 3 months', title:'2 - 3 Months'},
        {value:'3 - 6 months', title:'3 - 6 Months'},
        {value:'6 - 12 months', title:'6 - 12 Months'},
        {value:'12 - 24 months', title:'12 - 24 Months'},
    ]
    const ST = [
        {value:'Hourly', title:'Hourly'},
        {value:'Daily', title:'Daily'},
        {value:'Monthly', title:'Monthly'},
        {value:'Yearly', title:'Yearly'},
        
    ]
    return(
        <div className="bg-boxGrey  flex flex-col justify-center items-center ">
           <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Job Post Terms & Conditions</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            Terms of use 
          
          </ModalBody>

          <ModalFooter>
            <Button onClick={()=>{
              handleSubmit(),
              close()
            }} colorScheme='blue' mr={3}>
              I Agree
            </Button>
            <Button onClick={close}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

          
          
          <ToastContainer />
            <p className="text-left text-xl mt-10">Create a new job post</p>
            
            <div className='mt-2 mb-2'>{feedBack}</div>
            {
            msg ?   <div className='mt-3 md:w-[30%]  bg-white flex '>
            <div className='w-2 bg-[red] mr-3'></div>
             <div className='p-2'> 
             {msg} 
             </div>
            </div> : null
          }

          {
            showFeedBack ?  <div className='mt-3 md:w-[25%]  bg-white flex mb-3'>
            <div className='w-2 bg-[red] mr-3'></div>
             <div className='p-2'> 
             {fund}
             </div>
            </div> : null
          }

         {
          showpayment ?  <div className='md:w-[28%] mb-5 flex'>
          <Inputform
                  
                   placeholder="Enter an amount"
                   onChange={ (e) => {setAmount(e.target.value)}}
                   type="text"
                />
                
                <button onClick={()=>{ initializePayment(onSuccess, onClose)}} className=" bg-green text-white  rounded-[5px] h-[50px] mt-2 px-2 w-1/2">
               Fund your wallet
            </button>
                
          </div> : null
         }


            <div className=" md:w-[30%] w-full px-5 mb-20">
                <Inputform
                   label="Job Title"
                   placeholder="Enter a job title"
                   onChange={ (e) => {setTitle(e.target.value)}}
                   type="text"
                />
                <div>
                    <Selectform
                    label="Salary Range"
                    onChange={ (e) => {setSalaryRange(e.target.value)}}
                    options={Salaryoptions}
                    />
                </div>
                <div>
                    <Selectform
                    label="Job Type"
                    onChange={ (e) => {setJobType(e.target.value)}}
                    options={Jobtype}
                    />
                </div>
                <div>
                <Textarea
                   label="Job Description"
                   placeholder="Describe the nature of the job in details"
                   onChange={ (e) => {setDescription(e.target.value)}}
                   type="text"
                />
                </div>

                <div>
                    <Selectform
                    label="Duration"
                    onChange={ (e) => {setEstTime(e.target.value)}}
                    options={DD}
                    />
                </div>

                <div className='mt-3'>
                <Inputform
                   label="Required Experence"
                   placeholder="Enter Skills reqiured sperated by a comma (,) "
                   onChange={ (e) => {setrRequiredExperence(e.target.value)}}
                   type="text"
                />
                </div>

                <div className='mt-2'>
                <Inputform
                   label="Budget"
                   placeholder="How much is your budget"
                   onChange={ (e) => {setSalary(e.target.value)}}
                   type="text"
                />
                </div>

                <div className='mt-2'>
                <Inputform
                   label="location"
                   placeholder="Enter your current location, e.g Lagos Nigeria"
                   onChange={ (e) => {setLocation(e.target.value)}}
                   type="text"
                />
                </div>
                <div>
                    <Selectform
                    label="Salary Type"
                    onChange={ (e) => {setSalaryType(e.target.value)}}
                    options={ST}
                    />
                </div>
                <div className="mt-5">
            <button  onClick={onOpen} className="w-full bg-green text-white p-3 rounded-[5px] h-[55px] ">
              {isChecking ? "Checking details..." : "Register"}
            </button>
          </div>


            
            </div> 
            </div>
    )
}

export default Index