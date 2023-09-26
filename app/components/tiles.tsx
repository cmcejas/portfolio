import Image from 'next/image';
import code from 'public/code.png';
import education from 'public/education.png'
import os from 'public/os.png';
import briefcase from 'public/briefcase.png';
import languages from 'public/languages.png';
import guitar from 'public/guitar.png';

const Tiles = () => {
    return(

        <section id="two" className="pt-40 md:pt-0 lg:pt-0">
        <br className="invisible md:visible"></br>
        <div>
          <h3 className="text-5xl py-1 text-white font-bold">About Me</h3>
        </div>

        <div className="px-7 md:px-10 lg:flex-wrap lg:flex gap-10">

          <div className="lg:w-[30%] text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
          <Image src={education} width={250} height={250} alt="" className="mx-auto pb-3"/>
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

          <div className="lg:w-[30%] text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
          <Image src={code} width={150} height={150} alt="" className="py-10 mx-auto"/>
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

          <div className="lg:w-[30%] text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
          <Image src={os} width={218} height={250} alt="" className="mx-auto pt-3"/>
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

          <div className="lg:w-[30%] text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
          <Image src={briefcase} width={160} height={250} alt="" className="mx-auto pt-8"/>
            <h3 className="text-lg font-medium pt-16 pb-2 text-white">
              Professional Experience
            </h3>

            <h4 className="py-2 text-teal-500">More Information on Resume.</h4>
            
            <p className="text-gray-400 py-1">
              <span className=" font-extrabold"> Drexel Digital Development</span>
              <br>
              </br>
              Worked alongside a team to develop <span className="text-teal-500 font-bold underline"><a href="https://www.platepals.org/" target="_blank"> Plate Pals</a></span>.
            </p>
            <p className="text-gray-400 pt-4 font-bold">Many personal projects on github.</p>


          </div>

          <div className="lg:w-[30%] text-center p-10 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
          <Image src={languages} width={210} height={250} alt="" className="mx-auto pb-3"/>
            <h3 className="text-lg font-medium pt-8 pb-2 text-white">
              Languages Spoken
            </h3>
            <p className="text-gray-400 py-1">English Bilingual Proficiency</p>
            <p className="text-gray-400 py-1">Spanish Bilingual Proficiency</p>
            <p className="text-gray-400 py-1">French Limited Working Proficiency</p>

            <h4 className="pt-3 text-teal-500">Currently Learning</h4>
            
            <p className="text-gray-400 py-1">German Elementary Level</p>

          </div>

          <div className="lg:w-[30%] text-center p-6 rounded-xl my-10 hover:transform hover:-translate-y-2 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(200, 200, 200, 0.2)' }}>
          <Image src={guitar} width={270} height={250} alt="" className="mx-auto pb-1"/>
            <h3 className="text-lg font-medium pb-2 text-white">
              Hobbies
            </h3>
            <p className="text-gray-400 py-1">Club and High School Soccer</p>
            <p className="text-gray-400 py-1">Acoustic and Electric Guitar</p>
            <p className="text-gray-400 py-1">Programming personal projects</p>
            <p className="text-gray-400 py-1">School Clubs <span className="font-bold text-teal-500 cursor-not-allowed">listed on resume </span></p>
          </div>

        </div>
      </section>

    );

};
export default Tiles;