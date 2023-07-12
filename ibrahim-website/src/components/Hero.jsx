import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'


const Hero = () => {
  return (
    <div name="home" className='w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full space-y-3'>
            <h1 className='text-4xl font-bold'>hi world! 👋</h1>
            <h1 className='text-2xl font-bold'>i'm Abdirahman Ibrahim</h1>
            <p className='text-xl '>
            i consider myself a multidisciplinary individual constantly seeking new knowledge. my ultimate aspiration lies in the realm of creating a sustainable future, 
            where i strive to solve pressing challenges and pave the way for innovative solutions. 
            </p>
            <hr className="h-px my-8 bg-gray-200 md:divide-y-2"></hr>
            <div className=''>
                <p className='text-xl font-bold'>
                    now working on:
                    <li className='text-base font-normal'>building <a href='https://www.platefyco.com' className='text-blue-700 hover:underline' target='blank'>Platefy</a>, a foodtech startup that is connecting chefs and suppliers</li>
                    <li className='text-base font-normal'>learning algorithms and data structures, computer architecture, and distributed systems</li>
                </p>
                <p className='text-xl font-bold'>
                    past:
                    <li className='text-base font-normal'>studied Psychology at UNC (gdtbath)</li>
                    <li className='text-base font-normal'>built my first software <a href='https://www.youtube.com/watch?v=zlxrQbq41dc&t=4s&ab_channel=PhpAbdi' className='text-blue-700 hover:underline' target='blank'>AbdiNet</a> at ~11 years old and demo'd it on YT (: </li>
                    <li className='text-base font-normal'></li>
                </p>
            </div>
            <div className='rounded-md bg-lime-100 h- w-full '>
                <ul className='flex flex-row gap-5 justify-center'>
                    <button className='border border-slate-300 hover:border-slate-400 bg-white rounded-lg text-black flex px-4 py-2 gap-2 items-center'><AiOutlineTwitter size={22} />twitter</button>
                    <button className='border border-slate-300 hover:border-slate-400 bg-white rounded-lg text-black flex px-4 py-2 gap-2 items-center'><AiFillGithub size={22} />github</button>
                    <button className='border border-slate-300 hover:border-slate-400 bg-white rounded-lg text-black flex px-4 py-2 gap-2 items-center'><AiFillLinkedin size={22} />linkedin</button>
                </ul>
            </div>
        </div>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full space-y-3'>
        </div>
    </div>
  )
}

export default Hero