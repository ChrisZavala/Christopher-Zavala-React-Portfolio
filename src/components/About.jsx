import React from 'react';

const About = () => {
    return (
    <div name='about' className='w-full h-screen bg-[#636875] text-[white]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#58C0A9]'>
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Christopher Zavala. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software full stack applications that improve
              the lives of those around me. I am thoughtful and extremely diligent about the projects that I create.
              I also have an electrical engineering degree, so I have a vastly diverse technical background. </p>  
            </div>
          </div>
          
      </div>
    </div>
  );
};



export default About;