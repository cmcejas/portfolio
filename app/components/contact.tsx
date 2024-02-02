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
    formState: { isSubmitting },
    reset,
  } = useForm<FormData>();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    axios
      .post("https://eoiwigmaejhiwu7.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Your message has been sent! Check your inbox for a confirmation before submitting another one.`
        );
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }); // Display a success toast
        reset(); // Reset the form
      })
      .catch((e) => console.error(e));
  };

  return (
    <div id="three" className=" w-3/4 m-auto text-lg text-white flex flex-col bg-bgc2">
      <ToastContainer />
      <h2 className="flex items-center justify-center text-5xl font-black text-transparent transition-transform duration-300 rounded-md cursor-pointer bg-clip-text bg-gradient-to-tl from-teal-200 to-teal-500 hover:transform hover:-translate-y-1 md:py-2 md:font-bold font-poppins lg:text-6xl">
        <a href="#three">Contact Me</a>
      </h2>

      <br></br><br></br>

      <form className=" md:mx-auto flex flex-col text-center md:text-left" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-left">Email Address</p>
        <textarea placeholder="Enter your email here" className="outline-none resize-none bg-slate-800 placeholder:italic placeholder:text-slate-400 rounded-md border-0 px-2 py-1 md:w-[250px] h-[36px] text-slate-300 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 text-black"
            {...register("email")}
        />

        <br></br>

        <p className="text-left">Subject</p>
        <textarea placeholder="Enter your title here" className="outline-none resize-none bg-slate-800 placeholder:italic placeholder:text-slate-400 rounded-md border-0 px-2 py-1 md:w-[450px] h-[36px] text-slate-300 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 text-black"
            {...register("subject")}
        />

        <br></br>

        <p className="text-left">Body Text</p>
        <textarea placeholder="Enter your body text here" className="outline-none resize-none bg-slate-800 placeholder:italic placeholder:text-slate-400 rounded-lg border-0 px-2 py-2 md:w-[450px] h-[300px] text-slate-300 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 text-black"
            {...register("body")}
        />

        <br></br>

        <button className="text-md hover:transform hover:-translate-y-1 transition-transform duration-300 py-0.5 px-3 rounded-md md:w-[450px] cursor-pointer bg-gradient-to-tl from-teal-200 to-teal-600" type="submit" disabled={isSubmitting}>
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
