import React,{ useState } from 'react'
import {FaBars, FaTimes, FaGithub} from 'react-icons/fa';
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
     
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <h1 className='text-2xl' style={{width:'50px'}} alt="logo">Karimi</h1>
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
            <li><Link to='home' smooth={true} duration={1000}>Home</Link></li>
            <li><Link to='about' smooth={true} duration={1000}>About</Link></li>
            <li><Link to='skills' smooth={true} duration={1000}>Skills</Link></li>
            <li><Link to='work' smooth={true} duration={1000}>Work</Link></li>
            <li><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl  hover:border-b-white'>
                <Link onClick={handleClick} to='home' smooth={true} duration={1000}>Home</Link>
            </li>
            <li className='py-6 text-4xl  hover-'>
                <Link onClick={handleClick} to='about' smooth={true} duration={1000}>About</Link>
            </li>
            <li className='py-6 text-4xl  hover-'>
                <Link onClick={handleClick} to='skills' smooth={true} duration={1000}>Skills</Link>
            </li>
            <li className='py-6 text-4xl  hover-'>
                <Link onClick={handleClick} to='work' smooth={true} duration={1000}>Work</Link>
            </li>
            <li className='py-6 text-4xl  hover-'>
                <Link onClick={handleClick} to='contact' smooth={true} duration={1000}>Contact</Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/karimi-wahid?tab=repositories' >Github <FaGithub size={30}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar