import React from 'react'
import logo from '../assets/logo-lg.png'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
const Landing = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-10'>
      <section className='text-center'>
        <h1 className='flex flex-col items-center justify-center gradient-title
         text-4xl font-extrabold sm:text-6xl lg:text-8xl'>
          Find Your Dream Job {" "}
          <span className='flex items-center gap-2 sm:gap-6'>
            and get {" "}
            <img src={logo} alt='hirred logo' className='h-14 sm:h-24 lg:h-32'/>
          </span>
        </h1>
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
          Explore thousands of job listings or find the perfect candidate</p>
      </section>
      <div className='flex gap-6 justify-center'>
        <Link to='/jobs'>
        <Button variant="blue" size="xl">Find Jobs</Button>
        </Link>
        <Link to='/post-job'>
        <Button variant="destructive" size="xl">Post a Job</Button>
        </Link>
      </div>
      
    </main>
  )
}

export default Landing
