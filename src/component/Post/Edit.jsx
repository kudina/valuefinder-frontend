import Inputform from '../Input/Inputform';
import Selectform from '../Input/Selectform';
import Textarea from '../Input/Textarea'
import { useState } from 'react';
import {  useCreateJobMutation, useGetCurrentUserQuery, useUpdateJobpostMutation} from '../../features/api/apiSlice';
import { useLocation } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Edit =()=>{

  const dlocation = useLocation();
  const jobdata = dlocation.state;

  console.log("job",jobdata)

  const { data: currentUser, isSuccess } = useGetCurrentUserQuery();
    const [title, setTitle] = useState(jobdata.title)
    const [jobType, setJobType] = useState(jobdata.jobType)
    const [description, setDescription] = useState(jobdata.description)
    const [requiredExperence, setrRequiredExperence] = useState({name:'react native'})
    const [salaryType, setSalaryType] = useState(jobdata.salaryType)
    const [estTime, setEstTime] = useState(jobdata.estTime)
    const [salaryRange, setSalaryRange] = useState(jobdata.salaryRange)
    const [salary, setSalary] = useState(jobdata.salary)
    const [feedBack, setFeedBack] = useState("")
    const [showFeedBack, setShowFeedBack] = useState(false)
    const [location, setLocation] = useState(jobdata.location)

 
   

    const [updateJobpost, { isLoading: isChecking }] = useUpdateJobpostMutation();


    const handleSubmit = async ()=>{
        const payload ={
            id:jobdata._id,
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
           if(salary > currentUser.balance){
            alert("please fund your account with the amount that corresponds with your budget")
           }else{
            const response = await updateJobpost(payload);
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
          <ToastContainer />
            <p className="text-left text-xl mt-10">Edit Job Post</p>
            <div className='mt-2 mb-2'>{feedBack}</div>
            <div className=" md:w-[30%] w-full px-5 mb-20">
                <Inputform
                  
                   label="Job Title"
                   placeholder={jobdata?.title}
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
                    placeholder={jobdata?.title}
                    onChange={ (e) => {setJobType(e.target.value)}}
                    options={Jobtype}
                    />
                </div>
                <div>
                <Textarea
                   label="Job Description"
                   placeholder={jobdata.description}
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
                   label="Salary"
                   placeholder={jobdata.salary}
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
            <button onClick={handleSubmit} className="w-full bg-green text-white p-3 rounded-[5px] h-[55px] ">
              {isChecking ? "Please wait..." : "Update Job post"}
            </button>
          </div>


            
            </div> 
            </div>
    )
}

export default Edit