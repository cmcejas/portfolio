'use client'
 
import { useState } from 'react'
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  email: string;
  subject: string;
  body: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await axios.post("https://eoiwigmaejhiwu7.m.pipedream.net", data);
      
      toast.success("Your message has been sent! Check your inbox for a confirmation.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      
      reset(); // Reset the form
    } catch (e) {
      console.error(e);
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <div id="three" className="w-3/4 m-auto text-lg text-white flex flex-col bg-bgc2">
      <ToastContainer />
      
      <h2 className="flex items-center justify-center text-5xl font-black text-transparent transition-transform duration-300 rounded-md cursor-pointer bg-clip-text bg-gradient-to-tl from-teal-200 to-teal-500 hover:transform hover:-translate-y-1 md:py-2 md:font-bold font-poppins lg:text-6xl">
        <a href="#three">Contact Me</a>
      </h2>
      
      <div className="mt-8 mb-8">
        <form 
          className="md:mx-auto flex flex-col text-center md:text-left" 
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-left mb-1">Email Address</label>
          <input 
            type="email"
            placeholder="Enter your email here" 
            className="outline-none bg-slate-800 placeholder:italic placeholder:text-slate-400 rounded-md border-0 px-2 py-1 md:w-[450px] h-[36px] text-slate-300 shadow-sm sm:text-sm sm:leading-6"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && (
            <span className="text-red-400 text-sm mt-1 text-left">{errors.email.message}</span>
          )}
          
          <label className="text-left mb-1 mt-4">Subject</label>
          <input
            type="text"
            placeholder="Enter your subject here" 
            className="outline-none bg-slate-800 placeholder:italic placeholder:text-slate-400 rounded-md border-0 px-2 py-1 md:w-[450px] h-[36px] text-slate-300 shadow-sm sm:text-sm sm:leading-6"
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && (
            <span className="text-red-400 text-sm mt-1 text-left">{errors.subject.message}</span>
          )}
          
          <label className="text-left mb-1 mt-4">Body Text</label>
          <textarea 
            placeholder="Enter your message here" 
            className="outline-none resize-none bg-slate-800 placeholder:italic placeholder:text-slate-400 rounded-lg border-0 px-2 py-2 md:w-[450px] h-[300px] text-slate-300 shadow-sm sm:text-sm sm:leading-6"
            {...register("body", { required: "Message is required" })}
          />
          {errors.body && (
            <span className="text-red-400 text-sm mt-1 text-left">{errors.body.message}</span>
          )}
          
          <button 
            className="text-md hover:transform hover:-translate-y-1 transition-transform duration-300 py-2 px-3 rounded-md md:w-[450px] cursor-pointer bg-gradient-to-tl from-teal-200 to-teal-600 mt-6 disabled:opacity-50 disabled:cursor-not-allowed" 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
