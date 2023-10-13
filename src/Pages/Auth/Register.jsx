import React, {useState} from 'react'
import Logo from '../../assets/images/dashLogo.png'
import { Link, useNavigate } from "react-router-dom";
import {  useRegisterMutation} from '../../features/api/apiSlice';


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const[userType, setUserType] = useState("")
    const [feedBack, setFeedBack] = useState("");
    const [showFeedBack, setShowFeedBack] = useState(false);

    const navigate = useNavigate();
    const [register, { isLoading: isChecking }] = useRegisterMutation();

    const Valdation = (user) =>{
      if(!user.firstName){
      
        return setFeedBack('email is required')
      }
    }

   

    const handleLogin = async (e) => {
      
        e.preventDefault();

        const user = { email, password, firstName, lastName, userType };
       // Valdation(user)
        console.log("this is user", user)
        try {
          const response = await register(user);
          setFeedBack(response?.data?.msg || response?.error?.data?.msg);
          setShowFeedBack(true);
          setTimeout(() => {
            setShowFeedBack(false);
          }, 5000);
          if (response?.data?.msg === "Signup successful") {
            // localStorage.setItem("accessToken", response?.data?.accessToken);
            navigate("/login");
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
      };

  return (
    <div className='lg:flex lg:items-center lg:justify-between lg:h-screen   '>
       

         
            <div className='lg:flex lg:items-center lg:justify-center lg:h-screen  w-full bg-gradient-to-r from-orange to-green lg:visible hidden '>
                <div className=''>
                   <div className='text-[50px] font-bold leading-[55px] text-white'>Connecting Talent, <br/>Empowering <br/>Dreams</div>
                   <div className='text-[20px]  leading-[50px] text-white'>Your Gateway to Freelance Success</div>
              </div>
            </div>
            
       

          <div className='flex items-center justify-center h-screen w-full bg-gray px-5' >
            <form onSubmit={handleLogin} className=' items-center flex-column lg:w-1/2 w-full'>
                <div className='flex  justify-center lg:mb-10 mb-5'>
                    <img src={Logo} className='w-1/3'/> 
                </div>
               
                <div className="text-2xl font-semiboild text-lightGray text-center lg:mb-10 mb-5">Get Started with Valuefinder</div>

                {!isChecking && showFeedBack && (
                   <p className="text-[#FF0000] text-[14px] mt-2">{feedBack}</p>
                 )}
                  <div className=''>
                    <label className='text-[15px]'>First Name</label>
                    <input 
                     onChange={(e) => {
                        setFirstName(e.target.value);
                        setFeedBack("");
                      }}
                     placeholder="First name"
                     type="text"
                     className=" w-full mt-2 p-4 border mr-2 border-textInputborderColor rounded-[5px]  h-[50px] focus:outline-none focus:border-gray-400 focus:ring-0"
                    />
                </div>

                <div className='mt-3'>
                    <label className='text-[15px]'>Last Name</label>
                    <input 
                     onChange={(e) => {
                        setLastName(e.target.value);
                        setFeedBack("");
                      }}
                     placeholder="Last names"
                     type="text"
                     className=" w-full mt-2 p-4 border mr-2 border-textInputborderColor rounded-[5px]  h-[50px] focus:outline-none focus:border-gray-400 focus:ring-0"
                    />
                </div>

                <div className='mt-3'>
                    <label className='text-[15px]'>Email</label>
                    <input 
                     onChange={(e) => {
                        setEmail(e.target.value);
                        setFeedBack("");
                      }}
                     placeholder="Email address"
                     type="text"
                     className=" w-full mt-2 p-4 border mr-2 border-textInputborderColor rounded-[5px]  h-[50px] focus:outline-none focus:border-gray-400 focus:ring-0"
                    />
                </div>

                <div className='mt-3'>
                    <label className='text-[15px]'>User Type</label>
                    <select
                    onChange={(e) => {
                      setUserType(e.target.value);
                      setFeedBack("");
                    }}

                     className=" text-textInputborderColor w-full mt-2 p-3 border mr-2 border-textInputborderColor rounded-[5px]  h-[50px] focus:outline-none focus:border-gray-400 focus:ring-0">
                     <option  value="Client">Client</option>
                     <option value="Freelancer" >Freelancer</option>
                    </select>
                    {/* <input 
                     onChange={(e) => {
                        setEmail(e.target.value);
                        setFeedBack("");
                      }}
                     placeholder="Email address"
                     type="text"
                     className=" w-full mt-2 p-4 border mr-2 border-textInputborderColor rounded-[5px]  h-[50px] focus:outline-none focus:border-gray-400 focus:ring-0"
                    /> */}
                </div>

                <div className='mt-3'>
                    <label>Password</label>
                    <input 
                     onChange={(e) => {
                        setPassword(e.target.value);
                        setFeedBack("");
                      }}
                     placeholder="password"
                     type="password"
                     className=" w-full mt-2 p-4 border mr-2 border-textInputborderColor rounded-[5px]  h-[50px] focus:outline-none focus:border-gray-400 focus:ring-0"
                    />
                </div>


                <div className="mt-5">
            <button className="w-full bg-green text-white p-3 rounded-[5px] h-[55px] ">
              {isChecking ? "Checking details..." : "Register"}
            </button>
          </div>

          <div>
          <div className="text-[14px] mt-3 text-center">
              Already have an account?{" "}
              <Link to={"/login"} className="text-green">
                Login
              </Link>
            </div>
            
            <div className="text-[12px] mt-1 text-center text-tc">
            By registering you agree to our terms of use and policies
              </div>
          </div>




          {/* <div className="flex mt-3 text-tc flex-column">
            <div className="text-[12px]">
              Don’t have an account?{" "}
              <Link to={"/register"} className="text-green">
                Sign up
              </Link>
            </div>

            <div className="text-[12px]">Forgot password? Reset password</div>
          </div> */}

         
            </form>
            
          </div>  

  

        

    </div>
  )
}

export default Register