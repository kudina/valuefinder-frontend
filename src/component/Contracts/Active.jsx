import { useEffect , useState} from "react"
import { useGetContractsQuery, useUpdateContractMutation } from "../../features/api/apiSlice"
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   Button,
   Text,
   Card,
   CardBody
 } from '@chakra-ui/react'
 import { useDisclosure } from "@chakra-ui/react"
 import {BiSolidPhoneCall} from 'react-icons/bi';
 import { HiOutlineMail} from 'react-icons/hi';
 import { Grid, GridItem } from '@chakra-ui/react'



const Active = ()=>{
   const {data} = useGetContractsQuery()
   const [update] = useUpdateContractMutation()

   const result = data?.data.filter(i => i.contractState == "active") 
   console.log("my result",result)

   const OverlayOne = () => (
       <ModalOverlay
         bg='blackAlpha.300'
         backdropFilter='blur(10px) hue-rotate(90deg)'
       />
     )
   
     const { isOpen, onOpen, onClose } = useDisclosure()
     const [overlay, setOverlay] = useState(<OverlayOne />)

const updatecontract = (i)=>{
 console.log('clicked', i)
 const payload = {...i, contractState: "active"}
 console.log("this is payload",payload)
 update(payload)

}


   return(

       <>

<Modal isCentered isOpen={isOpen} onClose={onClose}>
       {overlay}
       <ModalContent>
         <ModalHeader className="text-left">Client contact details</ModalHeader>
         <ModalCloseButton />
         <ModalBody>
         <a href="tel:+900300400">
           <Text className=" flex gap-3 items-center"><div className=" h-10 w-10 py-2 px-2 rounded-full"><BiSolidPhoneCall className=" text-green item-center text-[24px]"/></div> Call client 08068077531</Text>
         </a>

         <a href="mailto: uhembenelson@gmail.com">
            <Text className=" flex gap-3 items-center"><div className=" h-10 w-10 py-2 px-2 rounded-full">< HiOutlineMail className=" text-green item-center text-[24px]"/></div> Email client uhembenelson@gmail.com</Text>
           </a>
           
          
         </ModalBody>
         <ModalFooter>
           <Button onClick={onClose}>Close</Button>
         </ModalFooter>
       </ModalContent>
     </Modal>

<Grid templateColumns='repeat(3, 1fr)' gap={4} className="mt-10">
   {
        result?.length === 0? <div>No contracts at the momoment </div> :<> {
         result?.map((i)=>{

               return(
                   <GridItem w='100%' h='100%' >
                       <Card>
                           <CardBody>
                             <div className="font-semibold">{i.title}</div>
                   <div className="flex gap-8 mb-4 mt-2 justify-between">
                       <div>
                       <div className=" rounded-md mt-2 text-left text-black  text-[14px]">{i.salaryRange}</div>
                       <div className=" rounded-md  text-left text-graytext  text-[12px] text-normal">Project type</div>
                       </div>

                       <div>
                       <div className=" rounded-md mt-2 text-left text-black  text-[14px]"> N {i.salary}</div>
                       <div className=" rounded-md  text-left text-graytext  text-[12px] text-normal">Budget</div>
                       </div>

                       <div>
                       <div className=" rounded-md mt-2 text-left text-black  text-[14px]">{i.estTime}</div>
                       <div className=" rounded-md  text-left text-graytext  text-[12px] text-normal">Duration</div>
                       </div>
                     
                     
                   </div>
                   <div className="text-[16px] mt-5 text-greyBlack">Request from: {i.firstName} {i.lastName}</div>
         
                   <div className="text-[16px] mt-4 text-greyBlack">{i.description}</div>
                   <div className="text-[11px] mt-4 text-[red]">Always request for inspection or more clarification aboout a project before acceepting contract request </div>
         
                   <div className="flex gap-1 mt-5">
                   <button onClick={()=> { setOverlay(<OverlayOne />)
                                           onOpen()
                                       }} 
                    type="submit" class="w-full bg-green hover:bg
                     -blueGray-700 focus:ring-blueGray-500  text-white px-2 py-3 text-[12px]
                     rounded-sm shadow-lg cursor-pointer transition ease-in duration-200 text-center
                     hover:-translate-y-1 ">
                         Completed
                     </button>

                     
         
                    
                   </div>  
                           </CardBody>

                       </Card>
                       
                   
                   

                   </GridItem>
               )

           })
        }</>
   }

 

</Grid>
       </>
   )
}

export default Active