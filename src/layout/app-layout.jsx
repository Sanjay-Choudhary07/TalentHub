import Header from '@/components/header';
import React from 'react';
import { Outlet } from 'react-router-dom';
const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      <main className='min-h-screen container mx-auto px-12'>
        <Header/>
        <Outlet/>
      </main>
      <div className='text-center p-10 bg-gray-800 mt-10'>Made with 💗 Sanjay</div>
    </div>
  )
}

export default AppLayout;
