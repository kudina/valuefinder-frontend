import React, {useState, useEffect} from "react";
import Header from "../../component/Header";
import { PiCurrencyNgnDuotone } from "react-icons/pi";
import { AiOutlineProfile, AiOutlineFileText, AiOutlineFileProtect } from "react-icons/Ai";
import { useGetPostsByIdQuery, useGetCurrentUserQuery, useUpdateUserMutation } from "../../features/api/apiSlice"; 
import { usePaystackPayment } from 'react-paystack';
import Cl from '../../assets/images/client.png'
import { Link } from "react-router-dom";
import {setUser} from '../../features/api/userSlice'
import { useSelector,  useDispatch} from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
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
import Inputform from "../../component/Input/Inputform";


const ClientDashboard = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user?.value)
  const { isOpen, onOpen, onClose: close} = useDisclosure()
  const [isChecking] = useState()
  const [userdata, setUserdata] = useState("")
  const { data: Data, isError } = useGetPostsByIdQuery ()
  const { data: currentUser, isSuccess } = useGetCurrentUserQuery();
  const [balance, setBalance] = useState()
  const [updateUser, data] = useUpdateUserMutation()
  const [amount, setAmount] = useState()
  useEffect(()=>{
    currentUser
    setBalance(currentUser.balance)
    dispatch(setUser(currentUser))
  },)

  //get jobs with stage created
  const recentpost = Data?.data.filter(i =>  i.stage == "created")
  console.log('recent post', recentpost);

  const [showApplicant, setShowApplicant] = useState(false)

  console.log("user data",  user)

  const Toggle = (i)=>{
    setShowApplicant(!showApplicant)
    setUserdata(i)
   // console.log("this is i", i)
    
  }
  const config = {
    reference: (new Date()).getTime().toString(),
    email: currentUser.email,
    amount: amount*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_c4e303ebadc4a0e125660450fc5c599a953fabab',
};

