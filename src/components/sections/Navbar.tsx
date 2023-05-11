import Link from 'next/link'
import React, { useState} from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <nav className='w-full flex justify-between items-center h-12 md:h-20 px-3 md:px-[20px] lg:px-[50px]'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl'>
        <Link href='/'>2604</Link>
      </h1>
      <ul className='hidden md:flex uppercase'>
        <Link className='px-6 hover:text-[#f26e49] ease-in-out duration-500' href='#hero'>Home</Link>
        <Link className='px-6 hover:text-[#f26e49] ease-in-out duration-500' href='#about'>About</Link>
        <Link className='px-6 hover:text-[#f26e49] ease-in-out duration-500' href='#project'>Projects</Link>
        <Link className='px-6 hover:text-[#f26e49] ease-in-out duration-500' href='#contact'>Contact</Link>
        <div className='flex gap-5 ml-0 md:ml-24 lg:ml-48 xl:ml-96'>
            <Link target='_blank' href="https://www.linkedin.com/in/onakoyaoluwakayode/">
                <LinkedInIcon />
            </Link>
            <Link target='_blank' href="https://github.com/onakoyakayode">
                <GitHubIcon />
            </Link>
        </div>
      </ul>
      <div className='cursor-pointer block md:hidden' onClick={handleNav}>
        {nav ? <CloseIcon/> : <MenuIcon />}
      </div>
      <div className={nav ? 'fixed top-10 md:top-20 border-t left-0 w-[100%] z-10 h-full bg-[#101010] text-white ease-in-out duration-500' : 'fixed z-10 bg-[#101010] left-[-100%]'}>
        <ul className='uppercase w-[100%] bg-[#101010] flex flex-col items-center'>
            <li onClick={handleNav} className='py-12 hover:text-[#f26e49]'><Link href='#hero'>Home</Link></li>
            <li onClick={handleNav} className='py-12 hover:text-[#f26e49]'><Link href='#about'>About</Link></li>
            <li onClick={handleNav} className='py-12 hover:text-[#f26e49]'><Link href='#project'>Projects</Link></li>
            <li onClick={handleNav} className='py-12 hover:text-[#f26e49]'><Link href='#contact'>Contact</Link></li>
            <div className='flex gap-5 ml-0 py-12'>
                <Link href="">
                    <LinkedInIcon />
                </Link>
                <Link href="">
                    <GitHubIcon />
                </Link>
            </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
