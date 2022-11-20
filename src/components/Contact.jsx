import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#320606]">
      {/*co ntainer */}
      <form
        method="POST"
        action="https://getform.io/f/a89957ec-b274-4580-82a9-f4849062915a"
        className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="w-[360px] mx-auto">
          {/*header */}
          <div className="w-[360px] mx-auto md:flex justify-center items-center">
            <h1 className="text-4xl mb-[20px] md:mb-[5px] text-gray-300 md:text-center border-b-4 border-b-[#1BE017] w-[120px]">
              Contact
            </h1>
          </div>

          <div className="w-[360px] md:w-[500px] md:mt-[10px] mx-auto mb-[20px]">
            <p className="text-2xl text-gray-300">
              // Submit the form below or shoot me an email-
              <span className="text-red-600">ezeanthony3199gmail.com</span>
            </p>
          </div>

          {/*inputs */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full p-2 bg-[#ccd6f6] md:mt-[25px]"
          />

          <input
            type="text"
            placeholder="Email"
            name="email"
            className="w-full p-2 bg-[#ccd6f6] mt-[10px]"
          />

          <textarea
            className="w-full bg-[#ccd6f6] mt-[10px] p-2"
            name="message"
            rows="10"
            placeholder="message"></textarea>

          <button className="bg-pink-600 w-[147px] flex items-center py-1 pl-3 mx-auto mt-6 text-gray-100 font-bold hover:bg-[#1BE017] hover:text-white">
            Let's Collaborate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