// you can call this function anything
const onSuccess = (reference) => {
  const payload ={
    balance: parseInt(amount) + parseInt(currentUser.balance) 
  }
  updateUser(payload)
 
  if(data){
    console.log("thi siiss updated user", data)
    currentUser()
    dispatch(setUser({...currentUser}));
    setBalance(currentUser.balance)
   
    
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





  return (
    <div>
      <Header />

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Job Post Terms & Conditions</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Inputform
                  
                  placeholder="Enter an amount"
                  onChange={ (e) => {setAmount(e.target.value)}}
                  type="text"
                  label="How much do you want to fund your wallet with"
               />
          
          </ModalBody>

          <ModalFooter>
            <Button  
            onClick={()=>{
              initializePayment(onSuccess, onClose)
              close()
            }}
             className="bg-green" mr={3}>
              Next
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
      
      <div className="  mt-10 mb-20 flex-col mx-auto w-5/6 ">
        <div className=" md:flex gap-10 items-center justify-between xs:flex-col ">
          <div className="bg-white px-8 py-8 rounded-[5px] shadow-sm border border-bcolor flex items-center gap-4 m-5 md:m-0">

            <div className="p-4 bg-boxGrey rounded-full" 
            // onClick={()=>{
            //   initializePayment(onSuccess, onClose)
            // }}
            onClick={onOpen}
            >
              <PiCurrencyNgnDuotone />
            </div>

            <div className="flex-col">
              <div>Wallet balance</div>
              <div className="flex items-center gap-3 text-2xl">
             
                <PiCurrencyNgnDuotone /> {balance}
              </div>
            </div>
          </div>


          <div className="bg-white px-8 py-8 rounded-[5px] shadow-sm border border-bcolor flex items-center gap-4 m-5 md:m-0 ">
            <div className="p-4 bg-boxGrey rounded-full">
            <AiOutlineProfile />
            </div>

            <div className="flex-col">
              <div>Number of Projects</div>
              <div className="flex items-center gap-3 text-2xl">
              20
              </div>
            </div>
          </div>

          <div className="bg-white px-8 py-8 rounded-[5px] shadow-sm border border-bcolor flex items-center gap-4 m-5 md:m-0 ">
            <div className="p-4 bg-boxGrey rounded-full">
            <AiOutlineFileText />
            </div>

            <div className="flex-col">
              <div>Active Projects</div>
              <div className="flex items-center gap-3 text-2xl">
              15
              </div>
            </div>
          </div>

          <div className="bg-white px-8 py-8 rounded-[5px] shadow-sm border border-bcolor flex items-center gap-4 m-5 md:m-0 ">
            <div className="p-4 bg-boxGrey rounded-full">
            <AiOutlineFileProtect />
            </div>

            <div className="flex-col">
              <div>Completed Projects</div>
              <div className="flex items-center gap-3 text-2xl">
              20
              </div>
            </div>
          </div>



        </div>

   {
    showApplicant? 

    <>
     <div  onClick={Toggle} className=" mt-7 rounded-md px-5 py-5">
      <div className="font-semibold text-[14px] mb-3">Applicants</div>

  <TableContainer>
  <Table variant='simple'>
  <Thead>
              <Tr>
                <Th>Applicant</Th>
                <Th>Email</Th>
                <Th >Location</Th>
                <Th >Action</Th>
              </Tr>
            </Thead>


    {
      userdata?.numberOfApplicants?.map((item)=>{
        return(

         
          
           
            <Tbody>
              <Tr>
                <Td>{item.firstName} {item.lastName}</Td>
                <Td>{item.email}</Td>
                <Td >{item.location}</Td>
                <Td > <Link to="/userbio" state={{item: item, postdata:userdata}}>
                  View user
                 </Link></Td>
              </Tr>
              
            </Tbody>
            
     
        )

      })
    }
      </Table>
        </TableContainer>
   

    
  

      
      
      </div> 



     
    </>

      : 

    <div>
    <div className=" ">
      <h6 class="text-lg font-semibold mt-5 mb-3 ">Recent projects</h6>
    </div>

   <div className="flex  gap-2 flex-wrap ">

    {
      recentpost?.map((i)=>{

       return(
        <div className=" justify-between w-[24%] flex-col bg-white px-4 py-4 rounded-[5px] shadow-sm border border-green flex   m-5 md:m-0">
        <div>
        <h5 className="font-semibold text-black">{i.title}</h5>
        <div className="text-graytext mt-2 text-[14px]">{i.description}</div>
        </div>

        <div className="flex justify-between">

         <>
         <div className="flex gap-3">
          <div>
          {
            i.numberOfApplicants.length > 0 ?  <div>
            <button 
            onClick={()=>{
              Toggle(i)
            }}
             className="w-full bg-green text-white rounded-[5px] h-10 mt-3 px-3 text-[14px] ">
            {isChecking ? "Checking details..." : "Show Applicants"}
          </button>
            </div>
            :  <div>
            <button 
              onClick={Toggle}
             className="w-full bg-green text-white rounded-[5px] h-10 mt-3 px-3 text-[14px] ">
            {isChecking ? "Checking details..." : "No Application yet"}
          </button>
            </div>
          }
          </div>

          <div>
          <button 
              onClick={Toggle}
             className="w-full bg-green text-white rounded-[5px] h-10 mt-3 px-3 text-[14px] ">
              <Link to="/editpost" state={i}>
              Edit Job post
              </Link>
           
          </button>
          
          </div>
         </div>
         </>


         
          <div className="mt-3 flex  ">

            {
               i.numberOfApplicants.length > 0 ? <div>
                 <div className="bg-orange h-10  w-10 text-center justify-center flex items-center rounded-full ml-[-10px] border border-white text-white">
                 {i.numberOfApplicants.length}
             </div>
                 </div> :  <div className="bg-orange h-10  w-10 text-center justify-center flex items-center rounded-full ml-[-10px] border border-white text-white">
             0
             </div>
            }
            
           
           
          
           
            
            </div>
        </div>
    </div>
       )


      })
    }
   </div>
    </div>
   }

      </div>
    </div>
  );
};

export default ClientDashboard;
