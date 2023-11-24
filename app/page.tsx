'use client'

// test

import Tiles from '../app/components/tiles';
import Contact from '../app/components/contact';
import {
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillGithub, 
  AiFillInstagram
} from 'react-icons/ai';
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import {FiExternalLink} from 'react-icons/fi'
import Image from 'next/image';
import code from '../public/code.png';
import education from '../public/education.png'
import os from '../public/os.png';
import briefcase from '../public/briefcase.png';
import languages from '../public/languages.png';
import guitar from '../public/guitar.png';
import { link } from 'fs';
 
import { useState } from 'react'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="bg-bgc2" id="one">
      <main className=" bg-gradient-to-b from-bgc1 to-bgc2 px-2 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className=" invisible md:visible md:py-10 md:mb-8 lg:mb-10 flex justify-between">
            <h1 className="fade-in-up text-xl text-white">developed by cmcejas</h1>

            <ul className="flex items-center">

            <li className="fade-in-up">
              <a className="bg-slate-700 text-white px-4 py-2 rounded-md ml-8 hover:transform hover:-translate-y-1 transition-transform duration-300 flex items-center space-x-2" href="Resume.pdf" target="_blank">
                <span>My Resume</span>
                <FiExternalLink className="text-2xl"/>
              </a>
            </li>

            </ul>
          </nav>
          <div className="text-center px-6 md:p-10">
            <h2 className="fade-in-up text-4xl md:py-2 bg-clip-text text-transparent text-white font-extrabold md:font-medium font-poppins md:text-6xl">Carlos Manuel <span className="font-bold">Cejas</span></h2>
            <br></br>
              <h3 className="fade-in-up text-xl md:py-2 md:text-3xl text-slate-300">
                <p className="text-teal-300">
                  <Typewriter
                    options={{
                      strings: ['High School Student', 'Bot Programmer', 'Web-App Developer', 'DECA Member', 'NHS Ambassador', 'YAG Member', 'World Language Club Officer' ,'Jazz Band Guitarist', 'Club and HS Soccer Player'],
                      autoStart: true,
                      loop: true,
                    }}/>
                  </p>
                Computer Science Focus
              </h3>
            <p className="fade-in-up text-md text-balance py-5 leading-8 text-gray-400 md:text-xl md:pt-8 max-w-2xl mx-auto">
            I am a high school student focused on computer science. 
            My interest began at a young age as I started to program in Python since I was 8 years old. 
            I am always learning more in the computer science field and am excited to create new groundbreaking projects. 
            </p>
          </div>
          <div className="fade-in-up text-5xl flex justify-center gap-12 md:gap-16 pt-3 text-slate-700">
            <a target="_blank" href="https://github.com/cmcejas">
              <AiFillGithub className="cursor-pointer hover:rotate-6 hover:text-6xl duration-200 ease-in-out"/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/cmcejas/">
              <AiFillLinkedin href="" className="cursor-pointer hover:rotate-6 hover:text-6xl duration-200 ease-in-out"/>
            </a>
            <a target="_blank" href="https://x.com/cmcejas">
              <AiFillTwitterCircle href="" className="cursor-pointer hover:rotate-6 hover:text-6xl duration-200 ease-in-out"/>
            </a>
            <a target="_blank" href="https://www.instagram.com/cmcejas_/">
              <AiFillInstagram href="" className="cursor-pointer hover:rotate-6 hover:text-6xl duration-200 ease-in-out"/>
            </a>
          </div>

          <li className="mt-20 md:mt-0 md:hidden flex justify-center fade-in-up">
            <a className="bg-slate-700 text-xl text-white px-7 py-3 rounded-lg hover:transform hover:-translate-y-1 transition-transform duration-300 flex items-center space-x-2" style={{ boxShadow: '0 0 23px rgba(200, 200, 200, 0.2)' }} href="Resume.pdf" target="_blank">
              <span>My Resume</span>
              <FiExternalLink className="text-2xl"/>
            </a>
          </li>
          
        <div className="flex justify-center fade-in-up text-slate-400 text-4xl pt-28 invisible lg:visible">
          <a href="#two"><BsFillArrowDownCircleFill className="animate-bounce" /></a>
        </div>
          
        </section>

        {/* second page */}

        <Tiles />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </main>

      {/* third page */}

      <Contact />

    </div>
  )
}
