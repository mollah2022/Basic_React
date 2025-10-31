import React from "react";

const Contract = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          📩 Contact Us
        </h2>

        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Fill out the form below and we’ll get back
          to you soon.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300"
          >
            Send Message 🚀
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Or email us directly at{" "}
          <span className="text-indigo-600 font-semibold">
            support@example.com
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contract;
