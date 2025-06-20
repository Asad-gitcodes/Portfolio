import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";


const Header = () => {
  // Mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Contact form toggle
  const [contactFormOpen, setContactformOpen] = useState(false);
  const openContactform = () => setContactformOpen(true);
  const closeContactform = () => setContactformOpen(false);

  const navItems = ["Home", "About", "Projects", "Experience", "Contact"];

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      {/* Main Nav */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3, duration: 1.2 }}
          className="flex items-center"
        >
          <div
            className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400 shadow-lg flex items-center justify-center text-transparent bg-clip-text font-extrabold text-xl mr-3 border-2 border-gray-500 hover:scale-105 transition-transform duration-300"
            aria-label="Logo initials"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-bold"> A.A</span>
            
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Asad Abdul
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="lg:flex hidden space-x-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 + index * 0.2 }}
              className="relative group"
            >
              <a
                href="#"
                className="text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Icons & Button */}
        <div className="md:flex hidden items-center space-x-4 ml-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            href="#"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            href="#"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>

          <motion.button
            onClick={openContactform}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-black/80 py-6 backdrop-blur-sm"
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-white hover:text-violet-400 text-lg font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <a href="#" className="text-white hover:text-violet-400" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="#" className="text-white hover:text-violet-400" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
          </div>

          {/* Contact Me Button */}
          <button
            onClick={() => {
              toggleMenu();
              openContactform();
            }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold text-white"
          >
            Contact Me
          </button>
        </motion.ul>
      )}

      {/* Contact Form Modal */}
      <AnimatePresence>
      {contactFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div 
          initial={{scale:0.8, opacity: 0, y:30 }}
          animate={{scale:1, opacity: 1, y:0 }}
          exit={{ scale:0.8, opacity: 0, y:30 }}
          transition={{ 
            type:"spring",
            damping: 30,
            stiffiness: 200,
            duration: 0.8 }}
          className="bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-md">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-300">Get In Touch</h1>
              <button onClick={closeContactform}>
                <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
              </button>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{scale:1.03}}
                whileTap={{scale: 0.97}}
                className="w-full mt-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
