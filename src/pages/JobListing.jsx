import { useSession } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { getJobs } from '@/api/apiJobs';
const JobListing = () => {
   const {session} = useSession();
   const fetchJobs = async()=>{
    const supabaseAccessToken = await session.getToken({
      template:"supabase",
    });
    const data = await getJobs(supabaseAccessToken);
    console.log(data);
   };
   useEffect(()=> {}, []);
  return (
    <div>
      JobListing
    </div>
  )
}

export default JobListing
