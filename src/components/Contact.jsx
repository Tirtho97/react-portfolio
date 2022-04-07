import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen py-40 pt-72 bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/57ecabc1-9919-4452-8a1c-ed98592e7e03"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="py-4 text-[20px] text-[#8892b0]">
            Submit the form below and I'll contact you as early as possible...
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message..."
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Connect!
        </button>
      </form>
    </div>
  );
};

export default Contact;
