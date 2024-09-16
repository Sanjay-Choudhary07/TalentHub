import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo-lg.png';
import {Button} from './ui/button'
const Header = () => {
  return (
    <nav className='py-4 flex justify-between items-center'>
      <Link>
      <img src={logo} className='h-20'/>
      </Link>
      <Button varient="outline">Login</Button>
    </nav>
  )
}

export default Header;
