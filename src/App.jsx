import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import introImg from './assets/intro.jpg';
import { BsPerson } from "react-icons/bs";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav className='w-11/12 m-auto my-4'>
          <ul className=' flex justify-between items-center'>
            <li><a href="#home" className=' font-highlights text-3xl' >SkillSwap</a></li>
            <div className='flex justify-center items-center gap-12 font-body'>
              <li><a href="#about">Login</a></li>
              <li className=' p-4 rounded-2xl bg-primary'><a href="#contact">SignUp</a></li>
            </div>
          </ul>
        </nav>
        <section className='h-full py-60 w-full m-auto flex justify-center items-center bg-tertiary'>
          <div className='flex gap-16 justify-around items-center w-full '>
            <div className='text-left gap-6 flex flex-col'>
              <h1 className='text-7xl text-primary font-highlights'>A community where skills <br /> connect.</h1>
              <p className=' font-body'>Join learners and mentors in a space where people teach what <br /> they know and learn what they love — together.
              </p>
              <div className='flex gap-6'>
                <button className='bg-primary rounded-3xl p-4 text-white font-body relative top-auto hover:text-xl transition-all ease-in-out'>Get Started </button>
                <button className='border-primary border-2 text-primary font-semibold rounded-3xl p-4 font-body relative top-auto hover:text-xl transition-all ease-in-out'>How it works</button>
              </div>
            </div>
            <img src={introImg} alt="" className='h-85 w-96 rounded-xl rotate-6 hover:rotate-0 transition-all ease-in' />
          </div>
        </section>
        <section className='h-full w-full m-auto py-60'>
          <div className='flex flex-col items-center gap-6 justify-center'>
            <h1 className='text-6xl font-bold font-body'>How <span className='text-primary font-highlights font-light' >SkillSwap</span> Works ?</h1>
            <p className='font-body'>Three simple steps to start your learning journey</p>
            <div className='flex gap-8 justify-center items-center  '>
              <div className='p-6 m-6 flex flex-col justify-center items-center w-1/4 text-center gap-4'>
                <div className='flex justify-center bg-primary p-6 items-center rounded-full'>
                  <BsPerson className='text-5xl text-white'  />
                </div>
                <h1 className='font-body text-xl font-semibold'>Create Your Profile</h1>
                <p className='font-body'>Set up your profile and showcase the skills you want to teach and learn. It takes just 2 minutes.</p>
              </div>
              <div className='p-6 m-6 flex flex-col justify-center items-center w-1/4 text-center gap-4'>
                <div className='flex justify-center bg-gradient-to-br from-blue-500 to-primary p-6 items-center rounded-full'>
                  <IoMdStarOutline className='text-5xl text-white'  />

                </div>
                <h1 className='font-body text-xl font-semibold'>List your skills</h1>
                <p className='font-body'>Add skills you can teach and ones you want to learn. From coding to cooking , every skill matters.</p>
              </div>
              <div className='p-6 m-6 flex flex-col justify-center items-center w-1/4 text-center gap-4'>
                <div className='flex justify-center bg-gradient-to-tl from-blue-500 to-primary p-6 items-center rounded-full'>
                  <MdOutlineEmail className='text-5xl text-white'  />


                </div>
                <h1 className='font-body text-xl font-semibold'>Connect & Swap</h1>
                <p className='font-body'>Get matched with perfect skill partners and start exchanging knowledge through video calls or messages.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
