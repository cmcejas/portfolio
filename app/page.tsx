import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillGithub, 
  AiFillInstagram
} from 'react-icons/ai';
import Image from 'next/image';
import coding from '../public/coding.png';
import code from '../public/code.png';
import education from '../public/education.png'
import consulting from '../public/consulting.png';
import os from '../public/os.png';
import briefcase from '../public/briefcase.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import resume from '../public/resume.pdf';
import { link } from 'fs';

export default function Home() {
  return (
    <div>
      <main className=" bg-gradient-to-b from-bgc1 to-bgc2 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl text-white">Developed by cmcejas</h1>

            <ul className="flex items-center">

              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="../public/resume.pdf" download>Resume</a>
              </li>

            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 bg-clip-text text-transparent text-white font-medium font-poppins md:text-6xl">Carlos Manuel <span className="font-bold">Cejas</span></h2>
            <h3 className="text-2xl py-2 md:text-3xl text-slate-300">High School Student - Computer Science</h3>
            <p className="text-md py-5 leading-8 text-gray-400 md:text-xl md:pt-8 max-w-lg mx-auto">
            I am a high school student focused on computer science. 
            My interest began at a young age as I started to program in Python since I was 8yrs old. 
            I am always learning more in the computer science field and am excited to create new projects. 
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-slate-700">
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
        </section>

        {/* second page */}

        <section>
          <div>
            <h3 className="text-5xl py-1 text-white font-bold">About Me</h3>
          </div>

          <div className="lg:flex gap-10">

            <div className="text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
            <Image src={education} width={250} height={250} className="mx-auto pb-3"/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-white">
                Education
              </h3>
              <p className="py-2 text-slate-300">
                High School Student
              </p>
              <h4 className="py-3 text-teal-500">Relevant Courses</h4>
              
              <p className="text-gray-400 py-1">Programming I (Python)</p>
              <p className="text-gray-400 py-1">AP Computer Science A (Java)</p>
              <p className="text-gray-400 py-1">AP Calc AB/BC</p>
              <p className="text-gray-400 py-1">Trig/Pre-Calc Honors</p>
              <p className="text-gray-400 py-1">Algebra II Honors</p>
              <p className="text-gray-400 py-1">Engineering Design IS</p>


            </div>

            <div className="text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
            <Image src={code} width={150} height={150} className="py-10 mx-auto"/>
              <h3 className="text-lg font-medium pt-9 pb-2 text-white">
                Programming Languages
              </h3>
              <h4 className="py-3 text-teal-500">I am fluent in these.</h4>
              
              <p className="text-gray-400 py-1">Python</p>
              <p className="text-gray-400 py-1">Java</p>
              <p className="text-gray-400 py-1">HTML</p>
              <p className="text-gray-400 py-1">CSS</p>
              <p className="text-gray-400 py-1">ReactJS</p>
              <p className="text-gray-400 py-1">TailwindCSS</p>
              <p className="text-gray-400 py-1">NextJS</p>


            </div>

            <div className="text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
            <Image src={os} width={218} height={250} className="mx-auto pt-3"/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-white">
                Operating Systems
              </h3>

              <h4 className="py-2 text-teal-500">In order from most to least used.</h4>
              
              <p className="text-gray-400 py-1">Windows</p>
              <p className="text-gray-400 py-1">Ubuntu based distributions</p>
              <p className="text-gray-400 py-1">Arch based distributions</p>
              <p className="text-gray-400 py-1">Debian based distributions</p>
              <p className="text-gray-400 py-1">Mac OS</p>


            </div>

            <div className="lg:max-w-[22%] text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
            <Image src={briefcase} width={160} height={250} className="mx-auto pt-8"/>
              <h3 className="text-lg font-medium pt-16 pb-2 text-white">
                Experience
              </h3>

              <h4 className="py-2 text-teal-500">More Information on Resume.</h4>
              
              <p className="text-gray-400 py-1">
                <span className=" font-extrabold"> Drexel Digital Development</span>
                <br>
                </br>
                Worked alongside a team to develop <span className="font-bold"><a href="https://www.platepals.org/" target="_blank"> Plate Pals. </a></span>
              </p>
              <p className="text-gray-400 py-1">Mac OS</p>


            </div>

          </div>
        </section>
      </main>
    </div>
  )
}
