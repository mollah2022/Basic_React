import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* ---------- Brand Section ---------- */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Sajib Ahmed</h2>
          <p className="text-gray-400 leading-relaxed">
            MERN Stack Developer & Problem Solver. I build responsive, modern
            and user-friendly web apps.
          </p>
        </div>

        {/* ---------- Quick Links ---------- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-indigo-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-indigo-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-indigo-400 transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contract" className="hover:text-indigo-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* ---------- Contact Info ---------- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Contact Info
          </h3>
          <p className="text-gray-400">Email: sajib@example.com</p>
          <p className="text-gray-400">Phone: +880 1234-567890</p>
          <p className="text-gray-400">Location: Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* ---------- Bottom ---------- */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sajib Ahmed. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
