import React from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  return (
    <nav className='w-full p-auto p-8 overflow-hidden bg-white rounded-3xl'>
          <ul className=' flex justify-between items-center'>
            <li>
              <a href="#home" className=' font-highlights text-3xl' >
                SkillSwap
              </a>
            </li>
            <div className='flex justify-center items-center gap-12 font-body'>
              <li>
                <Link
                  to="/dashboard"
                  className='  hover:text-primary'>
                  Home
                </Link>
              </li><li>
                <Link
                  to="/myswap"
                  className=' hover:text-primary'>
                  MySwap
                </Link>
              </li>
              <li
                className=' p-2 rounded-full bg-primary font-bold'>
                <Link
                  to="/userprofile">
                  <CgProfile className='text-3xl' />

                </Link>
              </li>
            </div>
          </ul>
        </nav>
  )
}

export default Navbar
