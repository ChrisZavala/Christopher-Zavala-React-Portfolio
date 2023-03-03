import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#636875] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/4534228e-af38-4ee5-95a4-9fbb9a8d7937" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#58C0A9] text-[white]'>Contact</p>
                <p className='text-gray-300 py-4'>Contact Me for any question you might have here on this form, or email me: </p>
            </div>
            <input className='bg-[white] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[white]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[white] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#58C0A9] hover:border-[#58C0A9] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact