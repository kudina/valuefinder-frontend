import React, {useState} from 'react'
import Logo from '../../assets/images/dashLogo.png'
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from '../../features/api/apiSlice';

import { useDispatch } from 'react-redux';


const Login = () => {
  const dispatch = useDispatch()
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [feedBack, setFeedBack] = useState("");
    const [showFeedBack, setShowFeedBack] = useState(false);

    const navigate = useNavigate();
    const [login, { isLoading: isChecking }] = useLoginMutation();

    const handleLogin = async (e) => {
        e.preventDefault();
        const user = { email, password };
        try {
          const response = await login(user);
          setFeedBack(response?.data?.msg || response?.error?.data?.msg);
          setShowFeedBack(true);
          setTimeout(() => {
            setShowFeedBack(false);
          }, 5000);
          if (response?.data?.msg === "Login Successful") {
           // dispatch(setUserInfo({response}))
            localStorage.setItem("accessToken", response?.data?.accessToken);
            navigate("/dashboard");
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
               
                <div class="text-3xl font-semiboild text-lightGray text-center lg:mb-10 mb-5">Hello! Welcome back</div>

                {!isChecking && showFeedBack && (
                   <p className="text-[#FF0000] text-[14px] mt-2">{feedBack}</p>
                 )}

                <div className=''>
                    <label>Email</label>
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
                <div className='mt-5'>
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
              {isChecking ? "Checking details..." : "Login"}
            </button>
          </div>

          <div>
          <div className="text-[14px] mt-3 text-center">
              Don’t have an account?{" "}
              <Link to={"/register"} className="text-green">
                Sign up
              </Link>
            </div>
            
            <div className="text-[14px] mt-1 text-center">Forgot password? Reset password</div>
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

export default Login