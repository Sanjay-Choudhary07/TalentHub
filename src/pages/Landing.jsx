import React from 'react'
import logo from '../assets/logo-lg.png'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

const companies = [
  { name: "amazon", path: amazonLogo, id: 1 },
  { name: "atlassian", path: atlassianLogo, id: 2 },
  { name: "google", path: googleLogo, id: 3 },
  { name: "ibm", path: ibmLogo, id: 4 },
  { name: "meta", path: metaLogo, id: 5 },
  { name: "microsoft", path: microsoftLogo, id: 6 },
  { name: "netflix", path: netflixLogo, id: 7 },
  { name: "uber", path: uberLogo, id: 8 },
];
import amazonLogo from '../assets/amazon.svg';
import atlassianLogo from '../assets/atlassian.svg';
import googleLogo from '../assets/google.png';
import ibmLogo from '../assets/ibm.svg';
import metaLogo from '../assets/meta.svg';
import microsoftLogo from '../assets/microsoft.svg';
import netflixLogo from '../assets/netflix.png';
import uberLogo from '../assets/uber.svg';
import Autoplay from 'embla-carousel-autoplay'
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
      <Carousel plugins={[Autoplay({delay:2000})]}
      className="w-full py-10"
    >
      <CarouselContent className='flex gap-5 sm:gap-20 items-center'>
        {companies.map(({name,id,path})=>{
          return(
            <CarouselItem key={id} className='basis-1/3 lg:basis-1/6'>
              <img src={path} alt={name} className='h-9 sm:h-14 object-contain'/>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
    </main>
  )
}

export default Landing
