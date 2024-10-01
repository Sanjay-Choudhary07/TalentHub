import { getJobs } from '@/api/apiJobs';
import useFetch from '@/hooks/useFetch';
import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
const JobListing = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const[company_id, setCompany_id] = useState("");

  const {isLoaded} = useUser();
   const{
    fn:fnJobs,
    data:dataJobs,
    loading:loadingJobs,
   } = useFetch(getJobs,{
    location,
    company_id,
    searchQuery,
   });
   console.log(dataJobs);
   useEffect(()=>{
    if(isLoaded)  fnJobs();
   },[isLoaded, location, company_id, searchQuery]);
   if(!isLoaded){
    return <BarLoader className='mb-4' width={"100%"} color='#36d7b7'/>
  } 
  return (
    <div>
      JobListing
    </div>
  )
}

export default JobListing
