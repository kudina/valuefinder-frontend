import React from 'react'
import ClientDashboard from './ClientDashboard'
import FreelancerDashboard from './FreelancerDashboard'
import { useGetCurrentUserQuery } from '../../features/api/apiSlice'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../features/api/userSlice'



const Dashboard = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user);

  console.log("new user",user)
 
 
  const { data: currentUser, isSuccess, isFetching } = useGetCurrentUserQuery({}, { refetchOnMountOrArgChange: true });
  useEffect(()=>{
    currentUser
  })
  dispatch(setUser(currentUser))
  return (
   <>
   {
    currentUser?.userType === "Client" ?  <ClientDashboard/> : <FreelancerDashboard/>
   }
   </>
  )
}

export default Dashboard