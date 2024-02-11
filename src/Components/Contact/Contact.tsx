"use Client"

import Container from '@/Share/Container';
import React from 'react';
import { FaMailchimp, FaPhone} from 'react-icons/fa6';

const Contact = () => {
    return (
        <div id='contact' className='py-10'>
            <Container>
                  <div className='block md:flex justify-between w-full'>
                      <div className='space-y-4 flex-1'>
                        <h1 className='text-xl md:text-2xl lg:text-3xl text-[#27A1B0] '>Our Vision</h1>
                        <p className='w-full md:w-3/5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga temporibus numquam iusto fugit nulla, Et voluptatem velit sint perspiciatis, accusamus voluptates!</p>
                             <ul className='space-y-3'>
                                <li className='flex gap-1 text-xl'><FaPhone/>+827346872342</li>
                                <li className='flex gap-1 text-xl'><FaMailchimp/>info.nexus.weaver@gmail.com</li>
                                <li>BD , Dhaka Bangladesh </li>
                             </ul>
                      </div>
                      <div className=' space-y-2 '>
                        <strong className='text-xl md:text-2xl lg:text-4xl font-bold capitalize text-[#27A1B0]'>lets chat</strong>
                        <h1 className='text-sm md:text-xl lg:text-2xl  '>send a message</h1>
                        <form className='space-y-6 w-full' action="">
                              <div className='block md:flex gap-5'>
                                  <input  type="text" placeholder='Name' className='w-full border px-6 py-2 rounded-full focus:outline-none ' />

                                  <input type="text" placeholder='Email' className='w-full border px-6 py-2 rounded-full focus:outline-none ' />
                              </div>
                              <input type="text" placeholder='Subject' className='w-full border px-6 py-2 rounded-full focus:outline-none ' />

                              <textarea name="massage" id=""  className=' w-full block border px-6 py-2  rounded-xl focus:outline-none '></textarea>

                              <button type='submit' className='bg-[#27A1B0] px-12 py-2 text-white rounded-md'>Lets talk</button>
                        </form>
                      </div>
                  </div>
            </Container>
        </div>
    );
};

export default Contact;