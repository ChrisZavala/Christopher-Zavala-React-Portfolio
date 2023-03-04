import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#636875]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#58C0A9]'></p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[white]'>
                    Christopher Zavala
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#58C0A9]'>
                    Full Stack Developer
                </h2>
                <p className='text-[white] py-4 max-w-[700px]'>
                    I’m a MERN Full-Stack Developer. Currently, I’m focused on
                    building responsive full-stack web applications. I am also an Electrical Engineer.
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#58C0A9] hover:border-[#58C0A9]'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home
