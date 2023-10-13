import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../component/Header"
import Allcontracts from "../../component/Contracts/Allcontracts"
import Active from "../../component/Contracts/Active"
import Inactive from "../../component/Contracts/Inactive"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react"



const Contractroom = ()=> {

    return(
        <>
         <Header />

         <div className="m-10 mx-auto w-4/5 ">

         <Tabs position="relative" variant="unstyled">
    <TabList className="gap-8">
      <Tab>All Contracts</Tab>
      <Tab>Active Contract </Tab>
      <Tab>In Active contract</Tab>
    </TabList>
    <TabIndicator
    className="bg-green"
      mt="-1.5px"
      height="2px"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
      <Allcontracts/>
      </TabPanel>
      <TabPanel>
      <Active/>
      </TabPanel>
      <TabPanel>
      <Inactive/>
      </TabPanel>
    </TabPanels>
  </Tabs>
        
         

         </div>

         
       
        
         {/* <div className="bg-boxGrey h-screen w-screen">
         <Header />
<div className="m-5 mx-auto w-4/5 ">
            <div className="flex gap-9">
                <div  onClick={showA} className="cursor-pointer">
                   <span>Contracts</span> 
                   <div className="hover:bg-green h-[2px] w-full"></div>
                </div>

                <div onClick={showB} className="cursor-pointer">
                   <span>Active Contracts</span> 
                   <div className="hover:bg-green h-[2px] w-full"></div>
                </div>

                <div onClick={showC} className="cursor-pointer">
                   <span>Inactive contracts</span> 
                   <div className="hover:bg-green h-[2px] w-full"></div>
                </div>
                
            </div>

            <div className="mt-4 ">
            {elementToDisplay}
            </div>

            

            
        </div>
         </div> */}
         
        </>

       

    )
}

export default Contractroom