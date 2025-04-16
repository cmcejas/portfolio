'use client'

import Tiles from '../app/components/tiles';
import Contact from '../app/components/contact';
import {
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillGithub, 
  AiFillInstagram
} from 'react-icons/ai';
import { FaSquareXTwitter } from "react-icons/fa6";
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
      <main className="px-2 bg-gradient-to-b from-bgc1 to-bgc2 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="flex justify-between invisible md:visible md:py-10 md:mb-8 lg:mb-10">
            <h1 className="text-xl text-white fade-in-up">developed by cmcejas</h1>

            <ul className="flex items-center">

            <li className="fade-in-up">
              <a className="flex items-center px-4 py-2 ml-8 space-x-2 text-white transition-transform duration-300 rounded-md bg-slate-700 hover:transform hover:-translate-y-1" href="Resume.pdf" target="_blank">
                <span>My Resume</span>
                <FiExternalLink className="text-2xl"/>
              </a>
            </li>

            </ul>
          </nav>
          <div className="px-6 md:p-6">
            <h2 className="md:text-center fade-in-up text-[42px] md:py-2 bg-clip-text text-transparent text-white font-extrabold md:font-medium font-poppins md:text-6xl">Carlos Manuel <span className="font-bold">Cejas</span></h2>
            <br></br>
              <h3 className="text-2xl md:text-center fade-in-up md:py-2 md:text-3xl text-slate-300">
                <div className="text-teal-300">
                  <Typewriter
                    options={{
                      strings: ['Senior High School Student', 'Bot Programmer', 'Web-App Developer', 'DECA State Qualifier', 'NHS Member', 'Youth and Government Treasurer', 'Jazz Band Guitarist', 'Club and HS Soccer Player'],
                      autoStart: true,
                      loop: true,
                    }}/>
                  </div>
                Computer Science Focus
              </h3>
            <p className="max-w-2xl py-5 mx-auto text-lg leading-8 text-gray-400 md:text-center fade-in-up md:text-xl md:pt-8">
            I am a high school student focused on computer science. 
            My interest began at a young age as I started to program in Python since I was 8 years old. 
            I am always learning more in the computer science field and am excited to create new groundbreaking projects. 
            </p>
          </div>
          <div className="flex justify-center gap-12 pt-3 text-5xl fade-in-up md:gap-16 text-slate-700">
            <a target="_blank" href="https://github.com/cmcejas">
              <AiFillGithub className="duration-200 ease-in-out cursor-pointer hover:rotate-6 hover:text-6xl"/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/cmcejas/">
              <AiFillLinkedin href="" className="duration-200 ease-in-out cursor-pointer hover:rotate-6 hover:text-6xl"/>
            </a>
            <a target="_blank" href="https://x.com/cmcejas">
              <FaSquareXTwitter href="" className="duration-200 ease-in-out cursor-pointer hover:rotate-6 hover:text-6xl"/>
            </a>
            <a target="_blank" href="https://www.instagram.com/cmcejas_/">
              <AiFillInstagram href="" className="duration-200 ease-in-out cursor-pointer hover:rotate-6 hover:text-6xl"/>
            </a>
          </div>

          <li className="flex justify-center mt-20 md:mt-0 md:hidden fade-in-up">
            <a className="flex items-center py-3 space-x-2 text-xl text-white transition-transform duration-300 rounded-lg bg-slate-700 px-7 hover:transform hover:-translate-y-1" style={{ boxShadow: '0 0 23px rgba(200, 200, 200, 0.2)' }} href="Resume.pdf" target="_blank">
              <span>My Resume</span>
              <FiExternalLink className="text-2xl"/>
            </a>
          </li>
          
        <div className="flex justify-center invisible text-4xl fade-in-up text-slate-400 pt-20 lg:visible">
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
