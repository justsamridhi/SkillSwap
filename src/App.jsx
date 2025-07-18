import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import introImg from './assets/intro.jpg';
import { BsPerson } from "react-icons/bs";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { PiQuotesFill } from "react-icons/pi";
import { Link } from 'react-router-dom';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav className='w-11/12 m-auto my-4'>
          <ul className=' flex justify-between items-center'>
            <li>
              <a href="#home" className=' font-highlights text-3xl' >
                SkillSwap
              </a>
            </li>
            <div className='flex justify-center items-center gap-12 font-body'>
              <li>
                <Link
                  to="/login"
                  className=' font-bold hover:text-primary'>
                  Login
                </Link>
              </li>
              <li
                className=' p-4 rounded-2xl bg-primary font-bold'>
                <Link
                  to="/signup">
                  SignUp
                </Link>
              </li>
            </div>
          </ul>
        </nav>
        <section className='h-full py-60 w-full m-auto flex justify-center items-center bg-tertiary'>
          <div className='flex lg:flex-row flex-col lg:gap-16 gap-24 justify-around items-center w-full '>
            <div className='text-left gap-6 flex flex-col'>
              <h1 className='text-7xl text-primary font-highlights'>A community where skills <br /> connect.</h1>
              <p className=' font-body'>Join learners and mentors in a space where people teach what <br /> they know and learn what they love — together.
              </p>
              <div className='flex gap-6'>
                <Link
                to='/signup'
                >
                <button
                  className='bg-primary rounded-3xl p-4 text-white font-body relative top-auto scale-1 hover:scale-125 transition-all ease-in-out'
                >
                  Get Started
                </button>
                </Link>
                <button className='border-primary border-2 text-primary font-semibold rounded-3xl p-4 font-body relative scale-1 top-auto hover:scale-110 transition-all ease-in-out'>
                  <a href="#works">
                  How it works
                  </a>
                  </button>
              </div>
            </div>
            <img src={introImg} alt="" className='h-85 w-96 rounded-xl rotate-6 hover:-rotate-6 transition-all ease-in drop-shadow-lg shadow-black' />
          </div>
        </section>
        <section id='works' className=' scroll-smooth h-full w-full m-auto py-40'>
          <div className='flex flex-col items-center gap-6 justify-center w-fit m-5'>
            <h1 className=' text-4xl lg:text-6xl font-bold font-body'>How <span className='text-primary font-highlights font-light' >SkillSwap</span> Works ?</h1>
            <p className='font-body'>Three simple steps to start your learning journey</p>
            <div className='flex lg:flex-row flex-col gap-8 justify-center items-center lg:w-4/6  '>
              <div className='p-6 m-6 flex flex-col justify-center items-center w-32lg:w-1/4 text-center gap-4 relative bottom-0 hover:bottom-4 transition-all ease-in-out h-80'>
                <div className='flex justify-center bg-gradient-to-tl from-blue-500 to-primary p-6 items-center rounded-full'>
                  <BsPerson className='text-5xl text-white' />
                </div>
                <h1 className='font-body text-xl font-semibold'>Create Your Profile</h1>
                <p className='font-body'>Set up your profile and showcase the skills you want to teach and learn. It takes just 2 minutes.</p>
              </div>
              <div className='p-6 m-6 flex flex-col justify-center items-center w-32lg:w-1/4 text-center gap-4 relative bottom-0 hover:bottom-4 transition-all ease-in-out h-80'>
                <div className='flex justify-center bg-gradient-to-br from-blue-500 to-primary p-6 items-center rounded-full'>
                  <IoMdStarOutline className='text-5xl text-white' />

                </div>
                <h1 className='font-body text-xl font-semibold'>List your skills</h1>
                <p className='font-body'>Add skills you can teach and ones you want to learn. From coding to cooking , every skill matters.</p>
              </div>
              <div className='p-6 m-6 flex flex-col justify-center items-center w-32lg:w-1/4 text-center gap-4 relative bottom-0 hover:bottom-4 transition-all ease-in-out h-80'>
                <div className='flex justify-center bg-gradient-to-tl from-blue-500 to-primary p-6 items-center rounded-full'>
                  <MdOutlineEmail className='text-5xl text-white' />


                </div>
                <h1 className='font-body text-xl font-semibold'>Connect & Swap</h1>
                <p className='font-body'>Get matched with perfect skill partners and start exchanging knowledge through video calls or messages.</p>
              </div>
            </div>
          </div>
        </section>
        <section className=' h-full w-screen lg:h-full lg:w-full m-auto lg:py-40 lg:bg-tertiary'>
          <div className='flex flex-col items-center gap-10 justify-center'>
            <h1 className=' text-3xl lg:text-6xl font-bold font-body'>What our <span className='text-primary font-highlights font-light' >Community</span> Says ?</h1>
            <div className="p-4 w-full lg:w-4/6 flex flex-col lg:flex-row justify-center items-center gap-4">
              <div className="h-full bg-white p-8 rounded w-40lg:w-1/4 relative bottom-0 hover:bottom-4 transition-all ease-in-out">
                <PiQuotesFill className='text-3xl m-4' />
                <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="https://dummyimage.com/107x107" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                    <span className="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </a>
              </div>
              <div className="h-full bg-white p-8 rounded w-40lg:w-1/4 relative bottom-0 hover:bottom-4 transition-all ease-in-out">
                <PiQuotesFill className='text-3xl m-4' />
                <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="https://dummyimage.com/107x107" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                    <span className="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </a>
              </div>
              <div className="h-full bg-white p-8 rounded w-40lg:w-1/4 relative bottom-0 hover:bottom-4 transition-all ease-in-out">
                <PiQuotesFill className='text-3xl m-4' />
                <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="https://dummyimage.com/107x107" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                    <span className="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
