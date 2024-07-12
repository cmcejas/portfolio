import Image from 'next/image';
import code from 'public/code.png';
import education from 'public/education.png'
import os from 'public/os.png';
import briefcase from 'public/briefcase.png';
import languages from 'public/languages.png';
import guitar from 'public/guitar.png';

const Tiles = () => {
    return(

        <section id="two" className="pt-30 md:pt-0 lg:pt-0">
        <br className="invisible md:visible"></br>
        <div>
          <h3 className="py-1 text-5xl font-bold text-white">About Me</h3>
        </div>

        <div className="gap-10 px-7 md:px-10 lg:flex-wrap lg:flex">

          <div className="w-[100%] 3ti:w-[30%] text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
          <Image src={education} width={250} height={250} alt="" className="pb-3 mx-auto"/>
            <h3 className="pt-8 pb-2 text-lg font-medium text-white">
              Education
            </h3>
            <p className="py-2 text-slate-300">
              High School Student
            </p>
            <h4 className="py-3 text-teal-500">Relevant Courses</h4>
            
            <p className="py-1 text-gray-400">Programming I (Python)</p>
            <p className="py-1 text-gray-400">AP Computer Science A (Java)</p>
            <p className="py-1 text-gray-400">AP Calc AB/BC</p>
            <p className="py-1 text-gray-400">Trig/Pre-Calc Honors</p>
            <p className="py-1 text-gray-400">Algebra II Honors</p>
            <p className="py-1 text-gray-400">Engineering Design IS</p>


          </div>

          <div className="w-[100%] 3ti:w-[30%] text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
          <Image src={code} width={150} height={150} alt="" className="py-10 mx-auto"/>
            <h3 className="pb-2 text-lg font-medium text-white pt-9">
              Programming Languages
            </h3>
            <h4 className="py-3 text-teal-500">I am fluent in these.</h4>
            
            <p className="py-1 text-gray-400">Python</p>
            <p className="py-1 text-gray-400">Java</p>
            <p className="py-1 text-gray-400">HTML</p>
            <p className="py-1 text-gray-400">CSS</p>
            <p className="py-1 text-gray-400">ReactJS</p>
            <p className="py-1 text-gray-400">TailwindCSS</p>
            <p className="py-1 text-gray-400">NextJS</p>


          </div>

          <div className="w-[100%] 3ti:w-[30%] text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
          <Image src={os} width={218} height={250} alt="" className="pt-3 mx-auto"/>
            <h3 className="pt-8 pb-2 text-lg font-medium text-white">
              Operating Systems
            </h3>

            <h4 className="py-2 text-teal-500">In order from most to least used.</h4>
            
            <p className="py-1 text-gray-400">Microsoft Windows</p>
            <p className="py-1 text-gray-400">Ubuntu based distributions</p>
            <p className="py-1 text-gray-400">Arch based distributions</p>
            <p className="py-1 text-gray-400">Debian based distributions</p>
            <p className="py-1 text-gray-400">Apple Mac OS</p>


          </div>

          <div className="w-[100%] 3ti:w-[30%] text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
          <Image src={briefcase} width={160} height={250} alt="" className="pt-8 mx-auto"/>
            <h3 className="pt-16 pb-2 text-lg font-medium text-white">
              Professional Experience
            </h3>

            <h4 className="py-2 text-teal-500">More Information on Resume.</h4>
            
            <p className="py-1 text-gray-400">
              <span className="font-extrabold "> Web Developer at SmartPark</span>
              <br>
              </br>
              I work alongside a team to develop the <span className="font-bold text-teal-500 underline"><a href="https://trysmartpark.com/" target="_blank">website</a></span>.
            </p>
            <p className="pt-4 font-bold text-gray-400">Many personal projects on github.</p>


          </div>

          <div className="w-[100%] 3ti:w-[30%] text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
          <Image src={languages} width={210} height={250} alt="" className="pb-3 mx-auto"/>
            <h3 className="pt-8 pb-2 text-lg font-medium text-white">
              Languages Spoken
            </h3>
            <p className="py-1 text-gray-400">English Bilingual Proficiency</p>
            <p className="py-1 text-gray-400">Spanish Bilingual Proficiency</p>
            <p className="py-1 text-gray-400">French Limited Working Proficiency</p>

            <h4 className="pt-3 text-teal-500">Currently Learning</h4>
            
            <p className="py-1 text-gray-400">German Elementary Level</p>

          </div>

          <div className="w-[100%] 3ti:w-[30%] text-center p-6 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
          <Image src={guitar} width={270} height={250} alt="" className="pb-1 mx-auto"/>
            <h3 className="pb-2 text-lg font-medium text-white">
              Hobbies
            </h3>
            <p className="py-1 text-gray-400">Club and High School Soccer</p>
            <p className="py-1 text-gray-400">Acoustic and Electric Guitar</p>
            <p className="py-1 text-gray-400">Programming personal projects</p>
            <p className="py-1 text-gray-400">School Clubs <span className="font-bold text-teal-500 cursor-pointer"><a href="#one">listed on resume </a></span></p>
          </div>

        </div>
      </section>

    );

};
export default Tiles;
