import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import logo from '../assets/logo-lg.png';
import {Button} from './ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react';
const Header = () => {
  const [showSignin, setShowSignin] = useState(false);
  const [search, setSearch] = useSearchParams();
  const {user} = useUser();
  useEffect(()=>{
    if(search.get("sign-in")){
      setShowSignin(true);
    }
  },[search])
  const handleOverlayClick = (e)=>{
       if(e.target === e.currentTarget){
        setShowSignin(false);
        setSearch({});
       }
  }
  return (
    <>
    <nav className='py-4 flex justify-between items-center'>
      <Link>
      <img src={logo} className='h-20'/>
      </Link>
      <div className='flex gap-8'>
      <SignedOut>
      <Button variant="outline" onClick={()=>setShowSignin(true)}>Login</Button>
      </SignedOut>
      <SignedIn>
        {user?.unsafeMetadata?.role === "recuriter" && (
          <Link to="/post-job">
        <Button variant="destructive" className="rounded-full">
        <PenBox size={20} className='mr-2'/>
          Post a Job
        </Button>
        </Link>)}
        <UserButton appearance={{
          elements:{
            avatarBox:"w-10 h-10",
          },
        }}>
          <UserButton.MenuItems>
            <UserButton.Link
             label='My Job'
             labelIcon={<BriefcaseBusiness size={15}/>}
             href='/my-jobs'
            />
            <UserButton.Link
             label='Saved Job'
             labelIcon={<Heart size={15}/>}
             href='/saved-jobs'
            />
          </UserButton.MenuItems>
          </UserButton>
      </SignedIn>
      </div>      
    </nav>
      {showSignin && (
      <div onClick={handleOverlayClick} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <SignIn
       signUpForceRedirectUrl='/onboarding'
       fallbackRedirectUrl='/onboarding'
      />
      </div>
    )}
    </>
  )
}

export default Header;
