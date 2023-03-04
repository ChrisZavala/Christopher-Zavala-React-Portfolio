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
              <p>Christopher Zavala, here. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software full stack applications that improve
              the lives of those around me. I am thoughtful and extremely diligent about the projects that I create.
              I also have an electrical engineering degree, so I have a vastly diverse technical background. I will be graduating from my coding 
              bootcamp from The University of Texas at Austin, by mid March 2023.
              </p><br></br> 
              
              <p>My goal from this journey is to refine my craft and skill in this coding bootcamp to become a MERN full-stack web developer with the skills 
              necessary to enjoy my new career but also bring the skills that I have learned through all my life experiences.  
              I have a Bachelor’s of Science in Electrical Engineering and I also have a love for the engineering process and solving problems.
              </p><br></br>
              
             <p>With this brief introduction that I have told you, I hope to have given you a little understanding about what I like to do and love to create. 
              I hope you enjoy this site as much as I have enjoyed the process of bringing this site to life! Thank you.
              </p>  
            </div>
          </div>
          
      </div>
    </div>
  );
};



export default About;