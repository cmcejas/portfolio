'use client'
 
import { useState } from 'react'
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  email: string;
  subject: string;
  body: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    axios
      .post("https://eoiwigmaejhiwu7.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Thanks for the message! Check your inbox for a response soon!`
        );
        window.location.href = "#one";
      })
      .catch((e) => console.error(e));
  };

  return (
    <div id="three" className="px-2 m-auto w-3/4 md:w-1/4 bg-bgc2 text-white text-lg">
        <h2 className="inline-block text-center text-transparent bg-clip-text cursor-pointer bg-gradient-to-tl from-teal-200 to-teal-500 max-w-sm px-4 py-2 rounded-md ml-8 hover:transform hover:-translate-y-1 transition-transform duration-300 text-4xl md:py-2 font-black md:font-bold font-poppins sm:text-4xl md:text-6xl">
            <a href="#three">Contact Me</a>
        </h2>

        <br></br><br></br><br></br><br></br>

        <form className="md:text-left text-center" onSubmit={handleSubmit(onSubmit)}>

        <p className="lg:text-left">Email Address</p>
        <input placeholder="Enter your email here" className="placeholder:italic placeholder:text-slate-400 rounded-md border-0 px-2 py-1 md:w-[250px] h-[32px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-300 sm:text-sm sm:leading-6 text-black"
            {...register("email")}
            type="email"
        />

        <br></br><br></br>

        <p className="lg:text-left">Subject</p>
        <textarea placeholder="Enter your title here" className="placeholder:italic placeholder:text-slate-400 rounded-md border-0 px-2 py-1 md:w-[450px] h-[32px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inherit focus:ring-white-300 sm:text-sm sm:leading-6 text-black"
            {...register("subject")}
            type="subject"
        />

        <br></br><br></br>

        <p className="lg:text-left">Body Text</p>
        <textarea placeholder="Enter your body text here" className="placeholder:italic placeholder:text-slate-400 rounded-md border-0 px-2 py-2 md:w-[450px] h-[400px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-300 sm:text-sm sm:leading-6 text-black"
            {...register("body")}
            type="body"
        />

        <br></br><br></br>

        <button className="float-left text-md hover:transform hover:-translate-y-1 transition-transform duration-300 py-0.5 px-3 rounded-md cursor-pointer bg-gradient-to-tl from-teal-200 to-teal-600" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Submit"}
        </button>
        <br></br><br></br>
        {successMessage && <p>{successMessage}</p>}
        </form>

        <br></br>
        <br></br>

    </div>
  );
};

export default Contact;