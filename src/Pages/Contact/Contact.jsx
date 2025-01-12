import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className=" max-w-7xl mx-auto py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              Get In Touch
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                  // onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                  // onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              Contact Information
            </h2>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-500 text-xl" />
              <a href="mailto:chanbadsha005@gmail.com">
                <p className="text-gray-800 font-medium">Email</p>
                <p className="text-gray-600">chanbadsha005@gmail.com</p>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-500 text-xl" />
              <a href="callto:01401213135">
                <p className="text-gray-800 font-medium">Phone</p>
                <p className="text-gray-600">+8801401213135</p>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <div>
                <p className="text-gray-800 font-medium">Address</p>
                <p className="text-gray-600">Dhanmondi, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
