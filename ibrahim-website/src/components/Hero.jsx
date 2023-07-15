import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
import Avatar from '../assets/avi.png'


const Hero = () => {
  return (
    <div name="home" className='mt-10'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-3'>
            <div className=''>
                <img src={Avatar} className='rounded-full' alt="" style={{width:'180px'}}></img>
            </div>
            <h1 className='text-4xl font-bold'>hi world! 👋</h1>
            <h1 className='text-2xl font-bold'>i'm Abdirahman Ibrahim</h1>
            <h1 className=' w-14 h-2 md:bg-lime-100'></h1>
            <p className='text-xl '>
            currently in Chapel Hill, NC studying Psychology at UNC. i build products that people use. 
            </p>
            <p className='text-xl '>
            i consider myself a multidisciplinary individual constantly seeking new knowledge. my ultimate aspiration lies in the realm of creating a sustainable future, 
            where i strive to solve pressing challenges and pave the way for innovative solutions. 
            </p>
            <p className='text-xl '>
            looking for people to connect with and build meaningful projects. contact me!
            </p>
            <hr className="h-px my-3 bg-gray-200 md:divide-y-2"></hr>
            <div className=''>
                <p className='text-xl font-bold'>
                    now working on:
                    <li className='text-base font-normal'>building <a href='https://www.platefyco.com' className='text-blue-700 hover:underline' target='blank'>Platefy</a>, a foodtech startup that is connecting chefs and suppliers</li>
                    <li className='text-base font-normal'>learning algorithms and data structures, computer architecture, and distributed systems</li>
                    <li className='text-base font-normal'>reading up on entrepreneurship, leadership, economics, etc </li>
                </p>
                <p className='text-xl font-bold'>
                    others:
                    <li className='text-base font-normal'>built a social media network, <a href='/' className='text-blue-700 hover:underline' target='blank'>AbdiNet</a>, for my primary school classmates inspired after ZuckNet</li>
                    <li className='text-base font-normal'>sold digital (game) products online as a teenager at $1K MRR</li>
                </p>
            </div>
            <div className='flex flex-row gap-3 justify-center bg-lime-100'>
                <button className='border border-slate-300 hover:border-slate-400 bg-white rounded-lg text-black flex px-2 py-2 gap-2 items-center'><AiOutlineTwitter size={23} style={{color: '#00acee'}}/>
                    <a href='https://www.twitter.com/abdiths' target='blank'>twitter</a>
                </button>
                <button className='border border-slate-300 hover:border-slate-400 bg-white rounded-lg text-black flex px-2 py-2 gap-2 items-center'><AiFillLinkedin size={23} style={{color: '#0072b1'}}/>
                    <a href='https://www.linkedin.com/' target='blank'>linkedin</a>
                </button>
                <button className='border border-slate-300 hover:border-slate-400 bg-white rounded-lg text-black flex px-2 py-2 gap-2 items-center'><AiFillGithub size={23} style={{color: ''}}/>
                    <a href='https://www.github.com/' target='blank'>github</a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero