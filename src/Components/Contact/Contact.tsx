"use Client"

import Container from '@/Share/Container';
import React from 'react';
import { FaPhone, FaVoicemail } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div id='contact' className='py-10'>
            <Container>
                  <div className='flex justify-between w-full'>
                      <div className=''>
                        <h1 >Our Vision</h1>
                        <p className='w-full'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga temporibus numquam iusto fugit nulla, Et voluptatem velit sint perspiciatis, accusamus voluptates!</p>
                             <ul>
                                <li><FaPhone/>+827346872342</li>
                                <li><FaVoicemail/>info.nexus.weaver@gmail.com</li>
                                <li>BD , Dhaka </li>
                             </ul>
                      </div>
                      <div>
                        <strong>lets chat</strong>
                        <h1>send a message</h1>
                        <form className='space-y-6 w-full' action="">
                              <div className='block md:flex gap-5'>
                                  <input  type="text" placeholder='Name' className='w-full border px-6 py-2 rounded-full focus:outline-none ' />

                                  <input type="text" placeholder='Email' className='w-full border px-6 py-2 rounded-full focus:outline-none ' />
                              </div>
                              <input type="text" placeholder='Subject' className='w-full border px-6 py-2 rounded-full focus:outline-none ' />

                              <textarea name="massage" id="" cols={100} rows={5} className=' border px-6 py-2  rounded-xl focus:outline-none '></textarea>

                              <button type='submit' className='bg-[#27A1B0] px-6 py-2 text-white rounded-md'>Lets talk</button>
                        </form>
                      </div>
                  </div>
            </Container>
        </div>
    );
};

export default Contact;