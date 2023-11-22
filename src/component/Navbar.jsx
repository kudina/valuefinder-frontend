import React, { useEffect, useState } from "react";
import { useGetCurrentUserQuery } from "../features/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegBell, FaRegEnvelope } from "react-icons/fa";
import { CgMenuRight, CgClose} from "react-icons/Cg";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import Logo from "../assets/images/dashLogo.png";



const Navbar = () => {
  const dispatch = useDispatch();
  const { data: currentUser, isSuccess } = useGetCurrentUserQuery();

  const [view, setView] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  


  const clientMenue = [
    {
      title: "Dashboard",
      linkTo: "/dashboard",
    },

    {
      title: "Create Job",
      linkTo: "/create-job",
    },
  ];

  const userMenue = [
    {
      title: "Dashboard",
      linkTo: "/dashboard",
    },

    {
      title: "Find Job",
      linkTo: "/create-job",
    },

   

    {
      title: "Reports",
      linkTo: "/create-job",
    },
    {
      title: "My Contract",
      linkTo: "/contract",
    },
    {
      title: "Applications",
      linkTo: "/create-job",
    },
  ];



  return (
    <>
{/* mobile nav */}
    <div className="md:hidden  duration-300">
      <div className=" flex flex-row justify-between items-center p-4">
        <div> <img src={Logo} alt="" className="w-1/2" /></div>
        <div>
        <CgMenuRight onClick={toggleVisibility} className="text-orange font-[200] h-[25px]  w-[25px] cursor-pointer" />
        </div>
      </div>

      {isVisible && 
      <div className={`fixed top-0 left-0 w-screen h-screen 
      bg-gradient-to-r from-orange to-green bg-opacity-100 z-50
      transition-transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      } duration-300 ease-in-out
      `}>
        <div className=" flex flex-row justify-between items-center p-4">
        <div> 
          {/* <img src={Logo} alt="" className="w-1/2" /> */}
        </div>
        <div>
        <CgClose onClick={toggleVisibility} className="text-white font-[200] h-[25px]  w-[25px] cursor-pointer " />
        </div>
        </div>

        <div className="p-4">

        <div className="gap-1  flex flex-col" onClick={toggleVisibility}>
            {currentUser?.userType === "Client" ? (
              <>
                {clientMenue.map((item) => {
                  return (
                    <div className="text-[20px] hover:text-green cursor-pointer text-white  ">
                      <Link to={item.linkTo}>{item.title}</Link>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {userMenue.map((item) => {
                  return (
                    <div className="text-[15px] hover:text-green cursor-pointer text-white   ">
                      <Link to={item.linkTo}>{item.title}</Link>
                    </div>
                  );
                })}
              </>
            )}
          </div>
          </div>
        
       
      </div>}
    </div>

{/* web nav */}
     <div className="hidden md:block">
      <div className="px-10 py-5 flex justify-between items-center  ">
        <div className="flex gap-2">
          <div>
            {" "}
            <img src={Logo} alt="" className="w-1/2" />
          </div>
          <div className="gap-10  flex">
            {currentUser?.userType === "Client" ? (
              <>
                {clientMenue.map((item) => {
                  return (
                    <div className="text-[15px] hover:text-green cursor-pointer text-gray  font-RubikRegular">
                      <Link to={item.linkTo}>{item.title}</Link>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {userMenue.map((item) => {
                  return (
                    <div className="text-[15px] hover:text-green cursor-pointer text-gray ">
                      <Link to={item.linkTo}>{item.title}</Link>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>

        <div className="flex gap-5 ">
          <div
            className="h-[2.13rem] md:h-[2.15rem] w-[2.13rem] md:w-[2.15rem]  flex items-center justify-center rounded-[50%] border-green border-[1px] mr-[4px] md:mr-[10px] cursor-pointer"
            onClick={() => dispatch(setChat())}
          >
            <FaRegEnvelope className="text-orange font-[200] h-[1.5rem] md:h-[1.53rem] w-[0.8rem] md:w-[1.15rem]" />
          </div>

          <div className="h-[2.13rem] md:h-[2.15rem] w-[2.13rem] md:w-[2.15rem]  flex items-center justify-center rounded-[50%] border-green border-[1px] cursor-pointer">
            <FaRegBell className="text-orange font-[200] h-[1.13rem] md:h-[1.53rem] w-[0.8rem] md:w-[1.15rem]" />
          </div>
          <div className="h-[35px] bg-green w-[1px]"></div>

          <Link to="/profile">
             <div className="w-[35px] h-[35px] bg-green rounded-full  justify-between  text-white m-0">
            
               <div className=" px-[11px] py-[4px] text-[16px] font-semibold ">
              {currentUser?.firstName[0]}
            </div>
          </div>
          </Link>
         


        </div>
      </div>
    </div>
    </>


   
  );
};

export default Navbar;

