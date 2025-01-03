import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted:", { name, email, message });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-gray-50 max-w-7xl mx-auto py-16 px-6 md:px-12 flex">
      <div className="w-full md:w-1/2 mr-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Contact Information
        </h2>
        <div className="flex items-center mb-4">
          <FaEnvelope className="mr-4 text-blue-500" />
          <p>chanbadsha005@gmail.com</p>
        </div>
        <div className="flex items-center mb-4">
          <FaPhoneAlt className="mr-4 text-blue-500" />
          <p>+8801401213135</p>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-4 text-blue-500" />
          <p>Dhanmondi,Dhaka,Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
